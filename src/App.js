
// import Navbar from './components/Navbar';

import { NavbarHeader } from './components/Navbar';
import './App.css'
import Section1 from './page/Section1';
import Section2 from './page/Section2';
import Section3 from './page/Section3';
import Section4 from './page/Section4';
import Section5 from './page/Section5';
import Section6 from './page/Section6';
import Section7 from './page/Section7';
import Section8 from './page/Section8';
import Section9 from './page/Section9';
import Section10 from './page/Section';


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <aside className='page-wrapper cc-splash' aria-label='Introducing Phoenix'>
        <NavbarHeader />
        <div className='main-wrapper' id='ae-skip-to-content' tabIndex={1}>
          <Section1 />
          <Section2 />
          <Section3 />

          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
          <Section8 />
          <Section9 />
          <Section10 />
        </div>
      </aside>


      {/* <Route path="/" element={<Home />} />
          <Route path="/contact-sales" element={<ContectTosale />} />
          <Route path="/team" element={<Team />} /> */}



      {/* <Footer /> */}







    </>
  );
}

export default App;
