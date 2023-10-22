import { useState } from "react"
function StorySearchBar(props){
    const [input, setInput] = useState('');
    function inputChangeHandler(event){
        console.log(event.target.value);
        setInput(event.target.value);
        props.inputFilter(event.target.value);
    }
    


    return(<div>
        <input type='text' onChange={inputChangeHandler}></input>
    </div>)

}
export default StorySearchBar;