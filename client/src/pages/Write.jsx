import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Titre" />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publier</h1>
          <span>
            <b>Status :</b> Draft
          </span>
          <span>
            <b>Visibilité :</b> Tout le monde
          </span>
          <input style={{ display: "none" }} type="file" id="file" />
          <label for="file">Importer une image</label>
        </div>
        <div className="item">i2</div>
      </div>
    </div>
  );
};

export default Write;
