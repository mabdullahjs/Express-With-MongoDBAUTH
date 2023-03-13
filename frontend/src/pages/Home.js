// import React, { useEffect, useState } from 'react'
// import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
// // import pakages
// import axios from 'axios'
// import Form from '../components/form';

// function Home() {
//   const { workouts, dispatch } = useWorkoutsContext()

//   // const [myData, setMyData] = useState([]);
//   const [isError, setIsError] = useState("");


//   useEffect(() => {
//     axios
//       .get("https://backend322.up.railway.app/api/username")
//       .then(async (response) => {
//         // setMyData(response.data);
//         dispatch({ type: 'SET_WORKOUTS', payload: response.data })
//         // console.log(myData);
//       })
//       .catch((error) => {
//         setIsError(error.message);
//       });
//   }, []);

//   return (
//     <div className='home'>
//       {workouts.map((item) => {
//         return <div key={item._id}>
//           <h1>{item.title}</h1>
//           <h2>{item.reps}</h2>
//           <h2>{item.load}</h2>
//         </div>
//       })}
//       <div><Form /></div>
//       <div>{isError}</div>
//     </div>
//   )
// }

// export default Home


import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import Details from "../components/details"
import Form from "../components/form"

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('https://backend322.up.railway.app/api/username')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <Details workout={workout} key={workout._id} />
        ))}
      </div>
      <Form />
    </div>
  )
}

export default Home