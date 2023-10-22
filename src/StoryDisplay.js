function StoryDisplay(props) {
    return(<div>
        <h1>{props.title}</h1>
        <p>{props.story}</p>
        <h3>{props.author}</h3>
    </div>)
}
export default StoryDisplay;