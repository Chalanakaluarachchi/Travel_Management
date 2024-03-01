import React from 'react'
import '../styles/home.css'

import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle'
import ServiceList from '../service/ServiceList';
import FeaturedTourList from '../componenta/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../componenta/Image-gallery/MasonryImagesGallery';
import Testimoials from '../componenta/Testimoial/Testimoials';
import SearchBar from '../shared/SearchBar';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>
  {/*-----------hero section start*/}
  <section>
  <Container>
    <Row>
      <Col lg='6'>

        <div className="hero__content">
        <div className="hero_subtitle d-flex align-items-center ">

        <Subtitle subtitle={'Know Before You Go'} />
        <img src={worldImg} alt="" />
        </div>
        <h1>Traveling opens the door to creating <span className="highlight"> memories </span>
        </h1>  
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla sint 
            deleniti fugiat. Dolorem, excepturi blanditiis placeat officiis, doloremque 
            facere veniam iusto odit doloribus voluptate ipsa earum molestiae debitis 
            necessitatibus.
          </p>
      </div> 
      </Col>
      <Col lg='2'>
        <div className='hero__img-box'>
          <img src={heroImg} alt="" />
        </div>
      </Col>
      <Col lg='2'>
        <div className='hero__img-box mt-4'>
          <video src={heroVideo} alt="" controls/>
        </div>
      </Col>
      <Col lg='2'>
        <div className='hero__img-box mt-5'>
          <img src={heroImg02} alt="" />
        </div>
      </Col>
      <SearchBar/>
    </Row>
  </Container>
  </section>
  {/*---------hero section end---------*/}
  <section>
    <Container>
      <Row>
        <Col lg="3">
          <h5 className='services__subtitle'>What we serve</h5>
          <h2 className='service__title'>We offer our best services</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
  </section>

  {/*---------featured section start---------*/}
  <section>
    <Container>
      <Row>
        <Col lg='12' className="mb-5">
          <Subtitle subtitle={'Explore'}/>
          <h2 className="featured__tour-title">Our feature tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
  </section>
  {/*---------featured section end---------*/}

  {/*---------experince section start---------*/}

  <section>
    <Container>
      <Row>
        <Col lg='6'>
        <div className='experience__content'>
          <Subtitle subtitle={"Experience"}/>

          <h2>With our all experince <br/> we will serve you</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing 
            elit. <br/>autem quas facere! Voluptatum, beatae dicta in
              corporis eius molestiae soluta!</p>
              </div>

        <div className='counter__wrapper d-flex align-items-center gap-5'>
          <div className='counter__box'>
            <span>12k+</span>
            <h6>Successful Trip</h6>  
          </div>

          <div className='counter__box'>
            <span>2k+</span>
            <h6>Regular Clients</h6>  
          </div>

          <div className='counter__box'>
            <span>5</span>
            <h6>Year Experince</h6>  
          </div>

        </div>
        </Col>
        <Col lg='6'>
          <div className='experience__img'>
            <img src={experienceImg} alt=''/>
          </div>
          
        </Col>
      </Row>
    </Container>
  </section>
  {/*---------experince section end---------*/}
  {/*--------gallery section start--------*/}
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={'Gallery'}/>
        <h2 className='gallery__title'>Visit our customer tour gallery</h2>
      </Col>
      <Col lg='12'>
        <MasonryImagesGallery/>
      </Col>
    </Row>
  </Container>
</section>

  {/*--------gallery section end--------*/}

  {/*--------testimonial section start--------*/}

  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'fans Love'} />
          <h2 className='testimoial__title'>What our fans say about us</h2>
        </Col>
        <Col lg='12'>
          <Testimoials/>
        </Col>
      </Row>
    </Container>
  </section>
  {/*--------testimonial section end--------*/}
<Newsletter/>
  </>
}

export default Home