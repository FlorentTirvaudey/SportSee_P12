import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
    return (
        <nav className="body_navbar">
            <div className="logo_navbar">
                <img src="https://user.oc-static.com/upload/2020/08/18/15977560509272_logo%20%285%29.png" alt="logo SportSee" />
            </div>
            <div className="content_navbar">
                <ul>
                    <li><Link className='links' to="/">Accueil</Link></li>
                    <li>Profil</li>
                    <li>Réglages</li>
                    <li>Communauté</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar