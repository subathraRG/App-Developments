package com.events.service.impl;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.events.Repositary.UserRepositary;
import com.events.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
 private final UserRepositary userRepository;
 @Override
 public UserDetailsService userDetailsService() {
	 return new UserDetailsService() {

		@Override
		public UserDetails loadUserByUsername(String username) {
			
			return userRepository.findByEmail(username)
					.orElseThrow(()->new UsernameNotFoundException("user not found"));
		}
		 
	 };
 }
}