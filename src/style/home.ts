import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background-color: var(--color-gray-50);
  padding: 8rem 2rem;
`

export const Card = styled.section`
  width: 320px;
  margin: auto;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: 1rem;
  transition: border 0.4s;

  :hover{
    border-color: var(--color-purple-100);
  }
`

export const Inner = styled.div`
  padding: 2.4rem;
 

  p{
    color: var(--color-purple-200);
    font-size: 1.4rem;
    line-height: 2.1rem;
    letter-spacing: 0.06rem;
    text-transform: uppercase;
    font-weight: 600;
  }


  ul{
    margin-top: 1.6rem;
    border-top: 1px solid var(--color-gray-200);
    padding-top: 1.6rem;
    list-style: none;

    display: grid;
    gap: 1.6rem;

    li{
      display: flex;
      align-items: center;
      gap: 0.8rem;

      svg:first-of-type{
        color: var(--color-green-200);
      }

      span{
        flex: 1;
        color: var(--color-gray-600);
        line-height: 24px;
        letter-spacing: 0.06em;
      }
    }

  }

`


export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.8rem;

  & > strong{
    color: var(--color-gray-800);
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2.7rem;
  }

  span{
    color: var(--color-gray-800);
    font-size: 1.8rem;
    line-height: 2.7rem;
  }
`

export const Button = styled.button`
  padding: 1.6rem 2.4rem;
  text-align: center;
  width: 100%;
  background: none;
  margin-top: 1.6rem;

  border: 1px solid var(--color-gray-800);
  border-radius: 0.4rem;

  font-weight: 700;
  color: var(--color-gray-800);
  transition: background-color 0.4s;

  :hover{
    background-color: var(--color-gray-800);
    color: var(--color-white);
  }

`