import '../styles/App.css'

import { Link } from 'react-router-dom'

import Navbar from "./Navbar"

function App() {
    return (
        <div>
            <Navbar />
            <div className="main_content_mainpage">
                <h1 className="main_title">Bienvenue sur <span>Sportsee</span></h1>
                <p>Veuillez choisir la méthode de récupération et les datas relatives à un de ces deux utilisateur :</p>
                <div className="choice_container">
                    <Link className='links_black' to="/user/12/mock"><button>USER 12 : MOCK Karl</button></Link>
                    <Link className='links_black' to="/user/12/api"><button>USER 12 : API Karl</button></Link>
                    <Link className='links_black' to="/user/18/mock"><button>USER 18 : MOCK Cécilia</button></Link>
                    <Link className='links_black' to="/user/18/api"><button>User 18 : API Cécilia</button></Link>
                </div>
            </div>
        </div>
    )
}

export default App