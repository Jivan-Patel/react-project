function UserCard(props) {
  console.log(props)
  return (
    <div class="card">

      <img src={props.props.picture.thumbnail} alt="User" />

      <h2>{props.props.name.title} {props.props.name.first}</h2>
      <p>{props.props.location.city}, {props.props.location.country}</p>
      <p>Age: {props.props.dob.age}</p>

      

    </div>
  )
}

export default UserCard
