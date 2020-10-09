import React from 'react';

const Card = ({text, list, img}) => {
    const renderText = text => {
        return typeof text === 'string' ? text : <> 
            {text.start} <a href={text.linkURL} target="_blank"  rel="noopener noreferrer">{text.linkText}</a> {text.end}
         </>
    }
    return(
        <div className="card">
            <img src={img} alt="Card"/>
            <div className="card__text">
                <p>
                    {renderText(text)}
                </p>
                <ul>
                    {list.map(item => (
                        <li>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Card;