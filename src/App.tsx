import React from 'react';
import Aboutus from './Aboutus';
import BouncerCard from './BouncerCard';
import OwnerForm from './OwnerForm';
import PrimaryNav from './PrimaryNav';
import Privacy from './Privacy';
import ProfileCard from './ProfileCard';

function App() {
  return (
    <div className="App">
      <ProfileCard></ProfileCard>
      <BouncerCard></BouncerCard>
      <PrimaryNav></PrimaryNav>
      <OwnerForm></OwnerForm>
      <Aboutus></Aboutus>
      <Privacy></Privacy>
    </div>
  );
}

export default App;
