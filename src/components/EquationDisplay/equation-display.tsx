import React from 'react';
import MJ from '../../../src/mathjax-ts';
import './equation-display.scss';

type OwnProps = {
    equationString: string;
}

export const EquationDisplay: React.FC<OwnProps> = ({ equationString }) => {
    return (
    <span className='equation'>
        <MJ.Context input='tex' onLoad={() => {}} onError={() => {}}>
            <MJ.Node inline>{equationString}</MJ.Node>
        </MJ.Context>
    </span>
    )
}