package com.metro.domain;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Registrations {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    // @ManyToOne
    // Customer customer;

    @Column(name = "EVENT_ID")
    long eventId;

    @Column(name = "CUSTOMER_ID")
    long customerId;

    @Column(name = "REGISTRATION_DATE")
    Date registrationDate;

    @Column(name = "NOTES")
    String registrationNotes;

    public Registrations() {
        // Default constructor
    }

    public Registrations(long id, long eventId, long customerId, Date registrationDate, String registrationNotes) {
        this.id = id;
        this.eventId = eventId;
        this.customerId = customerId;
        this.registrationDate = registrationDate;
        this.registrationNotes = registrationNotes;
    }

    public long getEventId() {
        return eventId;
    }

    public void setEventId(long eventId) {
        this.eventId = eventId;
    }

    public long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(long customerId) {
        this.customerId = customerId;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(Date registrationDate) {
        this.registrationDate = registrationDate;
    }

    public String getRegistrationNotes() {
        return registrationNotes;
    }

    public void setRegistrationNotes(String registrationNotes) {
        this.registrationNotes = registrationNotes;
    }

}
