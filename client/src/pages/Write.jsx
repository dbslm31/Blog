import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Titre" />
        <div className="editor-container">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
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
          <label className="file" for="file">
            Importer une image
          </label>
          <div className="buttons">
            <button>Enregistrer le brouillon</button>
            <button>Publier</button>
          </div>
        </div>
        <div className="item">
          <h1>Categories</h1>
          <div className="cat">
            <input type="radio" name="categories" value="art" id="art" />
            <label for="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" value="tech" id="tech" />
            <label for="tech">Tech</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" value="ux" id="ux" />
            <label for="ux">UX/UI</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" value="job" id="job" />
            <label for="job">Emploi</label>
          </div>
          <div className="cat">
            <input type="radio" name="categories" value="learn" id="learn" />
            <label for="art">Apprendre</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
