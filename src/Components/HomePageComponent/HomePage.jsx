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

                        <a target="_blank"href="https://api.whatsapp.com/send?phone=+573005033471&text=Hola,%20Quiero%20información%20sobre%20sus%20productos." class="float" target="_blank">
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
   
