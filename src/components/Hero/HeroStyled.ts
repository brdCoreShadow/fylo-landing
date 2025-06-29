import styled from "@emotion/styled";

export const HeroCon = styled.div`
  padding-bottom: 120px;

  text-align: center;

  @media (min-width: 1280px){
    width: 50%;

    padding-bottom: 160px;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const HeroThumb = styled.div`
  width: 304px;
  height: 225px;

  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;

  @media (min-width: 1280px){
    width: 600px;
    height: 500px;

    margin-bottom: 36px;
  }
`;

export const HeroContentCon = styled.div`
  margin-bottom: 32px;

  text-align: center;

  color: #fff;

  & > h3 {
    margin-bottom: 16px;

    font-size: 24px;
    line-height: 1.5;

    @media (min-width: 1280px){
      margin-bottom: 32px;

      font-size: 40px;
    }
  }

  & > p {
    font-size: 14px;
    line-height: 1.5;

    @media (min-width: 1280px){
      font-size: 20px;
    }
  }
`;

export const HeroBtn = styled.button`
  width: 240px;

  padding-top: 16px;
  padding-bottom: 16px;

  font-size: 14px;
  font-weight: 700;

  color: #fff;
  background: linear-gradient(to right, #63e1d9 0%, #34a0cd 100%);

  border-radius: 24px;

  @media (min-width: 1280px){
    width: 280px;

    font-size: 16px;
  }
`;
