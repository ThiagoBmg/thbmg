import React from 'react';

import { CareerCard,
  Arrow, 
  TechnologiesCard, 
  Section, 
  SectionB, 
  Navbar, 
  History, 
  Fotter} from './components'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section/>
      <Arrow/>
      <History/>
      <SectionB/>
      <TechnologiesCard/>
      <CareerCard/>
      <Fotter/>
    </div>
  );
}

export default App;
