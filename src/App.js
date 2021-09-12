// import "./App.css";
import EmployeeTable from "./EmployeeTable";
import Search from "./Search";
import { useState } from "react";
import styled from "styled-components";

const data = [
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
  {
    id: 5,
    name: "Steve Babb",
    role: "Engineer",
    email: "steve@gmail.com",
  },
];

const MainWrapper = styled.div`
  text-align: center;
  h1 {
    color: green;
    font-size: 48px;
  }
  body {
    background-image: url("../public/staff.png");
    background-color: lightgray;
  }
`;

function App() {
  const [employees] = useState(data);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  const handleSearch = function (e) {
    e.preventDefault();
    console.log(e.target.value);

    setFilteredEmployees(
      employees.filter((employee) =>
        employee.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  console.log(filteredEmployees);

  const clearSearch = () => {
    document.getElementById("searchbox").value = "";
  };

  return (
    <MainWrapper>
      <h1>Acme Employee Directory</h1>
      <Search handleSearch={handleSearch} />
      {filteredEmployees.length > 0 ? (
        <EmployeeTable employees={filteredEmployees} />
      ) : (
        <p>{clearSearch()} No Match. Try again.</p>
      )}
    </MainWrapper>
  );
}

export default App;
