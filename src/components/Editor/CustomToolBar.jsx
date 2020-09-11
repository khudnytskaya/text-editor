import React from "react";
import "./TextEditor.css";

const CustomToolbar = () => (
    <div id="toolbar" className="toolbar-panel">
      <select className="ql-font" defaultValue={"arial"}>
        <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
      </select>
      <select className="ql-size" defaultValue={"medium"}>
        <option value="extra-small">12px</option>
        <option value="small">14px</option>
        <option value="small2">16px</option>
        <option value="medium">18px</option>
        <option value="large">20px</option>
        <option value="huge">22px</option>
      </select>
      <select className="ql-align" />
      <select className="ql-color" />
      <select className="ql-background" />
      <button className="ql-clean" />
    </div>
  );

  export default CustomToolbar;