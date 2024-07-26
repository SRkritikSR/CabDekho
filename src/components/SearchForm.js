import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SearchForm = () => {
  const navigate = useNavigate()
  const [mode, setMode] = useState("one-way")
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
      const finalData = { ...formData, mode: mode }
      saveHistory(finalData)
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

      <section id="home" class="welcome-hero" style={{ height: "75vh", alignContent: "center" }}>
      <h1 style={{color: "#fb9403",fontWeight: "bold",textTransform: "uppercase"}}>{mode}</h1>
        <div class="container" style={{  }}>
          {/* <SearchForm/> */}
          <form>
{/* 
            <div class="row">
              <div class="col-sm-5">
                <div class="form-group">
                  <span class="form-label" style={{color: "#fb9403",fontWeight: "bold"}}>Pickup Date</span>
                  <input class="form-control" type="date" required="" />
                </div>
              </div>
              <div class="col-sm-7">
                <div clas="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                      <span class="form-label" style={{color: "#fb9403",fontWeight: "bold"}}>Hour</span>
                      <select class="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                      <span class="select-arrow"></span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <span class="form-label" style={{color: "#fb9403",fontWeight: "bold"}}>Min</span>
                      <select class="form-control">
                        <option>05</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                        <option>30</option>
                        <option>35</option>
                        <option>40</option>
                        <option>45</option>
                        <option>50</option>
                        <option>55</option>
                      </select>
                      <span class="select-arrow"></span>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <span class="form-label" style={{color: "#fb9403",fontWeight: "bold"}}  >AM/PM</span>
                      <select class="form-control">
                        <option>AM</option>
                        <option>PM</option>
                      </select>
                      <span class="select-arrow"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <span class="form-label" style={{color: "#fb9403",fontWeight: "bold"}}>From</span>
                  <input class="form-control" type="text"  name="from" value={formData.from} onChange={handleChange} placeholder="Where would you start" />
                  <div class="valid-feedback" style={{fontStyle: "italic", color: "yellow",}}>{errors.from && errors.from}</div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group">
                  <span class="form-label" style={{color: "#fb9403",fontWeight: "bold"}}>To</span>
                  <input class="form-control" type="text" placeholder="What will be the end" name="to" value={formData.to} onChange={handleChange} />
                  <div class="valid-feedback" style={{fontStyle: "italic", color: "yellow",}}>{errors.to && errors.to}</div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="form-group">
                  <span class="form-label" style={{color: "#fb9403",fontWeight: "bold"}}  >Phone</span>
                  <input class="form-control" type="tel" placeholder="Enter your phone number" name="phoneNum" value={formData.phoneNum} onChange={handleChange} />
                  <div class="valid-feedback" style={{fontStyle: "italic", color: "yellow",}}>{errors.phoneNum && errors.phoneNum}</div>  
                </div>
              </div>
            </div>
            <div class="form-btn">
              <button class="submit-btn btn-lg" style={{color: "#fb9403",fontWeight: "bold",border: "2px solid black",}} onClick={handleSubmit}>Book Now</button>
            </div>
          </form>
        </div>

      </section>
      {/* Search Box Ends */}
      {/* Selectin List Starts */}
      <section id="list-topics" class="list-topics" >
        <div class="container" style={{alignContent: "center"}}>
          <div class="list-topics-content" style={{ display: 'flex', justifyContent: 'center' }} >
            <ul>
              <li>
                <div class="single-list-topics-content">
                  <div class="single-list-topics-icon">
                    <i class="flaticon-restaurant"></i>
                  </div>
                  <h2><a href="#" style={{ color: "red" }} onClick={() => setMode("one-way")}>One Way Trip</a></h2>
                  <p>At a momemnt's notice</p>
                </div>
              </li>
              <li>
                <div class="single-list-topics-content">
                  <div class="single-list-topics-icon">
                    <i class="flaticon-travel"></i>
                  </div>
                  <h2><a href="#" style={{ color: "red" }} onClick={() => setMode("round-trip")}>Round Trip</a></h2>
                  <p>Comfortable and Affordable</p>
                </div>
              </li>
              <li>
                <div class="single-list-topics-content">
                  <div class="single-list-topics-icon">
                    <i class="flaticon-building"></i>
                  </div>
                  <h2><a href="#" style={{ color: "red" }} onClick={() => setMode("pick-up/drop at airport")}>Pick-Up/Drop at Airport</a></h2>
                  <p>We are Right on Time</p>
                </div>
              </li>
              <li>
                <div class="single-list-topics-content">
                  <div class="single-list-topics-icon">
                    <i class="flaticon-pills"></i>
                  </div>
                  <h2><a href="#" style={{ color: "red" }} onClick={() => setMode("outstation")}>Outstation</a></h2>
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