// import React, { useState } from "react";
import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Card";
// import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.employees array
function MyModal(props) {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>
            {/* <Button variant="primary" onClick={props.handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shall this dog live or die?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card image={props.currentObj.image} handleBtnClick={props.handleBtnClick} />
                    <br />
                    <p>Woohoo, you're reading this text in a modal!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyModal;
