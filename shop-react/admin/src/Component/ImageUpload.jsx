import React from "react";
import { useState } from "react";

const ImageUpload = (props) => {
  const { inputRef, id, frmField, errorMessage, ...others } = props;
  const [avatar, setAvatar] = useState();
  const handleAvatar = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };
  return (
    <div>
      <input
        type="file"
        onChange={handleAvatar}
        style={{ marginBottom: "10px" }}
        ref={inputRef}
        id={id}
        {...others}
        {...frmField}
      />
      {avatar && <img src={avatar.preview} alt="" width="80%" />}
    </div>
  );
};

export default ImageUpload;
