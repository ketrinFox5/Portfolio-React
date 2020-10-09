import React from 'react';
import WorksCard from './WorksCard';

const WorkPage = props => {
    return(
           <div className="work__wrap">
                {props.content.map(work => (
                    <WorksCard 
                        {...work}
                    />
                ))}
           </div>
    )
}

export default WorkPage;