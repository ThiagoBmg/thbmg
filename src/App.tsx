import React from 'react';

/* import {changeArrowTheme} from './components/Arrow/theme'
 */

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
      <TechnologiesCard/>
      <SectionB/>
      <CareerCard/>
      <History/>
      <Fotter/>
     {/*  {changeArrowTheme()} */}
    </div>
  );
}

export default App;
