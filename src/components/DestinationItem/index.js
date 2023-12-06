const DestinationItem = props => {
  const {itemDetails} = props
  const {imgUrl, name} = itemDetails
  return (
    <li className="list-card">
      <img src={imgUrl} className="img-container" alt={name} />
      <p className="card-name">{name}</p>
    </li>
  )
}

export default DestinationItem
