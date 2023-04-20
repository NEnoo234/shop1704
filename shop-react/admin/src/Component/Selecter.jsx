import React from "react";

const Selecter = (props) => {
  const {
    inputRef,
    id,
    label,
    labelSize,
    frmField,
    errorMessage,
    data,
    nameType,
    ...others
  } = props;
  const labelClass = `col-sm-${labelSize ? labelSize : 3} col-form-label`;
  const inputclass = `from-control ${errorMessage ? "is-invalid" : ""}`;

  return (
    <div className="row mb-3">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <div className="col-sm">
        <select className={inputclass} {...others} {...frmField}>
          {data.map((item) => (
            <option value={item.id}>{item.Name}</option>
          ))}
        </select>
        {errorMessage ? (
          <div className="invalid-feedback">{errorMessage}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Selecter;
