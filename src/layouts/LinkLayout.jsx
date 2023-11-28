import { Link, Outlet } from "react-router-dom"

const LinkLayout = () => {
    return(
        <div>
            <Link to={'/about'}>About</Link>
            <br />
            <Link to={'/'}>Home</Link>
            <Outlet/>
        </div>
    )
}

export default LinkLayout