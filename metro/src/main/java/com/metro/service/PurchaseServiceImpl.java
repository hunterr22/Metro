package com.metro.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.metro.domain.Events;
import com.metro.repository.EventsRepository;

@Service
public class PurchaseServiceImpl implements PurchaseService {
	@Autowired
	private EventsRepository repo;


	public void savePurchase(Events purchase) {
		repo.save(purchase);
	}


	public Iterable<Events> findAllPurchases() {
		return repo.findAll();
	}


	public Optional<Events> findPurchaseById(long id) {
		return repo.findById(id);
	}

}
