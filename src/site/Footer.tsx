import React from 'react';

type FooterPropsType = {
    titleFooter: string
}
const Footer = (props:FooterPropsType) => {
    return (
        <div>
            <h3>{props.titleFooter}</h3>
        </div>
    );
};

export default Footer;