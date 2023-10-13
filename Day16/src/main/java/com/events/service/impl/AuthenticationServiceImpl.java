package com.events.service.impl;
import java.util.HashMap;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.events.Entity.Role;
import com.events.Entity.User;
import com.events.Repositary.UserRepositary;
import com.events.dto.JwtAuthenticationResponse;
import com.events.dto.RefreshTokenRequest;
import com.events.dto.SigninRequest;
import com.events.dto.SignupRequest;
import com.events.service.AuthenticationService;
import com.events.service.JWTService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService{
private final UserRepositary userRepository;
private final PasswordEncoder passwordEncoder;
private final JWTService jwtService;
private final AuthenticationManager authenticationManager;
public User signup(SignupRequest signupRequest) {
	User user=new User();
	user.setEmail(signupRequest.getEmail());
	user.setName(signupRequest.getName());
	user.setRole(Role.USER);
	user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
	
	return userRepository.save(user);
	
}

public JwtAuthenticationResponse signin(SigninRequest signinRequest) {
	authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(signinRequest.getEmail(),
			signinRequest.getPassword()));
	
	var user=userRepository.findByEmail(signinRequest.getEmail()).orElseThrow(() -> new IllegalArgumentException("Invaild email or password"));
	var jwt=jwtService.generateToken(user);
	var refreshToken=jwtService.generateRefreshToken(new HashMap<>(),user);
	
	JwtAuthenticationResponse jwtAuthenticationResponse=new JwtAuthenticationResponse();
	jwtAuthenticationResponse.setToken(jwt);
	jwtAuthenticationResponse.setRefreshToken(refreshToken);
	return jwtAuthenticationResponse;

}

public JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest) {
	String userEmail=jwtService.extractUserName(refreshTokenRequest.getToken());
	User user=userRepository.findByEmail(userEmail).orElseThrow();
	if(jwtService.isTokenValid(refreshTokenRequest.getToken(), user)) {
		var jwt=jwtService.generateToken(user);
		JwtAuthenticationResponse jwtAuthenticationResponse=new JwtAuthenticationResponse();
		jwtAuthenticationResponse.setToken(jwt);
		jwtAuthenticationResponse.setRefreshToken(refreshTokenRequest.getToken());
		return jwtAuthenticationResponse;
	}
	return null;
}
}