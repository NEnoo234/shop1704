import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ProductCategoryService from "./../../api/ProductCategoryService";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Input from "./../../Component/Input";
import { Button } from "react-bootstrap";

const ProductCategory = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const [productCategory, setProductCategory] = useState([]);
  const formik = useFormik({
    initialValues: {
      id: 0,
      Name: "",
      Status: 1,
      Description: "",
      ParentID: "",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      handleSave(values);
    },
  });
  const showEditModal = (e, id) => {
    if (e) e.preventDefault();
    if (id > 0) {
      ProductCategoryService.get(id).then((res) => {
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
      ProductCategoryService.add(data).then((res) => {
        if (res.errorCode === 0) {
          loadData();
          handleClose();
          toast.success("Add successful!");
        } else {
          toast.error(res.message);
        }
      });
    } else {
      ProductCategoryService.update(data.id, data).then((res) => {
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
    ProductCategoryService.delete(id).then((res) => {
      if (res.errorCode === 0) {
        loadData();
        toast.warn("A data has been deleted");
      } else {
        toast.error(res.message);
      }
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    ProductCategoryService.list().then((res) => setProductCategory(res.data));
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
                <th>Name </th>
                <th>Status</th>
                <th>Parent ID</th>
                <th>Description</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {productCategory.map((item, stt) => (
                <tr key={item.id}>
                  <td>{stt + 1}</td>
                  <td>{item.Name}</td>
                  <td>{item.Status}</td>
                  <td>{item.ParentID}</td>
                  <td>{item.Description}</td>

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
          <Form>
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <Input
                    label="Name :"
                    type="text"
                    id="txtName"
                    frmField={formik.getFieldProps("Name")}
                    errorMessage={formik.touched.Name && formik.errors.Name}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <Input
                    label="Parent ID : "
                    type="text"
                    id="ParentID"
                    frmField={formik.getFieldProps("ParentID")}
                    errorMessage={
                      formik.touched.ParentID && formik.errors.ParentID
                    }
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-8 mb-4">
                <div className="form-outline">
                  <Input
                    label="Description"
                    type="text"
                    id="Description"
                    frmField={formik.getFieldProps("Description")}
                    errorMessage={
                      formik.touched.Description && formik.errors.Description
                    }
                    className="form-control"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-inline">
                    <div className="form-check form-check-inline">
                      <Input
                        type="radio"
                        name="Status"
                        id="Status"
                        value="1"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.Status === 1}
                      />
                      <label className="form-check-label" for="femaleGender">
                        Active
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <Input
                        type="radio"
                        name="Status"
                        id="Status"
                        value="0"
                        onChange={formik.handleChange}
                        defaultChecked={formik.values.Status === 0}
                      />
                      <label className="form-check-label" for="maleGender">
                        In Active
                      </label>
                    </div>
                  </div>
                </div>
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

export default ProductCategory;
