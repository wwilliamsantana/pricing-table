import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.4rem;

  padding: 8rem 2rem;



  @media(min-width: 1024px){
    flex-direction: row;
    max-width: 1536px;
    margin: auto;
  }


`

export const Card = styled.section<{delay: string}>`
  width: 320px;
  margin: auto;
  background-color: var(--color-white);
  border: 1px solid var(--color-gray-200);
  border-radius: 1rem;
  transition: border 0.4s;

  transition: transform 0.3s;
  animation: appear 0.4s backwards ${props => props.delay};


  &.best{
    margin-top: 1.6rem;
    position: relative;
    
    ::before{
      content: "Mais vantajoso" ;
      background-color: var(--color-orange);
      color: var(--color-gray-900);
      padding: 0.8rem 1.6rem;
      border-radius: 0.6rem;
      text-transform: uppercase;
      font-size: 1.2rem;
      line-height: 1.8rem;
      font-weight: 700;
      letter-spacing: 0.06em;

      display: inline-block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      top: -17px;
    }
  }

  &.ultimate{
    background-color: var(--color-gray-900);

   
    div:first-child p:first-child{
      color: var(--color-purple-100);
    }


    div:first-child {
    div{
        strong, span{
        color: var(--color-gray-50);
      }
    }

    button{
      background-color: var(--color-purple-100);
      border-color: var(--color-purple-200);
      color: var(--color-white);

      :hover{
        background-color: var(--color-purple-200);
      }
    }

    li{
      svg:first-child{
        color: var(--color-green-100);
      }
      span{
        color: var(--color-gray-300);
      }
      svg:last-child{
        color: var(--color-gray-500);
      }
    }

  }
  }

  &.enterprise{
    button{
      margin-top: 3.2rem;
    }

    div:first-child{
      strong{
        font-size: 3.2rem;
      }
    }

    ul{
      margin-top: 3.2rem;
      padding-top: 3.2rem;
    }
  }

  :hover{
    border-color: var(--color-purple-100);
    transform: scale(1.05);
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

      svg:last-child{
        color: var(--color-gray-900);
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