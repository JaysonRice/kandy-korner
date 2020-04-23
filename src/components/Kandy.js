import React from "react"
import "./Kandy.css"
import "./location/Location.css"
import LocationList from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"




export default () => (
    <>
<h1>Welcome to Kandy Korner!</h1>
    <h2>Locations</h2>
    <LocationProvider>
            <LocationList />
    </LocationProvider>

    </>
)