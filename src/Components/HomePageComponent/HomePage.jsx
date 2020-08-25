import React from 'react';
import './homepage.css';
import { Card, CardImg, CardFooter,
    CardTitle, Button} from 'reactstrap';

import {Link} from 'react-router-dom';

    function RenderProductItem ({categoria}) {
        return (
        <Card id="tarjeta" className="rounded">
            <Link  to="/marcadores">
            <CardImg width="100%" src={categoria.image} alt={categoria.name} />
            <CardFooter>
               <Button id="boton">VER CATEGORÍA</Button>
            </CardFooter>
            </Link>
        </Card> 
       

        );
    }



    const HomePage = (props) => {

        const HomePage = props.categoria.map((cat) => {
            return (
                <div className="col-12 col-md-4 m-1"  key={cat.id}>
                    <RenderProductItem categoria={cat}  />
                </div>
            );
        });

        return (
          
                
            <div  >
                <div id="homepage">
                    <div >

                        <a href="https://api.whatsapp.com/send?phone=3005033471&text=hola%20Sean%20Bienvenidos%20!." class="float" target="_blank">
                            <i class="fa fa-whatsapp my-float"></i>
                        </a>
                    </div>
                    <div className="row">
                    {HomePage}
                </div>
                </div>

               

               
              

            

            </div>

        );
    }



export default HomePage;
   
