import styled from "@emotion/styled";

export const NavComCon = styled.div`
  margin-bottom: 56px;

  text-align: left;

  & > ul:not(:last-of-type) {
    margin-bottom: 48px;
  }
`;

export const NavList = styled.ul`
  & > li:not(:last-of-type) {
    margin-bottom: 16px;
  }

  & a {
    font-size: 16px;

    color: #fff;
  }
`;
