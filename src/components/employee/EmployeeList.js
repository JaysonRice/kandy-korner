import React, { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import { LocationContext } from "../location/LocationProvider"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import EmployeeForm from "./EmployeeForm"

export default () => {
    const { employees } = useContext(EmployeeContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <Button className="href" onClick={toggle}>Add New Employee</Button>

            <div className="employees">
                {
                    employees.map(employee => {

                        return <Employee key={employee.id} employee={employee} />
                    })
                }
            </div>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Employee
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}