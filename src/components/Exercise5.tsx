import React from "react";
import { Car, Bike } from "../types/typesEx5";

const unionType: Car | Bike = {
  make: "HONDA",
  model: "CRV",
  brand: "BMW",
  type: "SPORTSTER S",
};

const intersectionType: Car & Bike = {
  make: "TESLA",
  model: "Y",
  brand: "YAHAMA",
  type: "XSR 700",
};
function Exercise5() {
  return (
    <div>
      <h1>Exercise 5: Union and Intersection Types</h1>
      <div>
        <h2>Union Type</h2>
        <p>Make: {unionType.make}</p>
        <p>Model: {unionType.model}</p>
        {"make" in unionType && "model" in unionType && <p>It's a Car</p>}
        <p>Brand: {unionType.brand}</p>
        <p>Type: {unionType.type}</p>
        {"brand" in unionType && "type" in unionType && <p>It's a Bike</p>}
      </div>
      <h2>Intersection Type</h2>
      <p>Make: {intersectionType.make}</p>
      <p>Model: {intersectionType.model}</p>
      <p>Brand: {intersectionType.brand}</p>
      <p>Type: {intersectionType.type}</p>
    </div>
  );
}

export default Exercise5;
