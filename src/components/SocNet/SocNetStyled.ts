import styled from "@emotion/styled";

export const SocNetList = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

& > li:not(:last-of-type){
    margin-right: 12px;
}

& img{
    &:hover, &:focus, &:active{
        fill:#62E0D9;

        cursor: pointer;
    }
}
`