import { useState } from "react";
import EmployeeTable from "./EmployeeTable";

function SearchBox() {
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
    {
      id: 5,
      name: "Steve Babb",
      role: "Engineer",
      email: "steve@gmail.com",
    },
  ]);

  const [query, setQuery] = useState("John Doe");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.name.value);
    console.log(query);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <p>Enter employee name to begin search.</p>
        <input type="text" name="name" placeholder="enter name here" />
        <button>Search</button>
      </form>
      {<EmployeeTable employees={employees} title="All Employees" />}
      {
        <EmployeeTable
          employees={employees.filter((employee) => employee.name === query)}
          title="Filtered Employees"
        />
      }
    </div>
  );
}

export default SearchBox;
