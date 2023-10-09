/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            Go-CRM
            by
            <span className="font-medium ml-2">GO</span>
        </div>
    );
};

export default AppFooter;
