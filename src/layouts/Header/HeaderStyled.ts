import styled from "@emotion/styled";

export const HeaderCon = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding-top: 24px;
  padding-bottom: 48px;
  padding-left: 20px;
  padding-right: 24px;

  @media (min-width: 1280px) {
    padding-top: 72px;
    padding-bottom: 72px;
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export const LogoThumb = styled.div`
  display: inline-block;

  width: 80px;
  height: 24px;

  overflow: hidden;

  @media (min-width: 1280px) {
    width: 176px;
    height: 52px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > li:not(:last-of-type) {
    margin-right: 24px;

    @media (min-width: 1280px) {
      margin-right: 56px;
    }
  }

  & a {
    font-size: 12px;
    font-weight: 400;

    color: #fff;

    @media (min-width: 1280px) {
      font-size: 16px;

      transition: all 0.3s;

      &:hover,
      &:focus,
      &:active {
        font-weight: 700;
        border-bottom: 1px solid #fff;

        transition: all 0.3s;

        cursor: pointer;
      }
    }
  }
`;
