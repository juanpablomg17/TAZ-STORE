import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';

import Header from '../../Components/Header/HeaderComponent';

import Footer from '../../Components/Footer/FooterComponent';
import HomePage from '../../Components/HomePageComponent/HomePage';
import Marcadores from '../Marcadores/MarcadoresComponent';


// DATA

import {PRODUCTOS} from '../data/homeProducts';
import {MARCADORES } from '../data/marcadoreProducts';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        categorias: PRODUCTOS,
        marcadores: MARCADORES
        
    };
  }


  homePage = () => {
    return(
      <HomePage categoria={this.state.categorias}/>
    )
  }

  marcadores = () => {
    return(
      <Marcadores marcadores={this.state.marcadores}/>
    );
  }

  footer = () => {
    return(
      <Footer/>
    );

  }


    render() {
      
        return (
            <div>
            <Header/>
                <Switch>
                  <Route path="/home" component={this.homePage}/>
              <Route exact path="/">
                {HomePage ? <Redirect to="/home" /> : <HomePage />}
              </Route>

              <Route exact path="/marcadores" component={this.marcadores}> 

              </Route>

        
    
               
                </Switch>
            
            <Footer/>
          </div>
        );
    }
}

export default Main;