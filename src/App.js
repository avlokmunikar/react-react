// // Reference types(object, array, function )
// import React from 'react'
// // object
// const App = () => {
//   let x = 20;
//   let y = x;

//   y = 100;

//   console.log(x);

//   let info = {
//     name: "Avlok",
//     age: 24
//   }
//   let info1 = info;
//   info1.age = 14;
//   info1.name = 'boss';
//   console.log(info);




//    let x = 20;
//    let y = x;
//    x = 90;
//    console.log(y);


//   const person = {
//     name: 'Avlok',
//     age: 90,
//     job: 'Developer'

//   };
//   // array
//   const numbers = [11, 22, 33, 44];
//   // function call
//   const greetPerson = () => {
//     console.log('hello avlok');
//   }
//   greetPerson();

//   return (
//     <div>
//       <h1></h1>
//     </div>
//   )
// }

// export default App
// // arithmetic operator and comparison operator
// import React from 'react'

// const App = () => {
//   const a = 90;
//   const b = 100;

//   let d = 90;
//   let c = 90;
//   console.log(d !== c)
//   console.log(d === c)

//   console.log(a + b);
//   console.log(a - b);
//   console.log(a * b);
//   console.log(a / b);
//   console.log(a % b);


//   console.log(a > b);
//   console.log(a < b);
//   console.log(a >= b);
//   console.log(a <= b);
//   console.log(a != b);
//   console.log(a == b);

//   let x = 100;
//   x -= 90;
//    x++;
//   console.log(x)

//   return (
//     <div>

//     </div>
//   )
// }

// export default App

// // logical operator
// import React from 'react'

// const App = () => {

//   const a = 90;
//   const b = 100;

//   // console.log(a > b || a < b || a == b);
//   // console.log(a < b && a == b);

//   // const isMore = a > b ? 'lio' :
//   //   a == 90 ? 'dio' : 'lio';
//   // console.log(isMore);

//   if (a > 80) {
//     return <h1>Hello World</h1>
//   } else {
//     return <h1>Hello Nepal</h1>
//   }


//   return (
//     <div>
//       <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta labore, maiores voluptas non sed quo eius libero iure. Adipisci, rerum?</h1>
//     </div>
//   )
// }

// export default App

// //if else while for operation 
// import React from 'react'

// const App = () => {
// let someText;
// const age = 20;

// if (age < 20) {
//   someText = 'you are junior';
// } else if (age > 50) {
//   someText = 'you are senior';
// } else {
//   someText = 'you are regular';
// }
// console.log(someText);

// let age = 1;

// while (age < 20) {
//   age++;
//   console.log(age);

// for (let a = 2; a < 20; a++) {
//   if (a == 3) {
//     console.log('hello');
//     continue;
//   }
//   console.log(a);
// }

//   const pos = 2;

//   switch (pos) {
//     case 1:
//       console.log('i got');
//       break;

//     case 2:
//       console.log('anything');

//       break;
//     case 3:
//       console.log('something');

//       break;
//     default:
//       console.log('my duty');
//   }


//   return (
//     <div>

//     </div>
//   )
// }

// export default App


// //(for in) (for of)
// import React from 'react'

// const App = () => {

// const calcType = 'plus';
// const a = 20;
// const b = 40;
// console.log(a + b);
// const numbers = [11, 22, 33, 44, 55];
// for (let m in numbers) {
//   console.log(m);
// }
// let total = 0;
// for (let m of numbers) {
//   total = total + m;
// if (m % 2 == 0) {
//   console.log(`even ${m}`);
// } else {
//   console.log(`odd ${m}`);
// }
//   }
//   return (
//     <div>
//     </div>
//   )
// }

// export default App



// //function void function return function function with argument

// import React from 'react'

// const App = () => {

//   const greet = (perName, perAge) => {
//     console.log(perName);
//     alert(`hello ${perName} he is ${perAge}`);
//   }
//   const something = () => {
//     return 'hello whats up';
//   }
//   const s = something();
//   console.log(s);



//   return (
//     <div>
//       <button
//         onClick={() => greet('hari', 56)}
//         onKeyDown={() => greet()}
//         className="bg-slate-400 rounded-lg px-2 py-1 m-2 hover:text-purple-500">Greet user</button>
//     </div>
//   )
// }

