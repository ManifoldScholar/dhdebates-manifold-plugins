import React, { Component } from "react";
import "./styles.scss";
import PartnerLogos from "../PartnerLogos";

export default class Logo extends Component {

  render() {
    return (
      <div className="custom-logo">
        <div className="logo-row">
          <a className="logo-link" href="https://www.gc.cuny.edu/home">
            <PartnerLogos.GraduateCenter />
          </a>
          <a className="logo-link" href="https://www.upress.umn.edu/">
            <PartnerLogos.UmnPress />
          </a>
        </div>
        <div className="logo-row">
          <a className="logo-link" href="https://gcdsl.commons.gc.cuny.edu/">
            <PartnerLogos.GcScholarship />
          </a>
          <a className="logo-link" href="https://gcdi.commons.gc.cuny.edu/">
            <PartnerLogos.GcInitiatives />
          </a>
        </div>
      </div>
    );
  }
}
