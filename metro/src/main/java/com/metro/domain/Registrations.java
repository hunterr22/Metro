package com.metro.domain;

import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

public class Registrations {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String registrationName;
    @ManyToOne
    Customer customer;
    Date registrationDate;
    String registrationNotes;

    public Registrations(long id, String registrationName, Date registrationDate, String registrationNotes) {
        super();
        this.id = id;
        this.registrationName = registrationName;
        this.registrationDate = registrationDate;
        this.registrationNotes = registrationNotes;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRegistrationName() {
        return registrationName;
    }

    public void setRegistrationName(String registrationName) {
        this.registrationName = registrationName;
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
