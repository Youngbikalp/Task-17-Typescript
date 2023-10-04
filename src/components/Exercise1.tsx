import React from "react";
import { company, types } from "../types/typesEx1";
function Exercise1() {
  return (
    <div>
      <h1> Exercise 1: Type Annotations</h1>
      <p>Organization Name: {company.orgName}</p>
      <p>Established Date: {company.establishedDate}</p>
      <p>Is this a Tech Company ?: {company.isTechCompany.toString()}</p>
    </div>
  );
}

export default Exercise1;
