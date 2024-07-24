import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SearchForm = () => {
  const navigate=useNavigate()
  const [mode,setMode]=useState("one-way")
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    phoneNum: '',
  });

  const [errors, setErrors] = useState({
    from: '',
    to: '',
    phoneNum: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateForm = () => {
    const newErrors = {
      from: '',
      to: '',
      phoneNum: '',
    };
    let isValid = true;

    // Validation logic
    if (!formData.from) {
      newErrors.from = 'From field is required';
      isValid = false;
    }
    if (!formData.to) {
      newErrors.to = 'To field is required';
      isValid = false;
    }
    if (!formData.phoneNum) {
      newErrors.phoneNum = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneNum)) {
      newErrors.phoneNum = 'Phone number must be 10 digits';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  const saveHistory = (entry) => {
    const existingHistory = JSON.parse(localStorage.getItem('history')) || [];
    existingHistory.push(entry);
    localStorage.setItem('history', JSON.stringify(existingHistory));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      const finalData={...formData,mode:mode}
      saveHistory(formData)
      navigate('/resultPage')
      
      // Here you can handle form submission (e.g., send data to server)
    }
    // Reset all states
    setFormData({
      from: '',
      to: '',
      phoneNum: '',
    });

  };

  return (
    <>
      {/* Search Box Starts */}

      <section id="home" class="welcome-hero" style={{height: "75vh"}}>
        <div class="container">
          <div class="welcome-hero-txt">
            <h2>Cab<span style={{color: "#fb9403"}}>Dekho</span> <br /></h2>
            <p style={{color:"white",textTransform: 'uppercase'}}>
              {mode} <span style={{color: "#fb9403"}}>Trip</span>
            </p>
          </div>

          <div class="welcome-hero-form" style={{ flexBasis: "50%", flexWrap: 'wrap' }}>
            <div class="single-welcome-hero-form">
              <h3>From</h3>
              <input name="from" value={formData.from} type="text" placeholder="Ex: Delhi, Mumbai, Kolkota" onChange={handleChange}/>
              {errors.from && <p style={{color:"darkgreen"}}>{errors.from}</p>}
              <div class="welcome-hero-form-icon">
                <i class="flaticon-list-with-dots"></i>
              </div>    
            </div>
            <div class="single-welcome-hero-form">
              <h3>To</h3>
              <input name="to" value={formData.to} type="text" placeholder="Ex: Kolkota, Mumbai, Delhi" onChange={handleChange}/>
              {errors.to && <p style={{color:"darkgreen"}}>{errors.to}</p>}
              <div class="welcome-hero-form-icon">
                <i class="fa fa-location-pin"></i>
              </div>
            </div>
            <div class="single-welcome-hero-form" style={{ backgroundColor: "white", justifySelf: "center" }}>
              <h3>Phone Num</h3>
              <input  name="phoneNum" value={formData.phoneNum} type="tel" placeholder="Enter Phone Number" autoComplete="on" required={true} onChange={handleChange}/>
              {errors.phoneNum && <p style={{color:"darkgreen"}}>{errors.phoneNum}</p>}
              <div class="welcome-hero-form-icon">
                <i class="fa fa-location-pin">icon</i>
              </div>
            </div>

            <button class="welcome-hero-btn" style={{ display: 'flex', textDecoration: 'none' }} onClick={handleSubmit}>Search</button> <i data-feather="search"></i>


          </div>


        </div>

      </section>
      {/* Search Box Ends */}
      {/* Selectin List Starts */}
      <section id="list-topics" class="list-topics">
        <div class="container">
          <div class="list-topics-content" style={{ display: 'flex', justifyContent: 'center'}} >
            <ul>
              <li>
                <div class="single-list-topics-content">
                  <div class="single-list-topics-icon">
                    <i class="flaticon-restaurant"></i>
                  </div>
                  <h2><a href="#" style={{ color: "red" }} onClick={()=> setMode("one-way")}>One Way Trip</a></h2>
                  <p>At a momemnt's notice</p>
                </div>
              </li>
              <li>
                <div class="single-list-topics-content">
                  <div class="single-list-topics-icon">
                    <i class="flaticon-travel"></i>
                  </div>
                  <h2><a href="#" style={{ color: "red" }} onClick={()=> setMode("round-trip")}>Round Trip</a></h2>
                  <p>Comfortable and Affordable</p>
                </div>
              </li>
              <li>
                <div class="single-list-topics-content">
                  <div class="single-list-topics-icon">
                    <i class="flaticon-building"></i>
                  </div>
                  <h2><a href="#" style={{ color: "red" }} onClick={()=> setMode("pick-up/drop at airport")}>Pick-Up/Drop at Airport</a></h2>
                  <p>We are Right on Time</p>
                </div>
              </li>
              <li>
                <div class="single-list-topics-content">
                  <div class="single-list-topics-icon">
                    <i class="flaticon-pills"></i>
                  </div>
                  <h2><a href="#" style={{ color: "red" }} onClick={()=> setMode("outstation")}>Outstation</a></h2>
                  <p>Fixed Rates</p>
                </div>
              </li>
              {/* <li>
            <div class="single-list-topics-content">
              <div class="single-list-topics-icon">
                <i class="flaticon-transport"></i>
              </div>
              <h2><a href="#"></a></h2>
              <p>120 listings</p>
            </div>
          </li> */}
            </ul>
          </div>
        </div>

      </section>
      {/* Selection List Ends */}


    </>
  )
}

export default SearchForm