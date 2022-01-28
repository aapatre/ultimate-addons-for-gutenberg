import React, { useState } from 'react';
import apiFetch from '@wordpress/api-fetch';

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

const FilterTabs = (props) => {
    
    const {
        blocksStatuses,
        updateFlag,
        setupdateFlag,
        selectedTab,
        setselectedTab
    } = props;

    let tabs = [
        { name: 'All', slug: 'all' },
        { name: 'Creative', slug: 'creative' },
        { name: 'Content', slug: 'content' },
        { name: 'Post', slug: 'post' },
        { name: 'Social', slug: 'social' },
        { name: 'Form', slug: 'form' },
        { name: 'SEO', slug: 'seo' },
        { name: 'Extensions', slug: 'extensions' },
    ];

    const tabClickHandler = (e) => {
        e.preventDefault();
        let slug = e.target.getAttribute('data-slug');
        setselectedTab(slug)
    };

    const activateAllBlocks = ( e ) => {
		
		const value = { ...blocksStatuses };

		for ( const block in blocksStatuses ) {
			value[ block ] = 'block';
		}

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
            setupdateFlag(!updateFlag);
		} );
	};

	const deactivateAllBlocks = ( e ) => {
		
		const value = { ...blocksStatuses };

		for ( const block in blocksStatuses ) {
			value[ block ] = 'disabled';
		}

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
            setupdateFlag(!updateFlag);
		} );
	};

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 bg-white m-6">
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
                {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
                ))}
            </select>
            </div>
            <div className="hidden justify-between sm:flex">
                <nav className="flex space-x-4" aria-label="Tabs">
                    {tabs.map((tab) => (
                    <a
                        key={tab.name}
                        className={classNames(
                        tab.slug === selectedTab ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                        'px-3 py-2 font-medium text-sm rounded-md cursor-pointer'
                        )}
                        onClick={tabClickHandler}
                        data-slug = { tab.slug}
                    >
                        {tab.name}
                    </a>
                    ))}
                </nav>
                <span className="z-0 flex shadow-sm rounded-md justify-center">
                    <button
                        type="button"
                        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-70 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-l-md"
                        onClick={activateAllBlocks}
                    >
                        Activate all
                    </button>
                    <button
                        type="button"
                        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-70 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md"
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