package com.events.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.events.Entity.User;
import com.events.dto.JwtAuthenticationResponse;
import com.events.dto.RefreshTokenRequest;
import com.events.dto.SigninRequest;
import com.events.dto.SignupRequest;
import com.events.service.AuthenticationService;

import lombok.RequiredArgsConstructor;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {
private final AuthenticationService authenticationService;

@PostMapping("/signup")
public ResponseEntity<User> signup(@RequestBody SignupRequest signuprequest){
  return ResponseEntity.ok(authenticationService.signup(signuprequest));	
}

@PostMapping("/signin")
public ResponseEntity<JwtAuthenticationResponse> signin(@RequestBody SigninRequest signinRequest){
	return ResponseEntity.ok(authenticationService.signin(signinRequest));
}

@PostMapping("/refresh")
public ResponseEntity<JwtAuthenticationResponse> refresh(@RequestBody RefreshTokenRequest refreshTokenRequest){
	return ResponseEntity.ok(authenticationService.refreshToken(refreshTokenRequest));
}
}