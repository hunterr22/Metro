package com.metro.service;

import java.util.Optional;

import com.metro.domain.Purchase;

public interface PurchaseService {
	public void savePurchase(Purchase purchase);
	public Iterable<Purchase> findAllPurchases();
	public Optional<Purchase> findPurchaseById(long id);
}
