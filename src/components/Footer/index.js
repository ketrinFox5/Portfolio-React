import React from 'react';

const Footer = ({content}) => {
    return(
        <footer className="footer">
            <ul className="footer__content">
                {content.map(({link, icon}) => (
                    <li>
                    <a href={link}  > 
                        <img src={icon} alt="icon" title="Связаться со мной"/>
                    </a>
                </li>
                ))}
                
            </ul>
        </footer>
    )
}

export default Footer;