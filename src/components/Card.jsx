const Card=(props)=>{
    return(
        
  <div style={{backgroundColor:props.bgColor}} className="stat-card">
    <h2>{props.title}</h2>
    <p>{props.subtitle}</p>
  </div>
    )
}
export default Card
