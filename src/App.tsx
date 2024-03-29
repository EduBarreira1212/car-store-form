import React from 'react';
import FormPage from './FormPage';
import styled from 'styled-components';

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
`;

function App() {
  return (
    <Div>
      <FormPage/>
    </Div>
  );
}

export default App;
