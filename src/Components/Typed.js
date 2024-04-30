import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Blockchain Developer', 'Smart Contract Developer', 'Web3 Integration ', 'MERN Stack Developer'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:20,
        }}
      />
    </div>
  )
}

export default Typed
