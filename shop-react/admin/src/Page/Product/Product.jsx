import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import productService from "./../../api/ProductService";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Input from "./../../Component/Input";
import { Form } from "react-bootstrap";
import ImageUpload from "../../Component/ImageUpload";

const Product = () => {
  const [modalShow, setModalShow] = useState(false);
  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const formik = useFormik({
    initialValues: {
      id: 0,
      ProductID: 0,
      Name: "",
      ProductCode: "",
      Description: "",
      ProductType: "",
      Color: "",
      Manufacture: "",
      Madeln: "",
      CreatedDate: "2023-01-01 00:00:00",
      Status: 0,
      ImageUrl: "",
      Price: "0.0",
      PriceSale: "0.0",
    },
    validationSchema: Yup.object({}),
    onSubmit: (values) => {
      handleSave(values);
    },
  });
  const loadData = () => {
    productService.list().then((res) => setProduct(res.data));
  };
  const showEditModal = (e, id) => {
    if (e) e.preventDefault();
    if (id > 0) {
      productService.get(id).then((res) => {
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
      productService.add(data).then((res) => {
        if (res.errorCode === 0) {
          console.log(data);
          loadData();
          handleClose();
          toast.success("Add successful!");
        } else {
          toast.error(res.message);
        }
      });
    } else {
      productService.update(data.id, data).then((res) => {
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
    productService.delete(id).then((res) => {
      if (res.errorCode === 0) {
        loadData();
        toast.warn("A data has been deleted");
      } else {
        toast.error(res.message);
      }
    });
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
                <th>Name</th>
                <th>Product Code</th>
                <th>Color</th>
                <th>Status</th>
                <th>Price</th>
                <th>Price Sale</th>
                <th>Manu facture</th>
                <th>Description</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, stt) => (
                <tr key={item.id}>
                  <td>{stt + 1}</td>
                  <td>
                    <img src={item.ImageUrl} alt="" />
                    <p>{item.Name}</p>
                  </td>
                  <td>{item.ProductCode}</td>
                  <td>{item.Color}</td>
                  <td>{item.Status}</td>
                  <td>{item.Price}</td>
                  <td>{item.PriceSale}</td>
                  <td>{item.Manufacture}</td>
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
                <ImageUpload
                  id="Imageurl"
                  frmField={formik.getFieldProps("ImageUrl")}
                  errorMessage={
                    formik.touched.ImageUrl && formik.errors.ImageUrl
                  }
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <Input
                    label=" Name :"
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
                    label="Product Code : "
                    type="text"
                    id="ProductCode"
                    frmField={formik.getFieldProps("ProductCode")}
                    errorMessage={
                      formik.touched.ProductCode && formik.errors.ProductCode
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
                    label="Status"
                    type="text"
                    id="Status"
                    frmField={formik.getFieldProps("Status")}
                    errorMessage={formik.touched.Status && formik.errors.Status}
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-6 mb-2">
                {" "}
                <Input
                  label="Manu facture"
                  type="text"
                  id="Manufacture"
                  frmField={formik.getFieldProps("Manufacture")}
                  errorMessage={
                    formik.touched.Manufacture && formik.errors.Manufacture
                  }
                  className="form-control"
                />
              </div>
              <div className="row">
                <div className="col-md-12 mb-4">
                  <Input
                    label="Description: "
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
                <div className="col-md-4 mb-4">
                  <div className="form-inline">
                    <div className="form-check form-check-inline">
                      <Input
                        type="radio"
                        name="Status"
                        id="Status"
                        value="1"
                        onChange={formik.handleChange}
                        defaultChecked={formik.touched.Status === 1}
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
                        defaultChecked={formik.touched.Status === 0}
                      />
                      <label className="form-check-label" for="maleGender">
                        In Active
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-2">
                  {" "}
                  <Input
                    label="Price: "
                    type="text"
                    id="Price"
                    frmField={formik.getFieldProps("Price")}
                    errorMessage={formik.touched.Price && formik.errors.Price}
                    className="form-control"
                  />
                </div>
                <div className="col-md-3 mb-2" style={{ marginRight: "30px" }}>
                  {" "}
                  <Input
                    style={{ marginLeft: "30px" }}
                    label="PriceSale: "
                    type="text"
                    id="PriceSale"
                    frmField={formik.getFieldProps("PriceSale")}
                    errorMessage={
                      formik.touched.PriceSale && formik.errors.PriceSale
                    }
                    className="form-control"
                  />
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

export default Product;
