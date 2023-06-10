import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TextAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Designer',
        1000,
        'developer',
        1000,
        'Video Editor',
        1000,     
      ]}
      wrapper="span"
      speed={250}
      cursor={true}
      repeat={Infinity}
    />
  )
}

export default TextAnimation