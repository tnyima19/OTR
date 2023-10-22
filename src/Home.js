import StoryDisplay from './StoryDisplay';
// get stories
import StorySearchBar from './StorySearchBar';
import React, {useState} from 'react';

function Home(){
    const [all_stories, setStory] = useState([]);
    const [searchInput, setInput] = useState('');

    let filteredList = all_stories.filter((story) => {let all_title = story.title.toLowerCase();
        return all_title.includes(searchInput) } )
const getStory = () =>{
    fetch("https://shortstories-api.onrender.com/")
    .then((res) => {
        return res.json();
    })
    .then((jsonData) => {
        console.log(jsonData);
        //all_stories.push(jsonData);
        console.log(all_stories);
        return setStory((prev_stories)=> {
            return [jsonData, ...prev_stories];
        });
    });
}
let stories = <p>No stories yet!!</p>

if (all_stories.length >0){
    stories = all_stories.map
}

function titleInputHandler(event){
    
    console.log(event.target.value);
    setInput(event.target.value);
    console.log("filtered List: ", filteredList);

}



    return(<div>
            <h1>Search Title: </h1><input type='text' onChange={titleInputHandler}></input>
            {/* <StorySearchBar inputFilter={inputFilterHandler}/> */}
            {filteredList.map((info) => (<StoryDisplay author={info.author} story={info.story} title={info.title} />))}
            <div>
                <button onClick={getStory}>New Story</button>
            </div>
    </div>);
}

export default Home;