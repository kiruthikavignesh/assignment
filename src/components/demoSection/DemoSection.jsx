import "./DemoSection.css"; // Import CSS for styling

import DemoForm from "./DemoForm";
import React from "react";
import arrowDown from "../../assets/arrow-down.png"; // Replace with actual image

const DemoSection = () => {
  return (
    <div style={{ marginBottom: 24 }}>
      <section className="demo-section">
        {/* Background Number */}
        <div className="background-text">15+</div>

        {/* Title */}
        <span className="gradient-title">
          World-Class <br /> Stunning Demos
        </span>

        <div style={{ paddingTop: 12, paddingBottom: 12 }}>
          {/* Sub Headings */}
          <span className="demo-sub-heading">
            Best-in-class designs to get you started.
          </span>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
          }}>
          <span
            className="sub-heading-gray"
            style={{
              width: 500,
              fontWeight: "bold",
            }}>
            Use any demo or Theme for education website. You can mix and match
            all the demos and templates.
          </span>
        </div>

        {/* Small Span Text */}
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <span className="description">
            Create a complete education website with lots of demo pages and 250+
            section blocks to create a unique site.
          </span>
        </div>
      </section>
      <div className="demo-image-container">
        <img
          src={arrowDown}
          alt="Demo Preview"
          className="demo-image"
          width={60}
        />
      </div>
      <DemoForm />
    </div>
  );
};

export default DemoSection;
