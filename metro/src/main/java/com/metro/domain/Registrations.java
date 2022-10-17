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
    long event_id;

    @Column(name = "CUSTOMER_ID")
    long customer_id;

    @Column(name = "REGISTRATION_DATE")
    Date registration_date;

    @Column(name = "NOTES")
    String notes;

    public Registrations() {
        // Default constructor
    }

    public Registrations(long id, long event_id, long customer_id, Date registration_date, String notes) {
        this.id = id;
        this.event_id = event_id;
        this.customer_id = customer_id;
        this.registration_date = registration_date;
        this.notes = notes;
    }

    public long getEventId() {
        return event_id;
    }

    public void setEventId(long event_id) {
        this.event_id = event_id;
    }

    public long getCustomerId() {
        return customer_id;
    }

    public void setCustomerId(long customer_id) {
        this.customer_id = customer_id;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Date getRegistrationDate() {
        return registration_date;
    }

    public void setRegistrationDate(Date registration_date) {
        this.registration_date = registration_date;
    }

    public String getRegistrationNotes() {
        return notes;
    }

    public void setRegistrationNotes(String notes) {
        this.notes = notes;
    }

}
