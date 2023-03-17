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

const Home = () => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem earum, dicta quaerat aliquid ea accusamus, at placeat voluptas debitis nam recusandae numquam ullam molestiae non nisi eum, temporibus ad deserunt nulla sapiente similique possimus quis modi cupiditate. Magni autem error iste atque quo. Maxime minima quia sequi similique odit, illo modi repellat deleniti officiis porro provident sed rerum saepe. Rem placeat amet eligendi in inventore soluta corporis iure unde obcaecati dolorum, necessitatibus doloremque reiciendis et tenetur eos officiis quo pariatur!</p>
    </div>
  )
}

export default Home

