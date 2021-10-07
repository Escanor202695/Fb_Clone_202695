import React from 'react';
import Post from './Reusable/Post';

function Posts(props) {
    return (
        <div>
            <Post time="33m" src="post2.jpg" caption="Nice day it was!"/>
            <Post time="1h" src="post1.jpg" caption="Soothing :)"/>
        </div>
    );
}

export default Posts;