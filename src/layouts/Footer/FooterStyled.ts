import styled from "@emotion/styled";

export const FooterCon = styled.footer`
  padding-top: 80px;
  padding-bottom: 52px;
  padding-left: 28px;
  padding-right: 28px;

  background-color: #0b1524;

  @media (min-width: 1280px) {
    padding-top: 172px;
    padding-bottom: 52px;
    padding-left: 120px;
    padding-right: 80px;
  }
`;

export const FooterFlexCon = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const FooterLogoThumb = styled.div`
  width: 108px;
  height: 31px;

  margin-bottom: 36px;

  overflow: hidden;

  @media (min-width: 1280px) {
    width: auto;
    height: auto;

    margin-bottom: 52px;

    & > img {
      width: 108px;
      height: 31px;
    }
  }
`;
