import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import '../styles/tour-details.css'

const TourDetails = () => {
  const { id } = useParams()

  // Static data; later we will call our API and load our data from database
  const tour = tourData.find(tour => tour.id === id)

  // Destructure properties from tour object
  const { photo, title, desc, price, reviews, city, distance, maxGroupSize } = tour

  return (
    <section className="py-16 bg-gray-100">
      <Container>
        <Row>
          <Col lg="8">
            <div className="tour__content p-6 bg-white rounded-lg shadow-lg">
              <img src={photo} alt={title} className="rounded-lg mb-6" />
              <div className="tour__info mb-6">
                <h2 className="text-3xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 mb-4">{desc}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-indigo-600 flex items-center">
                    <i className="fas fa-dollar-sign mr-1"></i>${price}
                  </span>
                  <span className="text-gray-500 flex items-center">
                    <i className="fas fa-map-marker-alt mr-1"></i>{distance} km
                  </span>
                  <span className="text-gray-500 flex items-center">
                    <i className="fas fa-users mr-1"></i>{maxGroupSize} people
                  </span>
                </div>
              </div>
              <div className="tour__reviews mb-6">
                <h3 className="text-2xl font-bold mb-4">Reviews</h3>
                <ListGroup>
                  {reviews.map((review, index) => (
                    <ListGroupItem key={index} className="border-0 p-0 mb-4">
                      <div className="flex items-center mb-2">
                        <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full mr-3" />
                        <div>
                          <h5 className="font-bold">{review.name}</h5>
                          <span className="text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
              <button className="button-book">Book Now</button>
            </div>
          </Col>
          <Col lg="4">
            <div className="tour__details p-6 bg-white rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">Tour Details</h3>
              <ListGroup>
                <ListGroupItem className="border-0 p-0 mb-2">
                  <strong className="text-gray-800 flex items-center">
                    <i className="fas fa-city mr-2"></i>City: 
                  </strong>
                  <span className="text-gray-600 ml-2">{city}</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 p-0 mb-2">
                  <strong className="text-gray-800 flex items-center">
                    <i className="fas fa-route mr-2"></i>Distance: 
                  </strong>
                  <span className="text-gray-600 ml-2">{distance} km</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 p-0 mb-2">
                  <strong className="text-gray-800 flex items-center">
                    <i className="fas fa-users mr-2"></i>Max Group Size: 
                  </strong>
                  <span className="text-gray-600 ml-2">{maxGroupSize} people</span>
                </ListGroupItem>
                <ListGroupItem className="border-0 p-0 mb-2">
                  <strong className="text-gray-800 flex items-center">
                    <i className="fas fa-dollar-sign mr-2"></i>Price: 
                  </strong>
                  <span className="text-gray-600 ml-2">${price}</span>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TourDetails