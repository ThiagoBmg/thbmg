import React from 'react';

import { CareerCard,  TechnologiesCard,  Section, SectionB , Navbar, History , Fotter} from './components'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Section/>
      <div id="Home"  className="arrowSpacer">
        <img src="https://img.icons8.com/ios/100/000000/double-down.png"/>
      </div>
      <History/>
    {/*   <SectionB/> */}
      <SectionB/>
      <TechnologiesCard/>

      <CareerCard/>

      <Fotter/>
    </div>
  );
}

export default App;
