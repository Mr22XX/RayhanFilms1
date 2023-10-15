import {Card, Container, Row, Col,Image} from "react-bootstrap"
import joker from "../assets/images/trending/joker.jpg"
import ipman from "../assets/images/trending/ipman.jpg"
import avatar from "../assets/images/trending/avatar.jpg"
import fst from "../assets/images/trending/fst.jpg"
import kkn from "../assets/images/trending/kkn.jpg"
import cars from "../assets/images/trending/cars.jpg"
const Trending = () =>{
    return(
        <div>
            
            <Container>
                <br/>
                <br/>
                <h1 className="text-white" id="trending">TRENDING MOVIES</h1>
                <Row>
                    <Col md={4} className="movieWrapper" >
                    <Card className="movieImage">
                        <Image src={joker} alt="Joker image"  className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Joker</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={avatar} alt="Avatar image" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Avatar</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={fst} alt="fst image"  className="images"/>
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Fast and Forious</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={ipman} alt="fst image" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Ip Man</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={cars} alt="fst image" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">Cars</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                    <Card className="movieImage">
                        <Image src={kkn} alt="fst image" className="images" />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-white">
                            <Card.Title className="text-center">KKN di Desa Penari</Card.Title>
                            <Card.Text className="text-left">
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content.
                            </Card.Text>
                            <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Trending