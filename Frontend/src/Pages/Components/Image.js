export const Image = (props) => {
    return(
        <img className="Image" src={props.src} alt={props.alt} style={{height: props.height, width: props.width}}></img>
    );
}