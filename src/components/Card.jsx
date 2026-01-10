const Card=(props)=>{
    return(
        
  <div style={{backgroundColor:props.bgColor}}className=" px-5 py-5 flex-grow  rounded-md">
  <h1 className="text-2xl font-bold ">{props.title}</h1>
  <p>{props.subtitle}</p>
  </div>
    )
}
export default Card