import React from "react"

export default ({location}) => (
    <section className="location">
        <h3 className="location__address">{location.address}</h3>
        <div className="location__square__footage">Square Footage: {location.squareFootage}</div>
        <div className="location__handicap__accessible">{location.handicapAccessible
         ? "Handicap Accessible" : "Not Handicap Accessible"}</div>
    </section>
)