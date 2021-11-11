package org.KwonEunbi.api.user.controller;

import lombok.RequiredArgsConstructor;
import org.KwonEunbi.api.exhibition.domain.Exhbn;
import org.KwonEunbi.api.review.service.ReviewServiceImpl;
import org.KwonEunbi.api.user.domain.UserDTO;
import org.KwonEunbi.api.user.domain.UserResponseDTO;
import org.KwonEunbi.api.user.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import org.KwonEunbi.api.user.domain.UserVO;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import io.swagger.annotations.Authorization;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
@Api(tags = "users")
public class UserController {
	private final UserService userService;
	private final ModelMapper modelMapper;

	@GetMapping("")
	public ResponseEntity<List<UserVO>> all(){
		return ResponseEntity.ok(userService.all());
	}
	@GetMapping("/{id}")
	public ResponseEntity<UserVO> getOne(@PathVariable long id){
		return ResponseEntity.ok(userService.getOne(id));
	}
	@GetMapping("/findId/{id}")
	public ResponseEntity<String> findId(@PathVariable long id){
		return ResponseEntity.ok(userService.findId(id));
	}
	@GetMapping("/checkId/{id}")
	public boolean checkId(@PathVariable String id){
		return userService.checkId(id);
	}
	@GetMapping("/checkEmail/{email}")
	public boolean checkEmail(@PathVariable String email){
		return userService.checkEmail(email);
	}
	@PutMapping("/{id}")
	public ResponseEntity<String> edit(@PathVariable long id, @RequestBody UserVO user){
		UserVO u = userService.getOne(id);
		if(!(u.getPassword().equals(user.getPassword()) || user.getPassword().equals(""))) {
			u.setPassword(user.getPassword());
		}
		if(!(u.getName().equals(user.getName()) || user.getName().equals(""))) {
			u.setName(user.getName());
		}
		if(!(u.getEmail().equals(user.getEmail()) || user.getEmail().equals(""))) {
			u.setEmail(user.getEmail());
		}
		if(!(u.getPreferGenre().equals(user.getPreferGenre()) || user.getPreferGenre().equals(""))) {
			u.setPreferGenre(user.getPreferGenre());
		}
		if(!(u.getPhoneNumber().equals(user.getPhoneNumber()) || user.getPhoneNumber().equals(""))) {
			u.setPhoneNumber(user.getPhoneNumber());
		}
		if(u.getPreferGenre().equals("painting")){
			u.setPreferGenre("회화");
		}else if(u.getPreferGenre().equals("craft")){
			u.setPreferGenre("공예");
		}else if(u.getPreferGenre().equals("media")){
			u.setPreferGenre("미디어");
		}else if(u.getPreferGenre().equals("sculpture")){
			u.setPreferGenre("조각");
		}else if(u.getPreferGenre().equals("installation")){
			u.setPreferGenre("설치");
		}
		return ResponseEntity.ok(userService.save(u));
	}

	@PutMapping("/profileImage/{id}")
	public ResponseEntity<String> editImage(@PathVariable long id, @RequestBody UserVO user){
		System.out.println(user.getUserImage());
		UserVO u = userService.getOne(id);
		u.setUserImage(user.getUserImage());
		return ResponseEntity.ok(userService.save(u));
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<String> delete(@PathVariable long id){
		return ResponseEntity.ok(userService.delete(id));
	}

	@PostMapping("/signin")
	@ApiOperation(value = "${UserController.signin}")
	@ApiResponses(value = { //
			@ApiResponse(code = 400, message = "Something went wrong"),
			@ApiResponse(code = 422, message = "Invalid username/password supplied") })
	public ResponseEntity<Map<String, Object>> login(@RequestBody UserDTO user) {
		return ResponseEntity.ok(userService.signin(user.getUsername(), user.getPassword()));
	}

	@PostMapping("/signup")
	@ApiOperation(value = "${UserController.signup}")
	@ApiResponses(value = { //
			@ApiResponse(code = 400, message = "Something went wrong"),
			@ApiResponse(code = 403, message = "Access denied"),
			@ApiResponse(code = 422, message = "Username is already in use") })
	public String signup(@ApiParam("Signup User") @RequestBody UserDTO user) {
		switch (user.getPreferGenre()){
			case "painting": user.setPreferGenre("회화"); break;
			case "media": user.setPreferGenre("미디어"); break;
			case "sculpture": user.setPreferGenre("조각"); break;
			case "craft": user.setPreferGenre("공예"); break;
			case "installation": user.setPreferGenre("설치"); break;
			default : user.setPreferGenre("회화"); break;
		}
		return userService.signup(modelMapper.map(user, UserVO.class));
	}

	@DeleteMapping(value = "/delete/{username}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@ApiOperation(value = "${UserController.delete}", authorizations = { @Authorization(value = "apiKey") })
	@ApiResponses(value = { //
			@ApiResponse(code = 400, message = "Something went wrong"),
			@ApiResponse(code = 403, message = "Access denied"), //
			@ApiResponse(code = 404, message = "The user doesn't exist"),
			@ApiResponse(code = 500, message = "Expired or invalid JWT token") })
	public String delete(@ApiParam("Username") @PathVariable String username) {
		userService.delete(username);
		return username;
	}

	@GetMapping(value = "/id/{username}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@ApiOperation(value = "${UserController.search}", response = UserResponseDTO.class, authorizations = {
			@Authorization(value = "apiKey") })
	@ApiResponses(value = { //
			@ApiResponse(code = 400, message = "Something went wrong"),
			@ApiResponse(code = 403, message = "Access denied"),
			@ApiResponse(code = 404, message = "The user doesn't exist"),
			@ApiResponse(code = 500, message = "Expired or invalid JWT token") })
	public UserResponseDTO search(@ApiParam("Username") @PathVariable String username) {
		return modelMapper.map(userService.search(username), UserResponseDTO.class);
	}

	@GetMapping(value = "/me")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_CLIENT')")
	@ApiOperation(value = "${UserController.me}", response = UserResponseDTO.class, authorizations = {
			@Authorization(value = "apiKey") })
	@ApiResponses(value = {
			@ApiResponse(code = 400, message = "Something went wrong"),
			@ApiResponse(code = 403, message = "Access denied"),
			@ApiResponse(code = 500, message = "Expired or invalid JWT token") })
	public UserResponseDTO whoami(HttpServletRequest req) {
		return modelMapper.map(userService.whoami(req), UserResponseDTO.class);
	}
	@GetMapping("/refresh")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
	public String refresh(HttpServletRequest req) {
		return userService.refresh(req.getRemoteUser());
	}
}
