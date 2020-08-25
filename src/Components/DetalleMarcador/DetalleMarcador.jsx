import React from 'react'
import { Card, CardImg, CardText, CardBody, CardHeader,CardFooter,
    CardTitle, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderMarcador ({marcador}) {
    return(
        <div className="marcador">
        <Card>
            <CardImg width="400px" height="400px" src={marcador.imageBig} alt={marcador.name} />
            <CardBody>
                
            </CardBody>
        </Card>
    </div>
    );
}

function RenderDetalle({marcador}){
    return(
        <div>
        <Card id="tarjeta-detalle">
        <CardHeader>
           <h1 className="titulo-detalle">Descripción del Producto</h1> 
        </CardHeader>
        <CardBody>
            <p>
            {marcador.description}
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio delectus ex nihil ea praesentium cum consectetur ratione unde, assumenda repellendus blanditiis earum quod! Doloribus molestias animi vitae nam neque id quis asperiores dolorem, ex deleniti repellendus praesentium vel nostrum aut consequatur sit distinctio eum assumenda odit hic? Eveniet, a inventore!



            </p>

            <hr/>
            <span>
                {marcador.price}
            </span>

            <br/>
            <br/>
                      
        </CardBody>

        <CardFooter>
        <CardFooter>

                        <Button style={{ display: "block",color: "white" }} className="boton" target="_blank" href={marcador.link} >
                            <span className="glyphicon glyphicon-shopping-cart" ></span>Comprar
                        </Button>

</CardFooter>

        </CardFooter>
        
        
        </Card>
        </div>
    );

}




export default function DetalleMarcador(props) {
  
    return (
        <div className="container">
        <div className="row mb-25">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/marcadores">Marcadores</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.marcador.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3 className="titulo-detalle">{props.marcador.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-6 m-1">
              <RenderMarcador marcador={props.marcador}/>
            </div>
            <div className="col-12 col-md-6 m-1">
              <RenderDetalle marcador={props.marcador}/>
            </div>
          
        </div>
        </div>
    );
    
}
