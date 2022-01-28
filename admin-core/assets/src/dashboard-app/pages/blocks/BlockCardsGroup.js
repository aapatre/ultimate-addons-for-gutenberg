import BlockCard from '@DashboardApp/pages/blocks/BlockCard';
import React, { useState, useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';

const BlockCardsGroup = (props) => {

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

    const blocksInfo = uag_react.blocks_info;
    
    const renderBlockCards = blocksInfo.map( ( block, index ) => {
		return <BlockCard key={ index } blockInfo={ block } blocksStatuses={ blocksStatuses[block.slug] ? blocksStatuses[block.slug] : 'disabled'} setupdateFlag={setupdateFlag} updateFlag={updateFlag} />}
	);
    
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 p-6">
            { renderBlockCards }
        </div>
    );
};

export default BlockCardsGroup;