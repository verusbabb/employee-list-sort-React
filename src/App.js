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

  return (
    <div className="App">
      <h1>Acme Employee Directory</h1>
      <Search handleSearch={handleSearch} />
      {filteredEmployees.length > 0 ? (
        <EmployeeTable employees={filteredEmployees} />
      ) : (
        <p>Yo Yo, ain't nobody like that here. Probably got fired.</p>
      )}
    </div>
  );
}

export default App;
