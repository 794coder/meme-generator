/* eslint-disable react/prop-types */

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return (
        <button 
            style={styles}
            onClick={props.hold}
            aria-label={`Die with value ${props.value}, ${props.isHeld ? "Held" : "not held"}`}
        >{props.value}</button>
    )
}


