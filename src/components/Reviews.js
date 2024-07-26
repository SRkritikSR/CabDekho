import React from 'react'
import { fakeReviews } from '../fakeApi'
const Reviews = () => {
    return (
        <>

            <section id="reviews" class="reviews">
                <div class="section-header">
                    <h2>ryder reviews</h2>
                    <p>How did our ryder enjoyed the journey</p>
                </div>
                <div class="reviews-content">
                    <div class="testimonial-carousel" style={{ display: "flex" }}>
                        {fakeReviews != [] ?
                            fakeReviews.map((reviews, index) => {
                                return (
                                    <div class="single-testimonial-box" >
                                        <div class="testimonial-description">
                                            <div class="testimonial-info">
                                                <div class="testimonial-img">
                                                    <img src={reviews.personImage} alt="clients" />
                                                </div>
                                                <div class="testimonial-person">
                                                    <h2>{reviews.name}</h2>
                                                    <h4>{reviews.location}</h4>
                                                    <div class="testimonial-person-star">
                                                        {[...Array(reviews.ratings)].map((_, i) => {
                                                            return (<i class="fa fa-star"></i>)
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="testimonial-comment">
                                                <p>{reviews.comments}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : <p>Customers on their way</p>}
                    </div>
                </div>

            </section>
        </>
    )
}

export default Reviews