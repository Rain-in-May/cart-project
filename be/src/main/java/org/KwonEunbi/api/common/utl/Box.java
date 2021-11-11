package org.KwonEunbi.api.common.utl;

import java.util.*;
import java.util.Vector;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


@Component("bx") @Lazy
public class Box<T> {
	private HashMap<String,T> box;
	public Box() {box = new HashMap<String, T>();}
	public void clear() {box.clear();}
	public boolean	containsKey(String key) {return box.containsKey(key);}
	public boolean	containsValue(String value) {return box.containsValue(value);}
	public T get(String key) {return box.get(key);}
	public HashMap<String, T> get(){return box;}
	public boolean	isEmpty() {return box.isEmpty();}
	public void put(String s, T t) {box.put(s, t);}
	public void remove(String key) {box.remove(key);}
	public void replace(String key, T t) {box.replace(key, t);}
	public int size() {return box.size();}
	@SuppressWarnings("unchecked")
	public List<T> listValues(String key){return (List<T>) box.get(key);}
	@SuppressWarnings("unchecked")
	public Set<T> setValues(String key){return (Set<T>) box.get(key);}
	public void putAll(Vector<String> l, Vector<T> v) {
		for(int i=0; i< l.size(); i++) {
			box.put(l.get(i), v.get(i));
		}
	}
}
