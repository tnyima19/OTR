import {useState} from 'react';

function PostPoetryContainer(){
    const [poem, setPoem] = useState({});
    const [lines, setLines] = useState([]);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');

    function Submit(){
        setPoem((prev) =>{
            setPoem({
                title: title,
                lines: lines,
                author: author,
            })
        })
    }
    function changeLine(event){
        setLines((prev) => {
            setLines([...prev, event.target.value]);
        });
        console.log(lines)
    }
    function changeAuthor(event){
        setAuthor(event.target.value);

    }

    return(<div>
            <p>Title: <input></input></p>
            <p>Line1: <input onChange={changeLine}></input></p>
            <p>Line2: <input onChange={changeLine}></input></p>
            <p>Line3: <input onChange={changeLine}></input></p>
            <p>Line4: <input onChange={changeLine}></input></p>
            <p>Line5: <input onChange={changeLine}></input></p>
            <p>Line6: <input onChange={changeLine}></input></p>
            <p>Line7: <input onChange={changeLine}></input></p>
            <p>Line8: <input onChange={changeLine}></input></p>
            <p>Line9: <input onChange={changeLine}></input></p>
            <p>Line10: <input onChange={changeLine}></input></p>
            <p>Line11: <input onChange={changeLine}></input></p>
            <p>Line12: <input onChange={changeLine}></input></p>
            <p>Line13: <input onChange={changeLine}></input></p>
            <p>Line14: <input onChange={changeLine}></input></p>
            <p>Line15: <input onChange={changeLine}></input></p>
            <p>Line16: <input onChange={changeLine}></input></p>
            <p>Line17: <input onChange={changeLine}></input></p>
            <p>Line18: <input onChange={changeLine}></input></p>
            <p>Line19: <input onChange={changeLine}></input></p>
            <p>Line20: <input onChange={changeLine}></input></p>
            <p>Line21: <input onChange={changeLine}></input></p>
            <p>Author: <input onChange={changeAuthor}></input></p>
        <button onClick={Submit}>Submit</button>

    </div>)
}

export default PostPoetryContainer;
