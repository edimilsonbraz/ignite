import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  height: 34rem;
  /* background: cornflowerblue; */

  display: grid;
  grid-template-columns: 2fr 1fr;

  padding-top: 5.875rem;
  
  .ContentText {
    padding-right: 3.375rem;
  }

  h1 {
    line-height: 3.875rem;
  } 

  p {
    max-width: 34rem;
    line-height: 1.625rem;
    margin-top: 1rem;
    font-size: 1.125rem;
  }
`

export const IconsContent = styled.div`
  margin-top: 4.125rem;


  span {
    margin-right: 2.5rem;

    svg {
      margin-right: 0.75rem;
    }
  } 

  
`