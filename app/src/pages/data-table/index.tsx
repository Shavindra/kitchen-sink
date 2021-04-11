import React, { useState } from 'react';
import { DataTable } from '../../components';
import { LayoutFullWidth } from '../../layouts';

export const PageDataTable: React.FC = (props) => {
    return (
        <LayoutFullWidth>
            <DataTable />
        </LayoutFullWidth>
    )
}
