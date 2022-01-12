import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;
  
  color: #fff;

  li {
    text-decoration: none;

&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
}
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .basic-information{
    display: flex;
    flex-direction: column;
    color: #fff;
    border-radius: 4px;
    padding: 20px;
    
    border-radius: 50px;
    border-radius: 50px;
    background: #333;
    
    height: 40rem;
    >a{
      max-width: 250px;
      text-decoration: none;
      color: #fff;
    }
    img {
      border-radius: 8px;
      align-self: center;
      max-width: 250px;
      height: 450px;
    }

    &-text {
    display: flex;
    flex-direction: column;
    > strong {
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }
  }

    button {
      background: #f0141e;  
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.02, '#f0141e')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  } 
    .expanded-information{
      /* background-color: #fff; */
      display: none;
      position: absolute;
      >p{
        margin: 1.5rem;
        color: #fff;
        text-align: center;
        max-width: 250px;
      }
      justify-content: center;
    }



  }

  @media only screen and (max-width: 1024px) {
    display: grid;
  grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 750px) {
    display: grid;
  grid-template-columns: repeat(1, 1fr);
  }

`;
