// this component is responsible for rendering a list of Pages
// but start simple for now.

//import react
import React from "react";

// a react component is just a function that return JSX - (html embedded in js)
const Pages = (props) => {

    const renderPages = () => {
        return props.pages.map((page)=> {
            return (
            <div>
                <h1>{page.title}</h1>
                <h3>{page.author}</h3>
                <p>{page.body}</p>
            </div>
            );
        });
    }

    return <p>Page Here: {renderPages()}</p>;
}

export default Pages;