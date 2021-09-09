import "./App.css";
import EmployeeTable from "./EmployeeTable";
import Search from "./Search";
import { useState } from "react";

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

function App() {
  const [employees, setEmployees] = useState(data);
  const [filtered, setFiltered] = useState(employees);
  console.log(employees);

  let filteredEmployees = [];

  const handleSearch = function (e) {
    e.preventDefault();
    console.log(e.target.value);
    setFiltered(
      employees.filter((employee) => employee.name.includes(e.target.value))
    );
    console.log(filtered);
  };
  return (
    <div className="App">
      <h1>Employee List</h1>
      <Search handleSearch={handleSearch} />
      <EmployeeTable employees={filtered} />
    </div>
  );
}

export default App;
