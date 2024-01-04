import React from 'react';
type BodyPropsType = {
    titleBody: string
}
const Body = (props:BodyPropsType) => {
    return (
        <div>
            <h2>{props.titleBody}</h2>
        </div>
    );
};

export default Body;