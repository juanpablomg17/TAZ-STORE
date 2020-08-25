
import React from 'react'
import {
    Card, CardImg, CardFooter,
    CardTitle, Button, CardBody, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
// commit
import './marcadores.css';

function RenderMacadores({ marcador, onClick }) {
    return (
        <div>
            <Card id="tarjeta" className="rounded">

                <Link to={`/marcadores/${marcador.id}`}>
                    <CardImg width="250px" src={marcador.image} height="200px" alt={marcador.name} />

                </Link>

                <CardTitle>
                    {marcador.name}
                </CardTitle>
                <CardBody>
                    <span>{marcador.price}</span>
                </CardBody>
                <CardFooter>

                    <Button style={{display: "block"}} className="boton" target="_blank" href={marcador.link} >
                        <span className="glyphicon glyphicon-shopping-cart" ></span>Comprar
                    </Button>

                </CardFooter>

            </Card>

        </div>
    );

}


const Marcadores = (props) => {


    const marcador = props.marcadores.map((mac) => {
        return (
            <div className="marcadores">
                <div className="col-12 col-md-3 m-1" key={mac.id}>
                    <RenderMacadores marcador={mac} />
                </div>

            </div>


        );
    })

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Marcadores</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Marcadores</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                {marcador}
            </div>
        </div>




    );
}


export default Marcadores;