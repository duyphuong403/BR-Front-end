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

export const TextH2 = styled.h2`
  align-self: center;
`

export const WrapperUploadInput = styled.div`
  width: 50%;
  padding-bottom: ${props => props.isError ? "0em" : "3.2em"} ;
`

export const ErrorText = styled.p`
  color: red;
`

export const WrapperImage = styled.div`
  width: 100%;
  padding-top: 3em;
`