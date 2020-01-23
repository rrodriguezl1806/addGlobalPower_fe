import React from 'react';

const curentYear = () => {
    const currentDate = new Date();
    return currentDate.getFullYear();
}

const Footer = (props) => {
    return (
        <div>
            footer
        </div>
    );
}
export default Footer;