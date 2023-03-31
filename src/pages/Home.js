import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import { removeUser, toggle } from '../features/userSlice';
import {
  // Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Home = () => {

  const { userInfo: user } = useSelector((state) => state.data);

  const { isOpen } = useSelector((state) => state.data);
  console.log(isOpen);

  const dispatch = useDispatch();
  const nav = useNavigate();

  const handleOpen = () => {
    dispatch(toggle());
  }

  return (
    <>

      <div className='p-10 grid grid-cols-4'>
        {user.map((u, i) => {
          return <div key={u.id}>

            <img src={u.imageUrl} alt="userImage" />
            <h1>{u.username}</h1>
            <h2>{u.email}</h2>
            <p>{u.gender}</p>
            <p>{u.msg}</p>
            <p>{u.country}</p>


            <h1>Skills</h1>
            <ul className='flex space-x-5'>
              {u.program.map((p) => {
                return <li key={p}>
                  <h1>{p}</h1>
                </li>
              })}
            </ul>


            <div className='flex justify-end space-x-5'>

              <button onClick={() => {
                nav('/update', {
                  state: u
                });
              }}><i className="fa-solid fa-pen-to-square fa-2xl"></i></button>

              <button onClick={handleOpen}
                className='text-orange-900'>
                <i className="fa-solid fa-trash fa-2xl"></i>
              </button>


              <Dialog open={isOpen} handler={handleOpen}>
                <DialogHeader>Hold on a sec</DialogHeader>
                <DialogBody divider>
                  Are you sure you want to remove this.
                </DialogBody>
                <DialogFooter>
                  <div className='space-x-5'>

                    <button onClick={() => handleOpen()}>Cancel</button>
                    <button onClick={() => {
                      dispatch(removeUser(i));
                    }}>Confirm</button>

                  </div>




                  {/* <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1"
                  >
                    <span>Cancel</span>
                  </Button>
                  <Button variant="gradient" color="green" onClick={() => {
                    dispatch(removeUser(i));
                    handleOpen();
                  }}>
                    <span>Confirm</span>
                  </Button> */}
                </DialogFooter>
              </Dialog>

            </div>

          </div>
        })}
      </div>
    </>
  )
}

export default Home
