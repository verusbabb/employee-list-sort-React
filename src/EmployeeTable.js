import { useState } from "react";

function EmployeeTable() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John Doe",
      role: "Designer",
      email: "john@gmail.com",
    },
    {
      id: 2,
      name: "Jane Doe",
      role: "Engineer",
      email: "jane@gmail.com",
    },
    {
      id: 3,
      name: "Nick Slick",
      role: "Senior Designer",
      email: "nick@gmail.com",
    },
    {
      id: 4,
      name: "Stephanie Nicole Perez",
      role: "Senior Engineer",
      email: "stephanie@gmail.com",
    },
  ]);

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
