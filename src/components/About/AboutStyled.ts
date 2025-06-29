import styled from "@emotion/styled";

export const AboutList = styled.ul`
  padding-bottom: 160px;

  @media (min-width: 1280px) {
    width: 60%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 140px;

    margin-left: auto;
    margin-right: auto;
  }

  & > li {
    text-align: center;

    color: #fff;

    & h4 {
      margin-bottom: 8px;

      font-size: 18px;
      line-height: 1.3;

      @media (min-width: 1280px){
        font-size: 20px;
      }
    }

    & p {
      font-size: 14px;
      line-height: 1.5;
    }
  }

  & > li:not(:last-of-type) {
    margin-bottom: 80px;

    @media (min-width: 1280px) {
      margin: 0;
    }
  }
`;

export const AboutIconThumb = styled.div`
  margin-bottom: 24px;

  @media (min-width: 1280px) {
    width: 104px;
    height: 104px;

    margin-left: auto;
    margin-right: auto;
  }

  & > * {

    margin-left: auto;
    margin-right: auto;
  }
`;
