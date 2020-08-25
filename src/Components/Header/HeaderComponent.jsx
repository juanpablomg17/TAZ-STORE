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
            <div>
                <nav id="header-nav" class="navbar navbar-defadult">

                   
                        <div class="navbar-header">
                            <a href="index.html" class="pull-left visible-md visible-lg">
                            <Link to="/home"> <div id="logo-img" alt="Logo image"></div></Link>
                            </a>

                            <div class="navbar-brand">
                            
                               
                            </div>

                            <button id="navbarToggle" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>

                        <div id="collapsable-nav" class="collapse navbar-collapse">
                            <ul id="nav-list" class="nav navbar-nav navbar-right">
                                <li id="navHomeButton" class="visible-xs active">
                                    <a href="index.html">
                                        <span class="glyphicon glyphicon-home"></span> Home</a>
                                </li>
                                <li id="navMenuButton">
                                    <Link to="/productos" onclick="$dc.loadMenuCategories();">
                                        <span class="glyphicon glyphicon-th-list"></span><br class="hidden-xs" />Productos</Link>
                                </li>
                                <li>
                                    <a target="_blank"href="https://api.whatsapp.com/send?phone=+573005033471&text=Hola,%20Quiero%20información%20sobre%20sus%20productos.">
                                        <span class="glyphicon glyphicon-phone"></span><br class="hidden-xs" />Contáctanos</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span class="glyphicon glyphicon-info-sign"></span><br class="hidden-xs" />Nosotros</a>
                                </li>
                            
                            </ul>
                        </div>
                 


                </nav>





            </div>

        );
    }

}






