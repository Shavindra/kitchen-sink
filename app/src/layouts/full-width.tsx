import React, { useState } from 'react';

export const LayoutFullWidth: React.FC = (props) => {

    return (
        <div className="layout-full-width">
            {props.children}
        </div>)
}