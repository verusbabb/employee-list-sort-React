import styled from "styled-components";

const Table = styled.table`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  th,
  td {
    border: 1px solid #ddd;
    padding: 10px;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: gray;
  }
  tr:nth-child(odd) {
    background-color: lightgray;
  }
`;

function EmployeeTable(props) {
  function renderTableData() {
    return props.employees.map((employee, index) => {
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

  function renderTableHeader(employees) {
    let header = Object.keys(employees[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <Table>
        <tbody>
          <tr>{renderTableHeader(props.employees)}</tr>
          {renderTableData()}
        </tbody>
      </Table>
    </div>
  );
}

export default EmployeeTable;
