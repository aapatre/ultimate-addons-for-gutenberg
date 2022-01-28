import FilterTabs from '@DashboardApp/pages/blocks/FilterTabs';
import BlockCardsGroup from '@DashboardApp/pages/blocks/BlockCardsGroup';
import React, { useState, useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';

const Blocks = (props) => {

    const [ blocksStatuses, setBlocksStatuses] = useState([]);
    const [ updateFlag, setupdateFlag] = useState( false );


    useEffect( () => {
		
        apiFetch( {
            path: '/uag/v1/admin/commonsettings/',
        } ).then( ( data ) => {
            setBlocksStatuses(data.options.blocks_activation_and_deactivation);
        } );
	}, [] );

    useEffect( () => {
		
        apiFetch( {
            path: '/uag/v1/admin/commonsettings/',
        } ).then( ( data ) => {
            setBlocksStatuses(data.options.blocks_activation_and_deactivation);
        } );
			
	}, [updateFlag] );

    return (
        <>
            <FilterTabs blocksStatuses={blocksStatuses} setupdateFlag={setupdateFlag} updateFlag={updateFlag} />
            <BlockCardsGroup blocksStatuses={blocksStatuses} setupdateFlag={setupdateFlag} updateFlag={updateFlag} />
        </>
    );
};
export default Blocks;