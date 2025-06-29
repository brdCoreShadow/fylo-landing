import styled from "@emotion/styled";

export const AboutList = styled.ul`
  padding-bottom: 160px;

  & > li {
    text-align: center;

    color: #fff;

    & h4 {
      margin-bottom: 8px;

      font-size: 18px;
      line-height: 1.3;
    }

    & p {
      font-size: 14px;
      line-height: 1.5;
    }
  }

  & > li:not(:last-of-type) {
    margin-bottom: 80px;
  }
`;

export const AboutIconThumb = styled.div`
  margin-bottom: 24px;

  & > * {
    margin-left: auto;
    margin-right: auto;
  }
`;
