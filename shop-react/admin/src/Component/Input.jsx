import React from "react";
const Input = (props) => {
  const {
    type,
    inputRef,
    id,
    label,
    labelSize,
    frmField,
    errorMessage,
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
        {others["rows"] > 1 ? (
          <textarea
            id={id}
            ref={inputRef}
            className={inputclass}
            {...others}
            {...frmField}
          ></textarea>
        ) : (
          <input
            type={type}
            id={id}
            ref={inputRef}
            className={inputclass}
            {...others}
            {...frmField}
          />
        )}
        {errorMessage ? (
          <div className="invalid-feedback">{errorMessage}</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Input;
