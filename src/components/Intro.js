import {Col, Container, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return(
        <div className=' intro'>
        <Container className='text-white d-flex justify-content-center 
        align-items-center text-center'>
          <Row>
            <Col>
              <div className='title'>IF YOU ARE A SINGLE </div>
              <div className='title'> U CAN'T WATCH THIS</div>
              <div className='introButton mt-4 d-flex justify-content-center'>
                <Button href='#trending' variant='dark'>Lihat Semua List</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}
export default Intro