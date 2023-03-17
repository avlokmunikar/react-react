import React, { useState } from 'react'

const Count = () => {
  const [count, setCount] = useState(0);

  const incre = () => {
    setCount(count + 1);
  }
  const decre = () => {
    setCount(count - 1);
  }


  return [count, incre, decre];

}

export default Count
