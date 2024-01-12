import PoemCard from './PoemCard';
const poems = [ {title:'Hiroshima', poem:['We did so well in ignorance',
 'Seeking in the graceful prisons of Stonehenge', 
 'or bars where lovers chat of Scorpios', 
 'The stars.', 
 `How our dreams leaped out with the angel hands`,
 `Our clod of earth, to cruise and court`, 
 `Those itching seeds.`, 
 `One flash, one flower growing earthward`, 
 `In a flame, lonesome eyes`, 
 `From Hiroshima's every street`, 
 `Where trampled with a Milky Way.`, 
 `What ardor must our hands possess to wipe`, 
 `Skin like suntan cream onto the earth.`,
 `The poets fish for fair bright stars`,
 `And soldiers bow until the end of rising suns.`, 
 `What long has been a generous enemy`, 
 `Rising on the brink of earth and dreams`, 
 `Reaches us and its ghastly friend.`], author:'    Willy Clay'},
   {title:'Smoldering', 
    poem:['You have no pre-conceptions',
        'Save your name, and my claim',
        'That you filled my belly like a warm water ballon',
        ' ',
        'I am sorry you need more proof', 
        'I wish I could tell you',
        'You wafted down from the sky',
        '',
        'Or that I planted you',
        'And watered you in my window-box',
        'And dug you up from the dirt like a bulbous onion',
        ' ',
        'I wish I knew how I got you.',
        'By the time there was time',
        'To light a cigarette and wonder',
        ' ',
        'And not for the last time.',
        `So don't tell me I never loved you`,
        'Like it was something I owed',
        ' ',
        `I've got a boxful of butt-ends to prove it`,
        'I should have lit them again while you grew',
        `So I wouldn't have been kept in the dark, like you.`,
        ' ',
        'Leave my home, find your own',
        `I'll wait here while you do`,
        `Still burning, inspite of you.`],
        author:'    Pamela Barbell'}];

function Poetry(){


    const poemElements = poems.map((poem, index) =>{
        return <PoemCard key={index} title={poem.title} poem={poem.poem} author={poem.author} />
    })

    return(<div>
        {/* <PoemCard title={poems[0].title} poem={poems[0].poem} author={poems[0].author} /> */}
        {poemElements}
    </div>);
};

export default Poetry;