function PoemLine(props){
    const lines = props.lines;
    const lineElements = lines.map((line, index) => {
        console.log(line);
        return <p key={index}>{line}</p>
    });
    return(<div>
        {lineElements}
    </div>)
};

export default PoemLine;