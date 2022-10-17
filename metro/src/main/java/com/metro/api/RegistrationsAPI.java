package com.metro.api;

import java.net.URI;
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

import com.metro.domain.Registrations;
import com.metro.repository.RegistrationsRepository;

@RestController
@RequestMapping("/registrations")
public class RegistrationsAPI {

    @Autowired
    RegistrationsRepository repo;

    @GetMapping
    public Iterable<Registrations> getAll() {
        return repo.findAll();
    }

    @GetMapping("/{registrationId}")
    public Optional<Registrations> getRegistrationById(@PathVariable("registrationId") long id) {
        return repo.findById(id);
    }

    @PostMapping
    public ResponseEntity<?> addRegistration(@RequestBody Registrations newRegistration, UriComponentsBuilder uri) {
        if (newRegistration.getId() != 0 || newRegistration.getRegistrationName() == null
                || newRegistration.getRegistrationDate() == null || newRegistration.getRegistrationNotes() == null) {
            return ResponseEntity.badRequest().build(); // Reject - we'll assign the registration id
        }

        newRegistration = repo.save(newRegistration);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(newRegistration.getId()).toUri();

        return ResponseEntity.created(location).build();
    }

    @PutMapping("/{registrationId}")
    public ResponseEntity<?> putRegistration(@RequestBody Registrations newRegistration,
            @PathVariable("registrationId") long customerId) {

        if (newRegistration.getId() != 0 || newRegistration.getRegistrationName() == null
                || newRegistration.getRegistrationDate() == null || newRegistration.getRegistrationNotes() == null) {
            return ResponseEntity.badRequest().build();
        }

        repo.save(newRegistration);

        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{registrationId}")
    public ResponseEntity<?> deleteRegistration(@PathVariable("registrationId") long id) {
        repo.deleteById(id); // can also delete by Registration entity type, should we add another method?

        return ResponseEntity.ok().build();
    }
}
