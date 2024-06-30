import '../styles/Icone.css'

function Icone(props) {

    return (
        <div className='icone_bloc' style={{
            backgroundColor: props.background
        }}>
            <img src={props.img} alt="icone" />
        </div>
    )
}

export default Icone