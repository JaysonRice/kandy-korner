import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import "./Employee.css"

export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const name = useRef()
    const location = useRef()
    const manager = useRef()
    const fullTime = useRef()
    const hourlyRate = useRef()

    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)
        const isManager = (manager.current.value === "Manager" ? true : false)
        const isFullTime = (manager.current.value === "Full Time" ? true : false)
        const rate = parseInt(hourlyRate.current.value)

        if (locationId === 0) {
            window.alert("Please select a location.")
        } else if (typeof rate !== "undefined" && !rate) {
            window.alert("Integers and decimals only.")
        } else {
            addEmployee({
                name: name.current.value,
                locationId: locationId,
                manager: isManager,
                fullTime: isFullTime,
                hourlyRate: rate
            })
            .then(props.toggler)
        }
    }

    return (
        <form className="employeeForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input
                        type="text"
                        id="employeeName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeRole">Employee role: </label>
                    <select
                        defaultValue=""
                        name="employeeRole"
                        ref={manager}
                        id="employeeRole"
                        className="form-control"
                    >
                        <option value="0">Select a role</option>
                            <option>Manager</option>
                            <option>Worker</option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">Employee hours: </label>
                    <select
                        defaultValue=""
                        name="fullTime"
                        ref={fullTime}
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select a status</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                        ))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly rate: </label>
                    <input
                        type="number"
                        id="hourlyRate"
                        ref={hourlyRate}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="$"
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEmployee()
                    }
                }
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}