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

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  background-color: #f0141e;
  height: 50px;
  border-radius: 10px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
