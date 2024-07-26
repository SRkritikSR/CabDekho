import React, { useEffect, useState } from 'react'

const History = () => {
    const [history, setHistory] = useState([])
    useEffect(() => {
        const savedHistory = JSON.parse(localStorage.getItem('history')) || []
        setHistory(savedHistory)
    }, [])
    console.log("History is given by", history)
    
    return (
        <>
            <section id="blog" class="blog" >
                <div class="container">
                    <div class="section-header">
                        <h2>Your Searches until now</h2>
                        {history==[] && <h4>No History yet, Let the journey begin!</h4>}
                    </div>
                    <div class="blog-content">
                        <div class="row">
                            {history!=[] && history.map((searches, index) => {
                                return (

                                <div class="col-md-4 col-sm-6">
                                <div class="single-blog-item">
                                    <div class="single-blog-item-img">
                                        <img src="assets/images/blog/b1.jpg" alt="blog image" />
                                    </div>
                                    <div class="single-blog-item-txt">
                                        <h2><a href="#" style={{color: "#fb9403"}}>{searches.from}--{searches.to}</a></h2>
                                        <p>{searches.phoneNum}</p>
                                        <p><a href="#" style={{color: "#fb9403"}}>{searches.mode} Trip |</a><label>Searched On</label>{new Date().toLocaleDateString()}</p>
                                        <p>
                                            <label class="form-labe">Cab-Type</label>
                                            Toyota Innova
                                        </p>
                                    </div>
                                </div>
                            </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default History