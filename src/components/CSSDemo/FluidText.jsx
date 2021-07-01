import React from 'react';
import './fluid-text.css';

export default function FluidText({fluidtext}) {
    return (
        <div className='fluid-text-container'>
            <svg width="130" height="60">
                <text textAnchor="middle" x="50%" y="50%" className="fluid-text fluid-text-1">{fluidtext}</text>
                <text textAnchor="middle" x="50%" y="50%" className="fluid-text fluid-text-2">{fluidtext}</text>
                <text textAnchor="middle" x="50%" y="50%" className="fluid-text fluid-text-3">{fluidtext}</text>
                <text textAnchor="middle" x="50%" y="50%" className="fluid-text fluid-text-4">{fluidtext}</text>
            </svg>
        </div>
    );
};