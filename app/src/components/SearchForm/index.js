import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.employees array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          placeholder="Type in a dog employee to begin"
          id="employee"
        />
        <datalist id="employees">
          {props.employees.map(employee => (
            <option value={employee} key={employee} />
          ))}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
        <button  onClick={props.toggleSort} className="btn btn-success">
          Sort
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
