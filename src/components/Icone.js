import '../styles/Icone.css'

import nageur from '../assets/nageurs.png'

function Icone(props) {
    return (
        <div className='icone_bloc'>
            <img src={`src/assets/${props.url}`} alt="icone" />
        </div>
    )
}

export default Icone