import styled from "@emotion/styled";

export const StayProductiveCon = styled.div`
  padding-bottom: 160px;

  color: #fff;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-bottom: 120px;
    padding-left: 104px;
    padding-right: 104px;
  }
`;

export const StayProductiveIconThumb = styled.div`
  margin-bottom: 48px;

  @media (min-width: 1280px) {
    width: 600px;

    margin-bottom: 0;
    margin-right: 56px;
  }

  & > * {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const StayProductiveContentCon = styled.div`
  & > h4 {
    margin-bottom: 16px;
    margin-left: 6px;

    font-size: 18px;
    line-height: 1.3;

    @media (min-width: 1280px) {
      text-wrap: balance;

      margin-left: 0;

      font-size: 40px;
    }
  }

  & > p {
    margin-bottom: 16px;

    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;

    @media (min-width: 1280px) {
      font-size: 16px;

      &:last-of-type {
        margin-bottom: 24px;
      }
    }
  }

  & > a {
    position: relative;

    padding-bottom: 4px;
    padding-right: 20px;

    font-size: 12px;

    color: #62e0d9;

    border-bottom: 1px solid #62e0d9;

    @media (min-width: 1280px) {
      font-size: 16px;
      font-weight: 400;

      transition: all 0.3s;

      &:hover,
      &:focus,
      &:active {
        color: #fff;

        border-bottom: 1px solid #fff;

        cursor: pointer;

        &::after {
          background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Ccircle id='b' cx='6' cy='6' r='6'/%3E%3Cfilter x='-25%25' y='-25%25' width='150%25' height='150%25' filterUnits='objectBoundingBox' id='a'%3E%3CfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='1' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.811141304 0' in='shadowBlurOuter1'/%3E%3C/filter%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(2 2)'%3E%3Cuse fill='%23fff' filter='url(%23a)' xlink:href='%23b'/%3E%3Cuse fill='%23fff' xlink:href='%23b'/%3E%3C/g%3E%3Cpath d='M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z' fill='%231B2330'/%3E%3C/g%3E%3C/svg%3E");
        }

        transition: all 0.3s;
      }
    }

    &::after {
      content: "";

      position: absolute;
      top: 0;
      right: 0;

      display: inline-block;

      width: 16px;
      height: 16px;

      background-image: url("data:image/svg+xml,%3Csvg width='16' height='16' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Cdefs%3E%3Ccircle id='b' cx='6' cy='6' r='6'/%3E%3Cfilter x='-25%25' y='-25%25' width='150%25' height='150%25' filterUnits='objectBoundingBox' id='a'%3E%3CfeOffset in='SourceAlpha' result='shadowOffsetOuter1'/%3E%3CfeGaussianBlur stdDeviation='1' in='shadowOffsetOuter1' result='shadowBlurOuter1'/%3E%3CfeColorMatrix values='0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0' in='shadowBlurOuter1'/%3E%3C/filter%3E%3C/defs%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg transform='translate(2 2)'%3E%3Cuse fill='%23000' filter='url(%23a)' xlink:href='%23b'/%3E%3Cuse fill='%2362E0D9' xlink:href='%23b'/%3E%3C/g%3E%3Cpath d='M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z' fill='%231B2330'/%3E%3C/g%3E%3C/svg%3E");
    }
  }
`;
