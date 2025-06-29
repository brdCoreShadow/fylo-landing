import styled from "@emotion/styled";

import quotes from "../../assets/images/bg-quotes.png";

export const FeedbackList = styled.ul`
  position: relative;

  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 160px;

  color: #fff;

  &::before {
    position: absolute;
    top: 0;
    left: 0;

    transform: translate(100%, -50%);

    content: "";
    width: 32px;
    height: 50px;
    display: inline-block;

    background-image: url(${quotes});
    background-size: contain;
    background-repeat: no-repeat;
  }

  & > li:not(:last-of-type) {
    margin-bottom: 24px;
  }

  & > li {
    padding-top: 24px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;

    background-color: #202a3c;

    border-radius: 4px;

    & > p {
      margin-bottom: 16px;

      font-size: 10px;
      line-height: 1.8;
    }
  }
`;
export const ProfileCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & h5 {
    margin-bottom: 4px;

    font-size: 10px;
    line-height: 1.2;
  }

  & p {
    font-size: 7px;
    line-height: 1.4;
  }
`;

export const AvatarThumb = styled.div`
  width: 24px;
  height: 24px;

  margin-right: 8px;

  border-radius: 50%;

  overflow: hidden;
`;
