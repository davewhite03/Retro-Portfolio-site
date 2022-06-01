import React, { useState } from 'react';
import { Fragment } from 'react';

import classes from './Header.module.css';

import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  const [contButton, setContButton] = useState(false);

  function handleScroll() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  const contHandler = () => {
    setContButton(!contButton);

    props.contButton(contButton);
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <HeaderCartButton onClick={handleScroll}>Portfolio</HeaderCartButton>
        <a href="http://davidwhitejrwebdev.epizy.com/resume.PDF">
          <HeaderCartButton>Resume</HeaderCartButton>
        </a>
        <HeaderCartButton onClick={contHandler}>Contact Me</HeaderCartButton>
      </header>
    </Fragment>
  );
};

export default Header;
