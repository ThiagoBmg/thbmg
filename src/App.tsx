import React from 'react';

import { CareerCard,  TechnologiesCard,  Section, SectionB , Navbar, History} from './components'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section/>
      <div className="arrowSpacer">
        <img src="https://img.icons8.com/ios/100/000000/double-down.png"/>
      </div>
      <History/>
      <SectionB/>
      <TechnologiesCard/>
      <CareerCard/>
    </div>
  );
}

export default App;
