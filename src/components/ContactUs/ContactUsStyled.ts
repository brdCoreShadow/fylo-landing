import styled from "@emotion/styled";

export const ContactUsCon = styled.div`
  margin-bottom: 80px;

  padding-top: 40px;
  padding-bottom: 36px;
  padding-left: 28px;
  padding-right: 28px;

  background-color: #1b2330;

  @media (min-width: 1280px) {
    width: 60%;

    transform: translate(0, 50%);

    margin-left: auto;
    margin-right: auto;

    margin-bottom: 0;

    padding-top: 40px;
    padding-bottom: 40px;
    padding-left: 76px;
    padding-right: 76px;

    border-radius: 12px;
  }
`;

export const ContactUsContentCon = styled.div`
  margin-bottom: 32px;

  text-align: center;

  color: #fff;

  @media (max-width: 1280px) {
    margin-bottom: 38px;
  }

  & > h3 {
    margin-bottom: 16px;

    font-size: 18px;
    line-height: 1.3;

    @media (min-width: 1280px) {
      margin-bottom: 0;

      font-size: 32px;
    }
  }

  & > p {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const ContactUsForm = styled.form`
  width: 100%;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  & > input {
    width: inherit;

    margin-bottom: 24px;

    padding-top: 20px;
    padding-bottom: 16px;
    padding-left: 28px;

    font-size: 10px;

    background-color: #fff;

    border-radius: 24px;

    &::placeholder {
      color: #c0c0c0;
    }

    @media (min-width: 1280px) {
      width: 55%;

      margin-bottom: 0;

      padding-top: 16px;
      padding-left: 36px;

      font-size: 12px;

      color: #07043b;
    }
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

    @media (min-width: 1280px) {
      width: auto;

      padding-left: 28px;
      padding-right: 28px;

      transition: all 0.3s;

      &:hover,
      &:focus,
      &:active {
        opacity: 0.7;

        cursor: pointer;

        transition: all 0.3s;
      }
    }
  }
`;
