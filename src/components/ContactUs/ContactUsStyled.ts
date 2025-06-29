import styled from "@emotion/styled";

export const ContactUsCon = styled.div`
  margin-bottom: 80px;

  padding-top: 40px;
  padding-bottom: 36px;
  padding-left: 28px;
  padding-right: 28px;

  background-color: #1b2330;
`;

export const ContactUsContentCon = styled.div`
  margin-bottom: 32px;

  text-align: center;

  color: #fff;

  & > h3 {
    margin-bottom: 16px;

    font-size: 18px;
    line-height: 1.3;
  }

  & > p {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const ContactUsForm = styled.form`
  width: 100%;

  & > input {
    width: inherit;

    margin-bottom: 24px;

    padding-top: 20px;
    padding-bottom: 16px;
    padding-left: 28px;

    font-size: 10px;

    color: #c0c0c0;

    background-color: #fff;

    border-radius: 24px;
  }

  & > button {
    width: inherit;

    padding-top: 16px;
    padding-bottom: 16px;

    font-size: 14px;
    font-weight: 700;

    color: #fff;
    background: linear-gradient(to right, #63e1d9 0%, #34a0cd 100%);

    border-radius: 24px;
  }
`;
