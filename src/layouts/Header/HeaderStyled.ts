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
`

export const LogoThumb = styled.div`
display: inline-block;

width: 80px;
height: 24px;

overflow: hidden;
`

export const NavList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;

& > li:not(:last-of-type){
margin-right: 24px;
}

&  a{
font-size: 12px;
font-weight: 400;

color: #fff;
}
`