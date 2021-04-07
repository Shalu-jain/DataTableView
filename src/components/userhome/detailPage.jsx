import React from 'react';
import { useLocation, Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function DetailPage(){
    let location = useLocation();
    const rowData  = JSON.parse(location.state);
    return (
        <div>
            <Container className="containerpadding">
                <Row>
                    <Col md={12}>
                         <h2 align="center">DETAILS</h2>
                    </Col>
                </Row>
            </Container>      
            <Card className="card">
                <Container>
                    <Row>
                        <Col md={5}>
                            <h5><b>ID</b></h5>
                        </Col>
                        <Col md={7}>
                           <p>{rowData.id}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            <h5><b>USER ID</b></h5>
                        </Col>
                        <Col sm={7}>
                           <p>{rowData.userId}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            <h5><b>TITLE</b></h5>
                        </Col>
                        <Col sm={7}>
                           <p>{rowData.title}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={5}>
                            <h5><b>BODY</b></h5>
                        </Col>
                        <Col sm={7}>
                           <p>{rowData.body}</p>
                        </Col>
                    </Row>
                </Container>
            </Card>
            <Container className="buttoncontainer">
                <Row>
                    <Col md={12}>
                        <Button variant="warning" className="buttondesign"><Link to={{ pathname: "/" }}>Back</Link></Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DetailPage;