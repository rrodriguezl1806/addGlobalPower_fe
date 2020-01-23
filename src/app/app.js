import React from 'react';
import './app.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { Container, Row, Col } from 'reactstrap';

const App = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Header></Header>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
}

export default App;
