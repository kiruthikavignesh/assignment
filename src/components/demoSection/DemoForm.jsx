import "./DemoForm.css";

import { Button, Form, Input } from "antd";
import React, { useState } from "react";

const DemoForm = () => {
  const [activeTab, setActiveTab] = useState("primary");
  const [gender, setGender] = useState("male");

  const renderFormContent = () => {
    switch (activeTab) {
      case "primary":
        return (
          <Form layout="vertical" className="form-container">
            <div className="form-row">
              <Form.Item label="Name" className="form-item">
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item label="Email" className="form-item">
                <Input type="email" placeholder="Enter your email" />
              </Form.Item>
              <Form.Item label="Gender" className="form-item">
                <div className="custom-radio-group">
                  <label
                    className={`custom-radio ${
                      gender === "male" ? "selected" : ""
                    }`}
                    onClick={() => setGender("male")}>
                    <span className="radio-dot"></span> Male
                  </label>
                  <label
                    className={`custom-radio ${
                      gender === "female" ? "selected" : ""
                    }`}
                    onClick={() => setGender("female")}>
                    <span className="radio-dot"></span> Female
                  </label>
                </div>
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item label="Mobile" className="form-item">
                <Input
                  placeholder="Enter your mobile number"
                  style={{ width: 240 }}
                />
              </Form.Item>
            </div>
          </Form>
        );

      case "other":
        return (
          <Form layout="vertical" className="form-container">
            <div className="form-row">
              <Form.Item label="Date of Birth" className="form-item">
                <Input type="date" />
              </Form.Item>
              <Form.Item label="Occupation" className="form-item">
                <Input placeholder="Enter your occupation" />
              </Form.Item>
              <Form.Item label="Hobbies" className="form-item">
                <Input placeholder="Enter your hobbies" />
              </Form.Item>
            </div>
          </Form>
        );

      case "address":
        return (
          <Form layout="vertical" className="form-container">
            <div className="form-row">
              <Form.Item label="Street Address" className="form-item">
                <Input placeholder="Enter street address" />
              </Form.Item>
              <Form.Item label="City" className="form-item">
                <Input placeholder="Enter city" />
              </Form.Item>
              <Form.Item label="State" className="form-item">
                <Input placeholder="Enter state" />
              </Form.Item>
            </div>
            <div className="form-row">
              <Form.Item label="Zip Code" className="form-item">
                <Input placeholder="Enter zip code" />
              </Form.Item>
            </div>
          </Form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="demo-form">
      <div className="tab-buttons">
        <Button
          className="demo-form-buttons"
          style={{
            background: activeTab === "primary" ? "#3158F0" : "",
            color: activeTab === "primary" ? "white" : "",
          }}
          onClick={() => setActiveTab("primary")}>
          Primary Details
        </Button>
        <Button
          className="demo-form-buttons"
          style={{
            background: activeTab === "other" ? "#3158F0" : "",
            color: activeTab === "other" ? "white" : "",
          }}
          onClick={() => setActiveTab("other")}>
          Other Details
        </Button>
        <Button
          className="demo-form-buttons"
          style={{
            background: activeTab === "address" ? "#3158F0" : "",
            color: activeTab === "address" ? "white" : "",
          }}
          onClick={() => setActiveTab("address")}>
          Address Details
        </Button>
      </div>

      <div className="demo-form-content">{renderFormContent()}</div>
    </div>
  );
};

export default DemoForm;
