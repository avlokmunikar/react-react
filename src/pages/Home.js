// //import React, { useMemo, useState } from 'react'

// const Home = () => {

//   const [count, setCount] = useState(0);
//   const [minus, setMinus] = useState(100);

//   const multiply = useMemo(() => {
//     console.log('3434');
//     return count * 3;
//   }, [count]);



//   return (


//     <div>
//       <h1>first {count} step</h1>
//       <button onClick={() => {
//         setCount(count + 1);
//       }}>IncreFirstCount</button>

//       <h2>{multiply}</h2>

//       <h1>second {minus} step</h1>
//       <button onClick={() => {
//         setMinus(minus - 1);
//       }}>decreFirstCount</button>
//     </div>


//   )
// }

// export default Home

import React from 'react'
import Display from './MainPage/Display'
import Tech from './MainPage/Tech'

const Home = () => {
  return (
    <div>

      <Display />
      <Tech />
    </div>
  )
}

export default Home

