import React from 'react';

const WorksCard = ({work, workImg, workText, workURL}) => {
    return(
        <div className="work">
            <h3>
                {work}
            </h3>
            <a href={workURL} target="_blank"  rel="noopener noreferrer">
                <img src={workImg} alt={work}/>
            </a>
            <p>
                {workText}
            </p>
        </div>
    )
}

export default WorksCard;