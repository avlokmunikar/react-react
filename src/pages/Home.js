import React, { useState } from 'react'
import DataShow from '../component/DataShow';
import { data } from '../dummy/data'

const Home = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([
    {
      "id": 1,
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "id": 2,
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    }]);

  const increment = () => {
    setCount(count + 1);
  }


  const removeComment = (id) => {
    const newData = data.filter((d) => d.id !== id);
    setData(newData);
  }

  return (
    <div>
      <h1 className='m-2 text-2xl'>{count}</h1>

      <button
        onClick={() => increment()}
        className='shadow-2xl bg-slate-500 p-2'>Increment This Number</button>
      <DataShow comment={data} remove={removeComment} />
    </div>
  )
}




export default Home
