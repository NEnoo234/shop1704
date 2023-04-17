import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import anh1 from "../../Style/img/people.png";
// import ShowModal from "./../../Component/ShowModal";
const Users = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);

  // const [show, setShow] = useState(false);

  return (
    <>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Recent Orders</h3>
            <button className="btn btn-primary" onClick={handleShow}>
              <i className="bi-plus-lg"></i> Add
            </button>
            <i className="bi bi-search"></i>
            <i className="bi bi-filter"></i>
          </div>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Users Name </th>
                <th>Gender</th>
                <th>Birthday</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td>1</td>
                <td>
                  <img src={anh1} alt="" />
                  <p>John Doe</p>
                </td>
                <td>Nam</td>
                <td>01-10-2021</td>
                <td>Hà Nội</td>
                <td>0123456789</td>

                <td>
                  <span className="status pending">Pending</span>
                </td>
                <td>
                  <button
                  // onClick={() => {
                  //   setShow(true);
                  // }}
                  >
                    {" "}
                    <i className="bi-pencil-square text-primary"></i>
                  </button>
                  <a href="/#">
                    <i className="bi-trash text-danger"></i>
                  </a>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>
                  <img src={anh1} alt="" />
                  <p>John Doe</p>
                </td>
                <td>Nam</td>
                <td>01-10-2021</td>
                <td>Hà Nội</td>
                <td>0123456789</td>

                <td>
                  <span className="status pending">Pending</span>
                </td>
                <td>
                  <a
                    href="/#"
                    // onClick={() => {
                    //   setShow(true);
                    // }}
                  >
                    <i className="bi-pencil-square text-primary"></i>
                  </a>
                  <a href="/#">
                    <i className="bi-trash text-danger"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* modal  */}

      <Modal
        show={modalShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Instructor{" "}
            <small className="text-muted">
              {Number() === 0 ? "new" : "edit"}
            </small>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input
                    type="text"
                    id="firstName"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="firstName">
                    First Name
                  </label>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <input
                    type="text"
                    id="lastName"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="lastName">
                    Last Name
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-4 d-flex align-items-center">
                <div className="form-outline datepicker w-100">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    id="birthdayDate"
                  />
                  <label for="birthdayDate" className="form-label">
                    Birthday
                  </label>
                </div>
              </div>
              <div className="col-md-4 mb-4 d-flex align-items-center">
                <div className="form-outline datepicker w-100">
                  <input
                    type="number"
                    className="form-control form-control-lg"
                    id="birthdayDate"
                    max={1}
                    min={0}
                  />
                  <label for="birthdayDate" className="form-label">
                    Status
                  </label>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <h6 className="mb-2 pb-1">Gender:</h6>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="femaleGender"
                    value="option1"
                    checked
                  />
                  <label className="form-check-label" for="femaleGender">
                    Female
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="maleGender"
                    value="option2"
                  />
                  <label className="form-check-label" for="maleGender">
                    Male
                  </label>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4 pb-2">
                <div className="form-outline">
                  <input
                    type="email"
                    id="emailAddress"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="emailAddress">
                    Email
                  </label>
                </div>
              </div>
              <div className="col-md-6 mb-4 pb-2">
                <div className="form-outline">
                  <input
                    type="tel"
                    id="phoneNumber"
                    className="form-control form-control-lg"
                  />
                  <label className="form-label" for="phoneNumber">
                    Phone Number
                  </label>
                </div>
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
      {/* {show && <ShowModal closeModal={() => setShow(false)} />} */}
    </>
  );
};

export default Users;
