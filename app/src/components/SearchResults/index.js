// import React from "react";
import React, { useState } from "react";
import "./style.css";

import MyModal from "../Modal";
function SearchResults(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
      <MyModal show={show} handleClose={handleClose} handleShow={handleShow} currentObj={props.currentActiveObj} handleBtnClick={props.handleBtnClick}/>
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
            <tr key={result.id} onClick={() => props.setCurrentActiveObj(result)}>
              <td>
                <img alt="Dog"  src={result.image} className="img-fluid emp-img" />
              </td>
              <td>
                <p>{result.fullname}</p>
              </td>
              <td>
                <p>{result.jobtitle}</p>
              </td>
              <td>
                <button className="btn btn-primary" onClick={handleShow}><i className="fa fa-pencil" aria-hidden="true"></i></button>
              &nbsp;
              <button className="btn btn-danger" onClick={handleShow}><i className="fa fa-trash" aria-hidden="true"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SearchResults;
