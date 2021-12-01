import React from 'react';
import Aboutus from './Aboutus';
import BouncerCard from './BouncerCard';
import ContactUs from './ContactUs';
import Error404 from './Error404';
import PrimaryNav from './PrimaryNav';
import Privacy from './Privacy';
import ProfileCard from './ProfileCard';
import TermsAndConditions from './TermsAndConditions';

function App() {
  return (
    <div className="App">
      <ProfileCard></ProfileCard>
      <BouncerCard></BouncerCard>
      <PrimaryNav></PrimaryNav>
      <Aboutus></Aboutus>
      <Privacy></Privacy>
      <TermsAndConditions></TermsAndConditions>
      <ContactUs></ContactUs>
      <Error404></Error404>
    </div>
  );
}

export default App;
