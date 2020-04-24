import React from "react"

export default ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee__store">Store: {employee.location.name}</div>
        <div className="employee__manager">Role: {employee.fullTime ? "Full Time" : "Part Time"} {employee.manager ? "Manager" : "Worker"}</div>
        <div className="employee__wages">Wages: {employee.hourlyRate}/hr</div>
    </section>
)