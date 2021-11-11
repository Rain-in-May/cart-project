package org.KwonEunbi.api.common.utl;
import java.util.ArrayList;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

/*
리스트 형식의 추상화: Generic
커스텀 List<T> 를 제작하여 사용함
p.82 참조
메소드 목록 : https://www.javatpoint.com/java-arraylist
 * */
@Component("vc") @Lazy
public class Vector<T> {
	private ArrayList<T> vc;
	public Vector() {vc = new ArrayList<T>();}
	public void add(T t) {vc.add(t);}
	public T get(int i) {return vc.get(i);}
	public ArrayList<T> get(){return vc;}
	public void clear() {vc.clear();}
	public int size() {return vc.size();}
	public void set(ArrayList<T> list) {vc = list;}

}