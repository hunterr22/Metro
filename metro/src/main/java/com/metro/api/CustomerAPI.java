package com.metro.api;

import java.net.URI;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
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
	/*
	 * This section is temporary, using hard coded customer values to verify API is
	 * functioning
	 * before configuring the internal database
	 */
	ArrayList<Customer> customerList = new ArrayList<>();

	public CustomerAPI() {
		Customer c1 = new Customer(1, "Austin", "pass", "austin@bah.com");
		Customer c2 = new Customer(2, "Michael", "pass", "michael@bah.com");
		Customer c3 = new Customer(3, "Timothy", "pass", "timothy@bah.com");
		Customer c4 = new Customer(4, "Chris", "pass", "chris@bah.com");
		Customer c5 = new Customer(5, "Corey", "pass", "corey@bah.com");
		Customer c6 = new Customer(6, "Jay", "pass", "jay@bah.com");
		Customer c7 = new Customer(7, "Phu", "pass", "phu@bah.com");
		Customer c8 = new Customer(8, "Dipendra", "pass", "dipendra@bah.com");

		customerList.add(c1);
		customerList.add(c2);
		customerList.add(c3);
		customerList.add(c4);
		customerList.add(c5);
		customerList.add(c6);
		customerList.add(c7);
		customerList.add(c8);
	}

	/*
	 * ------------------------- END TEMP SECTION -------------------------
	 */

	@Autowired
	CustomersRepository repo;

	@GetMapping
	/*
	 * public Iterable<Customer> getAll() {
	 * return repo.findAll();
	 * }
	 */
	public Collection<Customer> getAll() {
		return this.customerList;
	}

	@GetMapping("/{customerId}")
	/*
	 * public Optional<Customer> getCustomerById(@PathVariable("customerId") long
	 * id) {
	 * return repo.findById(id);
	 * }
	 */
	public Customer getCustomerById(@PathVariable("customerId") long id) {
		Customer customer = null;
		for (int i = 0; i < customerList.size(); i++) {
			if (customerList.get(i).getId() == id) {
				customer = customerList.get(i);
			}
		}

		return customer;
	}

	@PostMapping
	public ResponseEntity<?> addCustomer(@RequestBody Customer newCustomer, UriComponentsBuilder uri) {
		if (newCustomer.getId() != 0 || newCustomer.getName() == null || newCustomer.getEmail() == null) {
			return ResponseEntity.badRequest().build(); // Reject - we'll assign the customer id
		}

		newCustomer = repo.save(newCustomer);

		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(newCustomer.getId()).toUri();

		return ResponseEntity.created(location).build();
	}

	@PutMapping("/{customerId}")
	public ResponseEntity<?> putCustomer(@RequestBody Customer newCustomer,
			@PathVariable("customerId") long customerId) {

		if (newCustomer.getId() != customerId || newCustomer.getName() == null || newCustomer.getEmail() == null) {
			return ResponseEntity.badRequest().build();
		}

		repo.save(newCustomer);

		return ResponseEntity.ok().build();
	}

	@DeleteMapping("/{customerId}")
	public ResponseEntity<?> deleteCustomer(@PathVariable("customerId") long id) {
		repo.deleteById(id); // can also delete by Customer type, should we add another method?

		return ResponseEntity.ok().build();
	}
}