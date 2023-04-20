import React, { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import employeesService from "../../api/EmployeesService";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Input from "../../Component/Input";
import { Col, Modal, Row } from "react-bootstrap";
import Utils from "./../../Component/utils";

const Employees = () => {
  const defaultImUrl = "https://restfulapi.dnd-group.net/public/photo-icon.png";
  const [imagePreview, setImagePreview] = useState(defaultImUrl);
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const [employees, setEmployees] = useState([]);
  const formik = useFormik({
    initialValues: {
      id: 0,
      lastname: "",
      firstname: "",
      email: "",
      phone: "",
      image: undefined,
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      handleSave(values);
    },
  });
  const showEditModal = (e, id) => {
    if (e) e.preventDefault();
    if (id > 0) {
      employeesService.get(id).then((res) => {
        formik.setValues(res.data);
        handleShow();
      });
    } else {
      formik.resetForm();
      handleShow();
    }
  };

  const handleSave = (data) => {
    if (data.id === 0) {
      employees.add(data).then((res) => {
        console.log(data);
        if (res.errorCode === 0) {
          loadData();
          handleClose();
          toast.success("Add successful!");
        } else {
          toast.error(res.message);
        }
      });
    } else {
      employees.update(data.id, data).then((res) => {
        if (res.errorCode === 0) {
          loadData();
          handleClose();
          toast.success("Update successfull!");
        } else {
          toast.error(res.message);
        }
      });
    }
  };
  const handleDelete = (e, id) => {
    e.preventDefault();
    employeesService.delete(id).then((res) => {
      if (res.errorCode === 0) {
        loadData();
        toast.warn("A data has been deleted");
      } else {
        toast.error(res.message);
      }
    });
  };
  const inputFileRef = useRef();
  const handleChangeImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImagePreview(URL.createObjectURL(e.target.files[0]));
      formik.setFieldValue("image", e.target.files[0].name);
    }
  };
  const downloadImage = () => {
    employeesService.downloadAvatar(formik.values.id).then((res) => {
      if (res.size > 0) Utils.downLoadFile(`${formik.values.stuId}.zip`, res);
      else toast.warning("No avatar to download");
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    employeesService.list().then((res) => setEmployees(res.data));
  };
  return (
    <>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Menu</h3>
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
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>image</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((item, stt) => (
                <tr key={item.id}>
                  <td>{stt + 1}</td>
                  <td>{item.firstname}</td>
                  <td>{item.lastname}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>{item.image}</td>
                  <td>
                    <a href="/#" onClick={(e) => showEditModal(e, item.id)}>
                      <i className="bi-pencil-square text-primary"></i>
                    </a>
                    <a href="/#" onClick={(e) => handleDelete(e, item.id)}>
                      <i className="bi-trash text-danger"></i>
                    </a>
                  </td>
                </tr>
              ))}
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
          <Row>
            <Col sm="4" className="text-center">
              <img
                src={imagePreview}
                alt=""
                className="img-thumbnail rounded-circle border-primary d-block"
              />
              <input
                type="file"
                accept="image/*"
                className="d-none"
                ref={inputFileRef}
                name="image"
                onChange={handleChangeImage}
              />
              <div className="mt-3">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => inputFileRef.current.click()}
                >
                  Change
                </Button>
                <Button
                  variant="warning"
                  size="sn"
                  className="ms-1"
                  onClick={downloadImage}
                >
                  {" "}
                  Download
                </Button>
              </div>
            </Col>
          </Row>
          <Form>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <Input
                    label=" lastname :"
                    type="text"
                    id="lastname"
                    frmField={formik.getFieldProps("lastname")}
                    errorMessage={
                      formik.touched.lastname && formik.errors.lastname
                    }
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <Input
                    label="firstname : "
                    type="text"
                    id="firstname"
                    frmField={formik.getFieldProps("firstname")}
                    errorMessage={
                      formik.touched.firstname && formik.errors.firstname
                    }
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <Input
                    label="email"
                    type="text"
                    id="email"
                    frmField={formik.getFieldProps("email")}
                    errorMessage={formik.touched.email && formik.errors.email}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-6 mb-2">
                {" "}
                <Input
                  label="phone"
                  type="text"
                  id="phone"
                  frmField={formik.getFieldProps("phone")}
                  errorMessage={formik.touched.phone && formik.errors.phone}
                  className="form-control"
                />
              </div>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            disabled={!formik.dirty || !formik.isValid}
            onClick={formik.handleSubmit}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employees;
