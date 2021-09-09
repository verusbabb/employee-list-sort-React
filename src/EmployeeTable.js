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
      <table id="employees">
        <tbody>
          <tr>{renderTableHeader(props.employees)}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeTable;
