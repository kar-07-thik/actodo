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

        <div className="task-item">
            <p><span className="task-number">{String(props.order + 1).padStart(2, "0")}</span>{props.activity}</p>
            <button className="delete-task" onClick={() => { delect(props.id) }}>Remove</button>
        </div>


    )
}
export default Todoitem
