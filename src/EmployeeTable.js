import { useState } from "react";

function EmployeeTable() {
  function renderTableData() {
    return employees.map((employee, index) => {
      const { id, name, role, email } = employee;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{role}</td>
          <td>{email}</td>
        </tr>
      );
    });
  }

  function renderTableHeader() {
    let header = Object.keys(employees[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  return (
    <div>
      <h3 id="title">Employee Data</h3>
      <table id="employees">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
