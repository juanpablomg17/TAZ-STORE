import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

// COMPONENTES
import Header from '../../Components/Header/HeaderComponent';
import Footer from '../../Components/Footer/FooterComponent';
import HomePage from '../../Components/HomePageComponent/HomePage';
import Marcadores from '../Marcadores/MarcadoresComponent';
import DetalleMarcador from '../DetalleMarcador/DetalleMarcador'

// DATA

import { PRODUCTOS } from '../data/homeProducts';
import { MARCADORES } from '../data/marcadoreProducts';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categorias: PRODUCTOS,
      marcadores: MARCADORES

    };
  }


  homePage = () => {
    return (
      <HomePage categoria={this.state.categorias} />
    )
  }

  marcadores = () => {
    return (
      <Marcadores marcadores={this.state.marcadores} />
    );
  }

   marcadorId = ({match}) => {
    return(
        <DetalleMarcador marcador={this.state.marcadores.filter((marca) => marca.id === parseInt(match.params.marcadorId,10))[0]} 
           />
    );
  };

  footer = () => {
    return (
      <Footer />
    );

  }


  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={this.homePage} />
          <Route exact path="/">
            {HomePage ? <Redirect to="/home" /> : <HomePage />}
          </Route>

          <Route exact path="/marcadores" component={this.marcadores}>

          </Route>
          <Route path='/marcadores/:marcadorId' component={this.marcadorId} />



        </Switch>
        <div >

          <a target="_blank" href="https://api.whatsapp.com/send?phone=+573005033471&text=Hola,%20Quiero%20información%20sobre%20sus%20productos." class="float" target="_blank">
            <i class="fa fa-whatsapp my-float"></i>
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;