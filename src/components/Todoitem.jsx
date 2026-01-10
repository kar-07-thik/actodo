const Todoitem = (props) => {
    const activityarr = props.actarr
    const setactivityarr = props.setactarr
    let delect = (delectid) => {
        let temparr = activityarr.filter(function (item) {
            if (item.id == delectid) {
                return false
            }
            else {
                return true
            }
           
        })
         setactivityarr(temparr)
    }
    return (

        <div className="flex justify-between">
            <p>{props.order + 1}.{props.activity}</p>
            <button className=" text-red-500" onClick={() => { delect(props.id) }}>Del</button>
        </div>


    )
}
export default Todoitem