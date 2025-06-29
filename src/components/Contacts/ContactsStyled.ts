import styled from "@emotion/styled";

export const ContactsList = styled.ul`
  margin-bottom: 56px;

  color: #fff;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;

    margin-bottom: 0;

    font-size: 16px;

    & p {
      width: 340px;
    }
  }

  & > li:not(:last-of-type) {
    margin-bottom: 16px;

    @media (min-width: 1280px) {
      margin-bottom: 0;
      margin-right: 80px;
    }
  }

  & li {
    position: relative;

    padding-left: 40px;

    &:nth-of-type(1)::before {
      position: absolute;

      top: 0;
      left: 0;

      transform: translate(0, 4px);

      content: "";

      display: inline-block;

      width: 24px;
      height: 24px;

      background-image: url("data:image/svg+xml,%3Csvg width='13' height='18' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.188 0C2.74 0 0 2.79 0 6.3 0 10.98 6.188 18 6.188 18s6.187-7.02 6.187-11.7c0-3.51-2.74-6.3-6.188-6.3zm0 8.55c-1.238 0-2.21-.99-2.21-2.25s.972-2.25 2.21-2.25c1.237 0 2.21.99 2.21 2.25s-.973 2.25-2.21 2.25z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
    }

   
  }

  & a {
    position: relative;

    display: block;

    color: #fff;

     &:not(:last-of-type) {
        margin-bottom: 16px;
      }

    &:nth-of-type(1)::before {
      position: absolute;

      top: 0;
      left: 0;

      transform: translate(-32px, 4px);

      content: "";

      display: inline-block;

      width: 24px;
      height: 24px;

      background-image: url("data:image/svg+xml,%3Csvg width='18' height='18' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z' fill='%23FFF' fill-rule='evenodd'/%3E%3C/svg%3E");

      background-repeat: no-repeat;
    }

     &:nth-of-type(2)::before {
      position: absolute;

      top: 0;
      left: 0;

      transform: translate(-32px, 4px);

      content: "";

      display: inline-block;

      width: 24px;
      height: 24px;

      background-image: url("data:image/svg+xml,%3Csvg width='20' height='16' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M-2-4h24v24H-2z'/%3E%3Cpath d='M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E");

      background-repeat: no-repeat;
    }

    @media (min-width: 1280px) {
      display: block;

      font-size: 16px;

     
    }
  }
`;
