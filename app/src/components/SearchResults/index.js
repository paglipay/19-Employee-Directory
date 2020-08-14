import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className="list-group search-results">
      <tbody>
        {props.results.map(result => (
          <tr key={result.id} >
            <td>
              <img alt="Dog" src={result.image} className="img-fluid" />
            </td>
            <td>
              <p>{result.fullname}</p>
            </td>
            <td>
              <p>{result.jobtitle}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
