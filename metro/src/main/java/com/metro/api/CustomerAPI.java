package com.metro.api;

import java.net.URI;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.util.UriComponentsBuilder;

import com.metro.domain.Customer;
import com.metro.repository.CustomersRepository;

@RestController
@RequestMapping("/customers")
public class CustomerAPI {

	ArrayList<Customer> cList = new ArrayList<Customer>();

	public CustomerAPI() {
		Customer c1 = new Customer(1, "Hampton", "pass", "Hampton@bah.com");
		Customer c2 = new Customer(2, "Fox", "pass", "Fox@bah.com");
		Customer c3 = new Customer(3, "Cameron", "pass", "Cameron@bah.com");
		Customer c4 = new Customer(4, "MICK", "pass", "MICK@bah.com");
		
		cList.add(c1);
		cList.add(c2);
		cList.add(c3);
		cList.add(c4);
	}
	
	@GetMapping
	public Collection<Customer> getAll() {
		return this.cList;
	}

	@GetMapping("/{customerId}")
	public Customer getCustomerById(@PathVariable("customerId") long id) {
		
		Customer customer = null;
		for (int i = 0; i < cList.size(); i++) {
			if (cList.get(i).getId() == id) {
				customer = cList.get(i);
			}
		}
		return customer;
	}
}
