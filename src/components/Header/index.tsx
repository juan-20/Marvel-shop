import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Cart, Logo } from './styles';
import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/marvel-logo.svg';

const Header = (): JSX.Element => {
  const history = useHistory();

  function goBack() {
    history.push('/');
    console.log(history);
  }
  return (
    <Container>
      <Logo onClick={goBack}>
        <img src={logo} alt="Marvel Logo" />
      </Logo>

      <Cart to="/cart">
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container >
  );
};

export default Header;
