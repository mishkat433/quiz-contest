import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 lg:w-8/12 mx-auto my-10 h-[85vh] md:h-full lg:h-[85vh] pb-10'>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is the purpose of react-router?
                </div>
                <div className="collapse-content">
                    <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                        Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
                </div>
            </div>

            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10">
                <div className="collapse-title text-xl font-medium">
                    How does context api works?
                </div>
                <div className="collapse-content">
                    <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
                </div>
            </div>

            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mt-10">
                <div className="collapse-title text-xl font-medium">
                    How does worked useRef?
                </div>
                <div className="collapse-content">
                    <p>A useref hook is used to directly access a dom element. Accessing the DOM requires
                        setting the reference to the DOM element and importing the useref. You might be familiar with
                        refs primarily as a way to access the DOM. If you pass a ref object to React with code , React will set its
                        .current property to the corresponding DOM node whenever that node changes. Keep in mind that useRef doesn't notify
                        you when its content changes. Mutating the .current property doesn't cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead. useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;