import React from 'react'
import HomeBanner from '../components/HomeBanner'
import CheckeredStrip from '../components/ChekeredStrip'
import SearchForm from '../components/SearchForm'
import Navbar from '../components/Navbar'
import History from '../components/History'
import Reviews from '../components/Reviews'
import Statistics from '../components/Statistics'
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <SearchForm />
            <div id="history">
                <History />
            </div>
            <div id="statistics">
                <Statistics />
            </div>
            <div id="reviews">
                <Reviews />
            </div>

        </>

    )
}

export default Home