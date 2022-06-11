import {useParams} from 'react-router-dom'
import PropTypes from 'prop-types';

export default function ReviewList(props) {
  const {id} = useParams()
  const activityReview = filterCatagory(props.review, id)
  function filterCatagory (arr,query){
    return arr.filter(function(el){
        return el.activityId.toLowerCase().includes(query) 
    })
  }

  if (!props.review||activityReview.length ===0){
    return <p>No reviews yet</p>
  }
  return (
  <div>
      <h1>review list goes here</h1>
      {activityReview.map(review =>(
        <div key={review.id}>
      <div>{review.rating}</div>
      <button onClick={() => props.deleteReview(review.id)} className="close">
      </button>
      <div className="text-display">{review.text}</div>

          </div>
      ))}
  </div>
  )
}

ReviewList.propTypes = {
  review: PropTypes.arrayOf(
  PropTypes.shape({
  email: PropTypes.string,
  id: PropTypes.string,
  activityId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
   })
  )
};