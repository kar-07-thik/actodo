const Header=(props)=>{
    return(
        <header className="dashboard-header">
          <div>
            <p className="eyebrow">TUESDAY, 20 DECEMBER</p>
            <h1>Good morning, {props.username}.</h1>
            <p>Keep your attention on the next small step.</p>
          </div>
          <div className="avatar">{props.username?.slice(0, 1).toUpperCase()}</div>
        </header>
    )
}
export default Header
