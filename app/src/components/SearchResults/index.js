import React from "react";
import "./style.css";

import MyModal from "../Modal";
function SearchResults(props) {

  return (
    <>
      <MyModal />
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">#<i className="fa fa-fw fa-sort"></i></th>
            <th scope="col">First<i className="fa fa-fw fa-sort"></i></th>
            <th scope="col">Last<i className="fa fa-fw fa-sort"></i></th>
            <th scope="col">Handle<i className="fa fa-fw fa-sort"></i></th>
          </tr>
        </thead>
        <tbody>
          {props.results.map(result => (
            <tr key={result.id} >
              <td>
                <img alt="Dog" src={result.image} className="img-fluid emp-img" />
              </td>
              <td>
                <p>{result.fullname}</p>
              </td>
              <td>
                <p>{result.jobtitle}</p>
              </td>
              <td>
                <button className="btn btn-primary"><i className="fa fa-pencil" aria-hidden="true"></i></button>
              &nbsp;
              <button className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SearchResults;
