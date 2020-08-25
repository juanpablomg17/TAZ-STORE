
import React from 'react'
import { Card, CardImg, CardFooter,
    CardTitle, Button, CardBody} from 'reactstrap';
import {Link } from 'react-router-dom';

import './marcadores.css';

function RenderMacador({marcador, onClick}){
    return(
        <div>
            <Card id="tarjeta" className="rounded">
           
            <CardImg width="200px" src={marcador.image} height="200px" alt={marcador.name} />
            <CardTitle>
                {marcador.name}
            </CardTitle>
            <CardBody>
                <span>{marcador.price}</span>
            </CardBody>
            <CardFooter>
                    
                    
                    <div className="btn-group">
                    <Button  className="boton" target="_blank" href="https://api.whatsapp.com/send?phone=3005033471&text=Hola%20uiero%20Comprar%20!." >
                    <span className="glyphicon glyphicon-shopping-cart" ></span>Comprar
                    </Button>

                    <Button  className="boton" href="https://api.whatsapp.com/send?phone=3005033471&text=Hola%20uiero%20Comprar%20!." >
                    <span className="glyphicon glyphicon-eye-open"></span>Ver Detalle
                    </Button>
                    </div>
                   
                   
                    
           
             
            </CardFooter>
            
        </Card> 
       
        </div>
    );

}


 const Marcadores = (props) => {


    const marcador = props.marcadores.map((mac) => {
        return(
            <div className="marcadores"> 
                <div className="col-12 col-md-3 m-1" key={mac.id}>
                    <RenderMacador marcador={mac} />
                </div>
            
            </div>
                
           
        );
    })

    return(
       
           
            <div className="container">
            {marcador}     
            </div>
           
         
               
    
    );
}


export default Marcadores;