// export default App


//array push pop shift unshift slice splice 
// import React from 'react'

// const App = () => {

//   const numbers = [11, 22, 33, 44, 55];
//   numbers[1] = 77
// numbers.push(80);
// numbers.pop();
// numbers.shift();
// numbers.unshift(30);
// const n = numbers.slice(0, 3);
// numbers.splice(1, 3);
// console.log(numbers);


// console.log(numbers);

// let total = 0;
// for (let n of numbers) {
//   total = total + n;
// }
//   return (

//     < div >

//       <button
//         className="bg-slate-400 rounded-lg px-2 py-1 m-2 hover:text-purple-500">Greet user</button>
//     </div >
//   )
// }

// export default App


//array for-each,filter,find,reduce,map
// import React from 'react'

// const App = () => {
// const persons = ['ram', 'hari', 'shyam'];
// const numbers = [11, 22, 33, 44];
// persons.sort();
// numbers.reverse();
// console.log(numbers);
// console.log(persons);

// let total = 0;
// numbers.forEach((n) => {
//   total = total + n;
// })
// console.log(total);

//   const newNum = numbers.map((n, i) => {
//     return ` position ${i} ${n * 2}`;
//   })
//   console.log(newNum);

//   return (
//     <div>
//       App
//     </div>
//   )
// }

// export default App


// //object 
// import React from 'react'

// const App = () => {

//   const posts = [
//     {
//       "id": 1,
//       "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     },
//     {
//       "id": 2,
//       "title": "qui est esse"
//     },
//     {
//       "id": 3,
//       "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",

//     },
//   ];


//   return (
//     <div>

//       {posts.map((post, id) => {
//         return <div key={id}>
//           <h1>{post.title}</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, officia repellendus. Ipsam aut suscipit eos dignissimos accusantium, soluta iure deserunt hic quos repellendus, odio voluptas eum recusandae incidunt, in autem voluptates perspiciatis ex. Voluptatem dolor excepturi quidem mollitia quos in, quasi, inventore perferendis quia saepe veritatis aperiam, dolorum quaerat neque.</p>
//         </div>
//       })}

//     </div>
//   )
// }

// export default App


// //array using find, Filter
// import React from 'react'

// const App = () => {

//   const numbers = [22, 56, 76, 23];
//   const n = numbers.find((m) => {
//     return m == 0;
//   });

//   const a = numbers.filter((m) => {
//     return m > 50;
//   });
//   console.log(a);
//   console.log(n);
//   return (
//     <div>

//     </div>
//   )
// }

// export default App


// //array using reduce
// import React from 'react'

// const App = () => {
//   const numbers = [32, 43, 54, 76];
//   const a = numbers.reduce((prev, next) => {
//     return prev + next;

//   })
//   console.log(a);
//   return (
//     <div>

//     </div>
//   )
// }

// export default App


// //array destructing
// import React from 'react'

// const App = () => {

//   const carModel = ['benz', 'thar', 'bmw', 'kia'];
//   const [t, b, m, k] = carModel;
//   return (
//     <div>
//       <h1>{b}</h1>
//       <h2>{t}</h2>
//       <h3>{m}</h3>
//       <h4>{k}</h4>
//     </div>
//   )
// }

// export default App


// //creating object literal
// import React from 'react'

// const App = () => {


//   const person = {
//     blogs: {
//       title: 'hello'
//     }
//   };
// const person = {
//   name: 'avlok',
//   age: 24,
//   address: 'swoyambhu',
//   hobby: ['singing', 'riding'],
//   sleep: () => {
//     console.log('sleeping');
//   }
// };
//   const m = null;

//   return (
//     <div>
//       <h1>{person.blogs?.title}</h1>
//       <h1>{m ?? 'wow'}</h1>
//     </div>
//   )
// }

// export default App

// //this keyword in array
// import React from 'react'

// const App = () => {



//   let data = [
//     { title: 'hello world' }
//   ];

//   return (
//     <div>

//       {data && data.map((d, i) => {
//         return <h1 key={i}>{d.title.li?.pi}</h1>
//       })}


//     </div>
//   )
// }

// export default App

// //function call
// import React from 'react'


