// Import necessary libraries
import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

// Define styled components
const BannerArea = styled.section`
  .banner_area {
    display:flex;
    position: relative;
    height: 100vh;
    background: url('https://www.shutterstock.com/image-photo/yellow-taxi-manhattan-new-york-city-1922578547') no-repeat center center/cover;
  }
`;

const BookingTable = styled.div`
  display: flex;
  flex:1;
  height: 100%;
  border: 2px solid blue;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);  
  border: 2px solid red;
`;

const Container = styled.div`

  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto; 
  border: 2px solid green;
`;

const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;


  h6 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  h2 {
    font-size: 48px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    margin-bottom: 30px;
  }

  .btn {
    padding: 10px 30px;
    background: #f5a623;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

const HotelBookingArea = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #fff;
  border: 4px solid black;
  padding: 30px 0;
`;

const HotelBookingTable = styled.div`
  display: flex;
  align-items: center;
`;

const BookTableItem = styled.div`
  margin: 1rem 0;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .input-group-addon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .fa-calendar {
    font-size: 16px;
  }
`;

const BookNowButton = styled.a`
  display: inline-block;
  padding: 10px 30px;
  background: #f5a623;
  color: #fff;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
`;

const selectStyles = {
  control: (styles) => ({
    ...styles,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: 'none',
  }),
};

const options = [
  { value: '1', label: 'Old' },
  { value: '2', label: 'Younger' },
  { value: '3', label: 'Potato' }
];

const childOptions = [
  { value: '1', label: 'Child' },
  { value: '2', label: 'Baby' },
  { value: '3', label: 'Child' }
];

const roomOptions = [
  { value: '1', label: 'Room 01' },
  { value: '2', label: 'Room 02' },
  { value: '3', label: 'Room 03' }
];

const HotelBanner = () => {
  const [arrivalDate, setArrivalDate] = React.useState(null);
  const [departureDate, setDepartureDate] = React.useState(null);

  return (
    <BannerArea>
      <div className="banner_area">
        <BookingTable>
          <Overlay />
          <Container>
            <BannerContent>
              <h6>Away from monotonous life</h6>
              <h2>Relax Your Mind</h2>
              <p>If you are looking at blank cassettes on the web, you may be very confused at the<br /> difference in price. You may see some for as low as $.17 each.</p>
              <a href="#" className="btn theme_btn button_hover">Get Started</a>
            </BannerContent>
          </Container>
        </BookingTable>
        <HotelBookingArea>
          <Container>
            <HotelBookingTable>
              <div>
                <h2>Book<br /> Your Room</h2>
              </div>
              <div>
                <div className="boking_table">
                  <div className="row">
                    <div className="col-md-4">
                      <BookTableItem>
                        <FormGroup>
                          <DatePicker
                            selected={arrivalDate}
                            onChange={(date) => setArrivalDate(date)}
                            placeholderText="Arrival Date"
                            className="form-control"
                          />
                          <span className="input-group-addon">
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                          </span>
                        </FormGroup>
                        <FormGroup>
                          <DatePicker
                            selected={departureDate}
                            onChange={(date) => setDepartureDate(date)}
                            placeholderText="Departure Date"
                            className="form-control"
                          />
                          <span className="input-group-addon">
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                          </span>
                        </FormGroup>
                      </BookTableItem>
                    </div>
                    <div className="col-md-4">
                      <BookTableItem>
                        <Select options={options} placeholder="Adult" styles={selectStyles} />
                        <Select options={childOptions} placeholder="Child" styles={selectStyles} />
                      </BookTableItem>
                    </div>
                    <div className="col-md-4">
                      <BookTableItem>
                        <Select options={roomOptions} placeholder="Number of Rooms" styles={selectStyles} />
                        <BookNowButton href="#">Book Now</BookNowButton>
                      </BookTableItem>
                    </div>
                  </div>
                </div>
              </div>
            </HotelBookingTable>
          </Container>
        </HotelBookingArea>
      </div>
    </BannerArea>
  );
};

export default HotelBanner;
