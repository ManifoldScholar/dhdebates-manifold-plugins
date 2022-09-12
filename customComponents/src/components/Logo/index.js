import React, { Component } from "react";
import * as Styled from "./styles";
import PartnerLogos from "../PartnerLogos";

export default class Logo extends Component {

  render() {

    return (
      <Styled.Container>
        <Styled.Row>
          <Styled.LogoLink href="https://www.gc.cuny.edu/home">
            <PartnerLogos.GraduateCenter />
          </Styled.LogoLink>
          <Styled.LogoLink href="https://www.upress.umn.edu/">
            <PartnerLogos.UmnPress />
          </Styled.LogoLink>
        </Styled.Row>
        <Styled.Row>
          <Styled.LogoLink href="https://gcdsl.commons.gc.cuny.edu/">
            <PartnerLogos.GcScholarship />
          </Styled.LogoLink>
          <Styled.LogoLink href="https://gcdi.commons.gc.cuny.edu/">
            <PartnerLogos.GcInitiatives />
          </Styled.LogoLink>
        </Styled.Row>
      </Styled.Container>
    );
  }
}
