import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
const Details = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  async function deleteWorkout(){
    const response = await fetch('https://backend322.up.railway.app/api/username/' +workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Number of reps: </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
        <button onClick={deleteWorkout}>Delete</button>
      </div>
    )
  }
  
  export default Details