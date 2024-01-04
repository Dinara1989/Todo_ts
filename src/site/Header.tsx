import React from 'react';
type HeaderPropsType = {
    title: string
}
const Header = (props:HeaderPropsType) => {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    );
};

export default Header;