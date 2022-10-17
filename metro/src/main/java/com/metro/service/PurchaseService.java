package com.metro.service;

import java.util.Optional;

import com.metro.domain.Events;

public interface PurchaseService {
	public void savePurchase(Events purchase);
	public Iterable<Events> findAllPurchases();
	public Optional<Events> findPurchaseById(long id);
}
