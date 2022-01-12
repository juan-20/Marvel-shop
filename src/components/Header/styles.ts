import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  a {
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }

  img{
    height: 100px;
    border-radius: 10px;
  }
  `;

export const Logo = styled.div` 
cursor: pointer;
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: #f0141e;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  div {
    text-align: right;
    margin-right: 10px;

    span {
      font-size: 12px;
    }
  }
`;
