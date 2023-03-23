import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`${className} card-card`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <div className="img-cont">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem
