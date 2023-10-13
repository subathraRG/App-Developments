package com.events.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "eventtablego")
public class eventdecorationmarriage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String firstName;
    private String lastName;
    private String mobileNumber;
    private String email;
    private String eventPlace;
    private String eventTime;
    private String packageSelected;
    private String eventDate;
    private String photography;
    private String diningOptions;
    private String furnitureType;
    private String musicEvent;
    private String danceEvent;
    private String dronePhotography;
    private String address;  // Address remains a string

    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getEventPlace() {
		return eventPlace;
	}

	public void setEventPlace(String eventPlace) {
		this.eventPlace = eventPlace;
	}

	public String getEventTime() {
		return eventTime;
	}

	public void setEventTime(String eventTime) {
		this.eventTime = eventTime;
	}

	public String getPackageSelected() {
		return packageSelected;
	}

	public void setPackageSelected(String packageSelected) {
		this.packageSelected = packageSelected;
	}

	public String getEventDate() {
		return eventDate;
	}

	public void setEventDate(String eventDate) {
		this.eventDate = eventDate;
	}

	public String getPhotography() {
		return photography;
	}

	public void setPhotography(String photography) {
		this.photography = photography;
	}

	public String getDiningOptions() {
		return diningOptions;
	}

	public void setDiningOptions(String diningOptions) {
		this.diningOptions = diningOptions;
	}

	public String getFurnitureType() {
		return furnitureType;
	}

	public void setFurnitureType(String furnitureType) {
		this.furnitureType = furnitureType;
	}

	public String getMusicEvent() {
		return musicEvent;
	}

	public void setMusicEvent(String musicEvent) {
		this.musicEvent = musicEvent;
	}

	public String getDanceEvent() {
		return danceEvent;
	}

	public void setDanceEvent(String danceEvent) {
		this.danceEvent = danceEvent;
	}

	public String getDronePhotography() {
		return dronePhotography;
	}

	public void setDronePhotography(String dronePhotography) {
		this.dronePhotography = dronePhotography;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}


    public eventdecorationmarriage() {
    }

    public eventdecorationmarriage(int id, String firstName, String lastName, String mobileNumber, String email,
                           String eventPlace, String eventTime, String packageSelected, String eventDate,
                           String photography, String diningOptions, String furnitureType, String musicEvent,
                           String danceEvent, String dronePhotography, String address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.email = email;
        this.eventPlace = eventPlace;
        this.eventTime = eventTime;
        this.packageSelected = packageSelected;
        this.eventDate = eventDate;
        this.photography = photography;
        this.diningOptions = diningOptions;
        this.furnitureType = furnitureType;
        this.musicEvent = musicEvent;
        this.danceEvent = danceEvent;
        this.dronePhotography = dronePhotography;
        this.address = address;
    }

    // Getters and setters for all fields (as you had in your original code)
}
