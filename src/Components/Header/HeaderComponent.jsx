import React, { Component, Fragment } from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavbarToggler, Nav, Collapse, NavItem } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import '../Header/header.css'


export default class Header extends Component {

    constructor(props) {

        super(props);

    }



    render() {

        return (
           
                <div class="jumbotron" style={{paddingBottom: "0px"}}>
                    <div className="container-fluid">
                        <div className="row">
                            <div id="col-icono" className="col-lg-4 col-md-6 col-sm-12">
                                <img id="logo" src="/assets/images/logoGRANDE.jpeg" width="300px" height="250px" alt="LOGO"/>
                            </div>
                            <div id="col-titulo"  className="col-lg-4 col-md-6 col-sm-12">
                               <div id="titulo-page">
                                  <h1 style={{color:"#f5d0d5",
                                        fontFamily: 'Selima', textAlign: "center"}}>TAZ STORE</h1>  
                               </div>

                                <div id="marca">
                                    <span>MARCARKET LOVER</span>
                                </div>

                                <div>
                               

                            </div>
                                </div>

                                <button type="button" id="boton-buscar" class=" btn-lg btn-block">
                                <span className="glyphicon glyphicon-search"></span>
                                    Buscar Productos</button>
                        </div>
                    </div>
                </div>



             

        );
    }

}






