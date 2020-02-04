import React from "react";

import { AllServices } from "./../comp/services.jsx";

import "./../../assets/css/pages.css";

export default class Main extends React.Component {
  render() {
    return (
      <div className="hw-page">
        <AllServices />
      </div>
    );
  }
}
