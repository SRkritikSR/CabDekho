import React from 'react';
import styled from 'styled-components';

const StripContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30px; /* Adjust the height as needed */
`;

const Block = styled.div`
  flex: 1;
  height: 100%;
  background-color: ${(props) => (props.isBlack ? 'black' : '#F6A704')};
`;

const CheckeredStrip = () => {
  return (
    <StripContainer>
      {[...Array(40)].map((_, index) => (
        <Block key={index} isBlack={index % 2 === 0} />
      ))}
    </StripContainer>
  );
};

export default CheckeredStrip;
