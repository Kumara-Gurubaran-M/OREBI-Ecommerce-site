import { Link } from 'react-router-dom'
import Navigation from './navigation'
import { logo } from "../../images/index"
function navbar() {
    return (
        <div className='nav'>
            <Link to="/"><img src={logo} alt="logo" /></Link>

            <Navigation />

        </div>
    )
}

export default navbar