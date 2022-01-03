import styled from 'styled-components'

export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
`
export const ChoicesDivision = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  width: 80%;
  padding-left: 0px;
  @media screen and (max-width: 726px) {
    width: 100%;
  }
`
export const ChoiceButton = styled.button`
  outline: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 20px;
`
export const ChoiceImage = styled.img`
  width: 140px;
  height: 140px;
  @media screen and (max-width: 726px) {
    width: 100px;
    height: 100px;
  }
`
