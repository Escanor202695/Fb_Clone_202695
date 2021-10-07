import React from 'react';
import StoryCard from './StoryCard';

const stories = [
    {
        src:"https://links.papareact.com/zof",
        profile: "https://links.papareact.com/l4v"

    },
    {
        src:"https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk"

    },
    {
        src:"https://links.papareact.com/k2j",
        profile: "https://links.papareact.com/f0p"

    },
    {
        src:"https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf"

    },
    {
        src:"https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy"

    },

]
function Stories(props) {
    return (
        <div className="flex justify-center space-x-3 mt-7">
            {stories.map(story=>(
                <StoryCard name={story.name} src={story.src}
                profile ={story.profile}/>
            ))}
            
        </div>
    );
}

export default Stories;