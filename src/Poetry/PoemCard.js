import PoemLine from './PoemLine';
function PoemCard(props){
    
    console.log(props.poem);

    return(<div>
        <h1>{props.title}</h1>
        <PoemLine lines={props.poem}/>
        <p>{props.author}</p>
    </div>);
};

export default PoemCard;