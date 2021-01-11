import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  /* padding: 10px; */
  width: 100%;
  padding-bottom: 20px;
  padding-top: 3em;

`

export const Wrapper2 = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px){
    width: 90%;
  }
`


export const TextH1 = styled.h1`
  align-self: center;
  font-size: 55px;
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 400;
  line-height: 77px;
  height: auto;
`