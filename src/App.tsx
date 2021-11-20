import React from 'react';
import AgentCard from './AgentCard';
import SecondaryNav from './SecondaryNav';
import WishlistCard from './WishlistCard';

function App() {
  return (
    <div>
      <AgentCard name="Utkarsh " designation="Full Stack Developer"></AgentCard>
      <SecondaryNav />
      <WishlistCard></WishlistCard>
    </div>
  );
}

export default App;
