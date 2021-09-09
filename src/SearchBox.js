import { useState } from "react";

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
  ]);

  const [filteredEmployees, setFilteredEmployees] = useState([{}]);
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.elements.name.value);
    console.log(query, employees, filteredEmployees);
  };

  //   function filterByQuery(obj) {
  //     if (employees.name) {
  //       return true;
  //     }
  //   }
  //   let filteredEmployees = employees.filter(filterByQuery);
  //   console.log(filteredEmployees);

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <p>Enter employee name to begin search.</p>
        <input type="text" name="name" placeholder="enter name here" />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBox;
