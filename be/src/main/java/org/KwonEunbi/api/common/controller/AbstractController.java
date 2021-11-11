package org.KwonEunbi.api.common.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;


import lombok.RequiredArgsConstructor;

@RestController
public abstract class AbstractController<T> {
	public abstract ResponseEntity<Long> save(T t);
	public abstract ResponseEntity<Long> delete(T t);
	public abstract ResponseEntity<Long> count();
	public abstract ResponseEntity<List<T>> findAll();
	public abstract ResponseEntity<T> getOne(long id);
	public abstract ResponseEntity<Optional<T>> findById(long id);
	public abstract ResponseEntity<Boolean> existsById(long id);
}