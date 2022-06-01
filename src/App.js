import React, { useState } from 'react';
import ScreenContext from './components/context/screen-context';
import { ContactForm } from './components/Layout/ContactForm';

import Header from './components/Layout/Header';
import Portfolio from './components/Layout/Portfolio';
import './app.module.css';
import Modal from './components/UI/Modal';
import BackgroundAnimation from './components/SvgAnimation/BackgroundAnimation';
import ZearthAnimation from './components/SvgAnimation/ZearthAnimation';
import Project from './components/Layout/Project';
const App = (props) => {
  const [proButton, setProButton] = useState(false);
  const [contButton, setContButton] = useState(false);

  const proHandler = (e) => {
    setProButton(e);
  };
  const contHandler = (e) => {
    setContButton(e);
  };
  console.log(proButton);
  const onCloseHandler = (e) => {
    setContButton(!contButton);
  };

  return (
    <ScreenContext.Provider
      value={{
        proButton: proButton,
      }}
    >
      <Header proButton={proHandler} contButton={contHandler} />
      <body>
        <BackgroundAnimation />

        <Portfolio />

        {contButton ? (
          <Modal>
            {' '}
            <ContactForm onClose={onCloseHandler} />
          </Modal>
        ) : null}
      </body>
      <ZearthAnimation />
      <Project />
    </ScreenContext.Provider>
  );
};

export default App;