// const m = 190;

// const App = () => {


//   const m = 90;
//   const some = () => {
//     const m = 100;
//     console.log(m);
//   }

//   console.log(m);



//   some();


//   return (
//     <div>


//     </div>
//   )
// }

// export default App

// // random , floor , round
// import React from 'react'



// const App = () => {

//   const car = {
//     name: 'rolls royce',
//     color: 'silver',
//     type: '4 wheel',
//     speed: '140km/hr',
//     colors: [
//       'white',
//       'blue',
//       'green'
//     ]
//   };

//   const nums = 565.65656;

//   const random = Math.random() * 5 + 1;
//   const ran = Math.floor(random);
//   console.log(ran);
//   console.log(Math.round(nums));
//   const { name: carName, color, type, speed, colors: [w, b] } = car;
//   // const [w] = colors;

//   return (
//     <div>
//       {carName}

//       <p>{type}</p>
//       <p>{speed}</p>
//       <p>{`${b} ${w}`}</p>
//     </div>
//   )
// }

// export default App

// // date time , nested collection
// import React from 'react'




// const App = () => {

// const pers = Object();
// const date = new Date();
// pers.name = 'avok';
// console.log(pers);
// console.log(date.toLocaleDateString());

//nested collection 
//   const movies = [
//     {
//       title: 'spider',
//       duration: '3 hours',
//       release: '2022',
//       image: 'https://images.unsplash.com/photo-1608889476501-ea8c0f0b8d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhdG1hbiUyMG1vdmllc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
//     },
//     {
//       title: 'batman',
//       duration: '2.5 hours',
//       release: '2021',
//       image: 'https://images.unsplash.com/photo-1531259683007-016a7b628fc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
//     },
//     {
//       title: 'superman',
//       duration: '2.2 hours',
//       release: '2023',
//       image: 'https://images.unsplash.com/photo-1594344041337-0223bd103abe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
//     }
//   ];
//   return (
//     <div className='grid grid-cols-4 gap-3 p-5 rounded sm:grid-cols-1'>
//       {movies.map((m, i) => {
//         return <div key={i} className='space-y-5'>
//           <h1>{m.title}</h1>
//           <img src={m.image} alt="" />
//           <p>{m.release}</p>
//         </div>

//       })}


//     </div>
//   )
// }

// export default App


// //date and time
// import React, { useState } from 'react'
// import { Route, Routes } from 'react-router'
// import Home from './pages/Home'


// const App = () => {

//   const [date, setDate] = useState(new Date());


//   setInterval(() => {
//     setDate(new Date());
//   }, 1);
//   return (
//     <>
//       <h1>{date.getHours()} :{date.getMinutes()} :{date.getSeconds()}
//       </h1>


//       <Routes>
//         <Route path='/' element={<Home />} />

//       </Routes>
//     </>
//   )
// }

// export default App



// //import React, { useEffect, useState } from 'react'

// const App = () => {

//   const [val, setVal] = useState(null);

//   const a = setTimeout(() => {
//     setVal({
//       title: 'avatar'
//     });
//   }, 5000);

//   useEffect(() => {
//     console.log('run me')
//     if (val !== null) {
//       clearTimeout(a);
//     }

//   }, [val]);

//   return (


//     <div>
//       {/* {val && <h1>{val.title}</h1>} */}
//       <h1> {val?.title}</h1>
//     </div>
//   )
// }

// export default App

// //asynchronous
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const App = () => {

  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoad, setLoad] = useState(false);
  const getData = async () => {

    try {
      setLoad(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setLoad(false);
      setData(response.data);
    } catch (err) {
      setLoad(false);
      setErr(err.message)
    }

  }


  useEffect(() => {
    getData();
  }, []);
  console.log(isLoad);

  if (isLoad) {
    return <h1>Loading....</h1>
  }

  if (err) {
    return <h1>{err}</h1>
  }
  console.log(data);

  return (
    <div>
      {data && data.map((d) => {
        return <div key={d.id} className='shadow-2xl my-5'>
          <h1>{d.email}</h1>
          <h1>{d.name}</h1>
          <p>{d.phone}</p>
          <p>{d.address.city}</p>
        </div>

      })}

    </div>
  )
}

export default App











