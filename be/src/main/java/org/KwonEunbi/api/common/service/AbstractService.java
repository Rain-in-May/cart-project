package org.KwonEunbi.api.common.service;

import java.util.List;
import java.util.Optional;

public abstract class AbstractService<T> {
	public abstract long save(T t);
	public abstract long delete(T t);
	public abstract long count();
	public abstract List<T> findAll();
	public abstract T getOne(long id);
	public abstract Optional<T> findById(long id);
	public abstract boolean existsById(long id);
}