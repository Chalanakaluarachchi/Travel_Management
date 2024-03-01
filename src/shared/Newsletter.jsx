import React from 'react'
import './newsletter.css'

import {Container,Row,Col} from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className='newsletter__content'>
                    <h2>Subcribe now to get useful travel information</h2>

                    <div className="newsletter__input">
                        <input type='email' placeholder='Enter your email'/>
                        <button className='btn newsletter__btn'>Subcribe</button>
                </div>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Incidunt aperiam eaque ex suscipit illo libero reprehenderit, 
                        provident iure dolorum, tempore cumque laboriosam. Repellat 
                        vero nihil est dolore quas culpa ex!
                    </p>
                </div>
            </Col>
            <Col lg='6'>
                <div className='newsletter__img'>
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
)}

export default Newsletter