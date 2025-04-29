import React, {FC} from 'react';

type PercentViewType = {
    value: number;
    max: number;
    makeColor: (percent: number) => string;
};
   
const ProgressBar: FC<PercentViewType> = ({value, max, makeColor}) => {
    return (
    <div style={{color: makeColor(value / max)}}>
        {value / max * 100}%
        <span style={{display: "block", width: `${value/max*100}%`, height: 12, backgroundColor: "black"}}> </span>
    </div>
    );
};
   

export default ProgressBar;