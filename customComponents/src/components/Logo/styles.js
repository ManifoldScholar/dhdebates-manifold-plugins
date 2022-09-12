import styled from "@emotion/styled";
import { breakpoints } from "theme/styles/variables/media";
import { respond } from "theme/styles/mixins";

const break40 = breakpoints[40];
const break65 = breakpoints[65];
const break80 = breakpoints[80];

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 0;

  ${respond(`flex-direction: row;`, break40)}
  ${respond(`
    padding-top: 0;
    padding-left: $logoPadding;
  `, break65)}

   svg {
     max-width: 100%;
   }
`;

export const Row = styled.div`
   display: flex;

   &:not(:first-child) {
     padding-top: 40px;
     padding-left: 0;

    ${respond(`
       padding-top: 0;
       padding-left: 5.75vw;
    `, break40)}

    ${respond(`
    padding-left: 46px;
    `, break80)}


   }
`;

export const LogoLink = styled.a`
  &:not(:first-child) {
    padding-left: 46px;

    ${respond(`
       padding-left: 5.75vw;
    `, break40)}

    ${respond(`
    padding-left: 46px;
    `, break80)}

  }
 }
`
