import React from 'react'
import "./parking.css"
import "./boot.css"
export default function Parking() {

    return (
        <>
        <div id='back'>
            <header className="shadow">
                <div className="header-content d-flex justify-content-center p-2">
                    <h5 className="text-center">Add Details to Resort</h5>
                </div>
            </header>
            <div className="form-container mt-5">
                <form className="w-50 mx-auto" id="entryForm">
                    <div className="form-group">
                        <label htmlFor="owner">Name:</label>
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-sm"
                            id="owner"
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="car">Room Number:</label>
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-sm"
                            id="car"
                            placeholder="Room Number"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="licensePlate">Guests and Rooms:</label>
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-sm"
                            id="licensePlate"
                            placeholder="N017"
                        />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="entryDate">Check-in-Date:</label>
                            <input
                                type="date"
                                className="form-control rounded-0 shadow-sm"
                                id="entryDate"
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="exitDate">Check-out-Date:</label>
                            <input
                                type="date"
                                className="form-control rounded-0 shadow-sm"
                                id="exitDate"
                            />
                        </div>
                    </div>
                    <button
                        className="btn mx-auto d-block mt-5 rounded-0 shadow"
                        id="btnOne"
                        onClick={() => {
                            let inputs = document.querySelectorAll("input")
                            let owner = inputs[0].value
                            let vehicle = inputs[1].value
                            let licensePlate = inputs[2].value
                            let entryDate = inputs[3].value
                            let exitDate = inputs[4].value
                            sessionStorage.setItem("parking", JSON.stringify({ owner, vehicle, licensePlate, entryDate, exitDate }))
                        }}
                    >
                        Add Room
                    </button>
                </form>
            </div>
            </div>

        </>

    )
}
