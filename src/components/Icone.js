import '../styles/Icone.css'

function Icone(props) {

    return (
        <div className='icone_bloc'>
            <img src={props.img} alt="icone" />
        </div>
    )
}

export default Icone