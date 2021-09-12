import styled from "styled-components";

const SearchInput = styled.input`
  background-color: lightgray;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: none;
  padding: 15px 32px;
  text-align: center;
  display: inline-block;
  font-size: 16px;
  color: black;
`;

function Search(props) {
  return (
    <div>
      <h3>Search for employees</h3>
      <SearchInput
        id="searchbox"
        onChange={props.handleSearch}
        type="text"
        name="name"
        placeholder="Enter name to search"
      />
    </div>
  );
}

export default Search;
