import React from 'react';

function Footer(props) {
    return(
    <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Acceso Rápido</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Nuestros Productos</a></li>
                        <li><a href="#">Conócenos</a></li>
                        <li><a href="contactus.html">Contacto</a></li>
                    </ul>
                </div>
               
                <div className="col-12 col-sm-10 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-youtube"  target="_blank" href="http://youtube.com"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon btn-facebook"  target="_blank" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-whatsapp"  target="_blank"href="https://api.whatsapp.com/send?phone=3005033471&text=hola%20Sean%20Bienvenidos%20!."><i className="fa fa-whatsapp"></i></a>
                        <a className="btn btn-social-icon btn-instagram"  target="_blank" href="https://www.instagram.com/tazstore/"> <i className="fa fa-instagram"></i></a>
                      
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p id="copyright">© Copyright 2020 Taz Store </p>
                     <i className="fa fa-envelope fa-lg">Escríbenos a </i>: <a href="mailto:confusion@food.net">
                             tazstore@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;