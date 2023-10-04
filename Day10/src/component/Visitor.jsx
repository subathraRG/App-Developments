import React from 'react'
import "./visitor.css"

export default function Visitor() {
    return (
        <div id='back'>
            <header className="shadow">
                <div className="header-content d-flex justify-content-center p-2">
                    <h5 className="text-center">ADVENTURE TRAVEL</h5>
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
                        <label htmlFor="car">Scuba Diving:</label>
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-sm"
                            id="car"
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="car">Bungee jumping:</label>
                        <input
                            type="text"
                            className="form-control rounded-0 shadow-sm"
                            id="car"
                            placeholder="Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="licensePlate">Age:</label>
                        <input
                            type="age"
                            className="form-control rounded-0 shadow-sm"
                            id="licensePlate"
                            placeholder="Age"
                        />
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="entryDate">Starting Time:</label>
                            <input
                                type="time"
                                className="form-control rounded-0 shadow-sm"
                                id="Starttime"
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="exitDate">Exit Time:</label>
                            <input
                                type="time"
                                className="form-control rounded-0 shadow-sm"
                                id="exittime"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn mx-auto d-block mt-5 rounded-0 shadow"
                        id="btnOne"
                    >
                        Book slot
                    </button>
                </form>
            </div>

        </div>

    )
}
