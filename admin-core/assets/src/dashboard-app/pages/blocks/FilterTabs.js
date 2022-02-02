import apiFetch from '@wordpress/api-fetch';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';

function classNames( ...classes ) {
return classes.filter( Boolean ).join( ' ' )
}

const FilterTabs = () => {

    const blocksInfo = uag_react.blocks_info;
    const dispatch = useDispatch();

    const blocksStatuses = useSelector( ( state ) => state.blocksStatuses );
    const activeBlocksFilterTab = useSelector( ( state ) => state.activeBlocksFilterTab );
    const [ categoriesBlocks, setcategoriesBlocks ] = useState([]);

    const tabs = [
        { name: 'All', slug: 'all' },
        { name: 'Creative', slug: 'creative' },
        { name: 'Content', slug: 'content' },
        { name: 'Post', slug: 'post' },
        { name: 'Social', slug: 'social' },
        { name: 'Form', slug: 'form' },
        { name: 'SEO', slug: 'seo' },
        { name: 'Extensions', slug: 'extensions' },
    ];

    useEffect( () => {

        let categoriesBlocksTemp = {
            ...categoriesBlocks
        };

		blocksInfo.map( ( block ) => {

            const blockCategories = block.admin_categories;
            
            blockCategories.map((category) => {
    
                if ( ! categoriesBlocksTemp [ category ] ) {
                    categoriesBlocksTemp [ category ] = [];
                }
        
                categoriesBlocksTemp [ category ].push(block.slug);
            });
    
            return block;
        });

        setcategoriesBlocks(categoriesBlocksTemp)

	}, [] );

    const activateAllBlocks = () => {
		
		const value = { ...blocksStatuses };

		for ( const block in blocksStatuses ) {
            if ( 'all' !== activeBlocksFilterTab && ( ! categoriesBlocks[activeBlocksFilterTab] || ! categoriesBlocks[activeBlocksFilterTab].includes(block) ) ) {
                continue;
            }
			value[ block ] = 'block';
		}

        dispatch( {type:'UPDATE_BLOCK_STATUSES', payload: value} );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_blocks_activation_and_deactivation' );
		formData.append(
			'security',
			uag_react.blocks_activation_and_deactivation_nonce
		);
		formData.append( 'value', JSON.stringify( value ) );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );
	};

	const deactivateAllBlocks = () => {
		
		const value = { ...blocksStatuses };

		for ( const block in blocksStatuses ) {
            if ( 'all' !== activeBlocksFilterTab && ( ! categoriesBlocks[activeBlocksFilterTab] || ! categoriesBlocks[activeBlocksFilterTab].includes(block) ) ) {
                continue;
            }
			value[ block ] = 'disabled';
		}

        dispatch( {type:'UPDATE_BLOCK_STATUSES', payload: value} );

		const formData = new window.FormData();

		formData.append( 'action', 'uag_blocks_activation_and_deactivation' );
		formData.append(
			'security',
			uag_react.blocks_activation_and_deactivation_nonce
		);
		formData.append( 'value', JSON.stringify( value ) );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( () => {
		} );
	};

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 bg-white m-6 rounded-md">
            <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">
                Select a tab
            </label>
            {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
            <select
                id="tabs"
                name="tabs"
                className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
            >
                {tabs.map( ( tab ) => (
                <option key={tab.name}>{tab.name}</option>
                ) )}
            </select>
            </div>
            <div className="hidden justify-between sm:flex">
                <nav className="flex space-x-4" aria-label="Tabs">
                    {tabs.map( ( tab ) => (
                    <a // eslint-disable-line
                        key={tab.name}
                        className={classNames(
                        tab.slug === activeBlocksFilterTab ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                        'px-3 py-2 font-medium text-sm rounded-md cursor-pointer'
                        )}
                        onClick={ () => dispatch( {type:'UPDATE_BLOCKS_ACTIVE_FILTER_TAB', payload: tab.slug} ) }
                    >
                        {tab.name}
                    </a>
                    ) )}
                </nav>
                <span className="z-0 flex shadow-sm rounded-md justify-center">
                    <button
                        type="button"
                        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-70 focus:z-10 focus:outline-none rounded-l-md"
                        onClick={activateAllBlocks}
                    >
                        Activate all
                    </button>
                    <button
                        type="button"
                        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-70 focus:z-10 focus:outline-none rounded-r-md"
                        onClick={deactivateAllBlocks}
                    >
                        Deactivate all
                    </button>
                </span>
            </div>
        </div>
    );
};

export default FilterTabs;