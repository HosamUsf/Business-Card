import React from 'react';

export default function Footer() {
    const handleIconClick = (url) => {
        window.open(url,'_blank');
    };

    return (
        <div className="footer--container">
            <i className="fa fa-twitter" onClick={() => handleIconClick('https://twitter.com/hosamusf')}></i>
            <i className="fa fa-facebook" onClick={() => handleIconClick('https://facebook.com/hosammyoussef')}></i>
            <i className="fa fa-linkedin" onClick={() => handleIconClick('https://www.linkedin.com/in/hosammohamed')}></i>
            <i className="fa fa-github" onClick={() => handleIconClick('https://github.com/hosamusf')}></i>
        </div>
    );
}
