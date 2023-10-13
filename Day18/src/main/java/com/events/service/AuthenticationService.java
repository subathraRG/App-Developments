package com.events.service;

import com.events.Entity.User;
import com.events.dto.JwtAuthenticationResponse;
import com.events.dto.RefreshTokenRequest;
import com.events.dto.SigninRequest;
import com.events.dto.SignupRequest;

public interface AuthenticationService {
	User signup(SignupRequest signupRequest);
	JwtAuthenticationResponse signin(SigninRequest signinRequest);
	JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}