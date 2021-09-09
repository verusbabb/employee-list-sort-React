function Search(props) {
  return (
    <div>
      <h3>Enter employee name to search database</h3>
      <input
        onChange={props.handleSearch}
        type="text"
        name="name"
        placeholder="enter name here"
      />
    </div>
  );
}

export default Search;
