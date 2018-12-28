import React from 'react';
import { Jumbotron } from 'reactstrap';

const Content = (props) => {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">my Name is Michael Tamsil</h1>
                <p className="lead">I'm website maker in Batam</p>
                <p>will give you chances to new and loyal customers loyal by your service through website</p>
                <p className="lead"><a href="#contact">Contact me yey</a></p>
                <p>{props.isi}</p>
            </Jumbotron>
        </div>
    )
}

export default Content;