import styled from "@emotion/styled";

export const NavComCon = styled.div`
  margin-bottom: 56px;

  text-align: left;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  & > ul:not(:last-of-type) {
    margin-bottom: 48px;

    @media (min-width: 1280px) {
      margin-bottom: 0;
      margin-right: 80px;
    }
  }
`;

export const NavList = styled.ul`
  & > li:not(:last-of-type) {
    margin-bottom: 16px;
  }

  & a {
    font-size: 16px;

    color: #fff;
    transition: all 0.3s;

    &:hover,
    &:focus,
    &:active {
      font-weight: 700;

      cursor: pointer;

      transition: all 0.3s;
    }
  }
`;
