package com.metro.repository;

import org.springframework.data.repository.CrudRepository;

import com.metro.domain.Purchase;

public interface PurchaseRepository extends CrudRepository<Purchase, Long> {

}
