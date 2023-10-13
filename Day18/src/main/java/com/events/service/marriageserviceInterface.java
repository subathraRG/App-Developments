package com.events.service;

import java.util.List;

import com.events.Entity.eventdecorationmarriage;

public interface marriageserviceInterface
{
public List< eventdecorationmarriage>getMarriage();
public  eventdecorationmarriage postMarriage(eventdecorationmarriage edm);
public  eventdecorationmarriage putMarriage(eventdecorationmarriage edm);
public void deleteMarriage(int id);
}
