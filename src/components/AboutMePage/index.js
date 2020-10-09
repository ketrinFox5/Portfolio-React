import React from 'react';
import Card from './AboutMeCard';

const AboutMePage = props => {
    return(
           <div className="card__wrap">
           {props.content.map(card => (
               <Card
                {...card}
               />
           ))}
           </div>
    )
}

export default AboutMePage;