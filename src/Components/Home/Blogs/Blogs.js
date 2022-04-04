import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2>Blogs</h2>
            <div className='container shadow p-5 rounded bg-light border-start border-primary border-3 my-5'>
                <h4 className='text-start text-primary'>What is context API?</h4>
                <hr />
                <p className='text-start'>Context API is a new feature added in version 16.3 of React that allows one to share state across the entire app lightly and with ease. 
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='container shadow p-5 rounded bg-light border-start border-primary border-3 mb-5'>
                <h4 className='text-start text-primary'>What is a semantic tag?</h4>
                <hr />
                <p className='text-start'>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as <pre> &lt;<span className='text-danger'>header</span>&gt; , <span className='text-danger'>&lt;nav&gt;</span>, <span className='text-danger'>&lt;figure&gt;</span>, &lt;<span className='text-danger'>footer</span>&gt; and &lt;<span className='text-danger'>article</span>&gt;</pre> are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.</p>
            </div>
        </div>
    );
};

export default Blogs;