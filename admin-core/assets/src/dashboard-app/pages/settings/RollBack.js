import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import RollBackConfirmPopup from './RollBackConfirmPopup';

const RollBack = () => {

    const previousVersions = uag_react.global_data.uag_previous_versions;

    const [ previousVersionSelect, setPreviousVersion ] = useState(previousVersions[0]['value']);
    const [ openPopup, setopenPopup ] = useState(false);

    const rollbackButtonClickHandler = () => {
        setopenPopup(true);
    };


    return (
        <>
            <section className='flex border-b border-solid border-slate-200'>
                <div className='pr-16 pb-8 w-4/5'>
                    <h2 className="text-lg leading-6 font-medium text-gray-900">
                        {__( 'Rollback to Previous Version', 'ultimate-addons-for-gutenberg' )}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                        { __( `Experiencing an issue with Ultimate Addons for Gutenberg version ${uag_react.plugin_ver} ? Roll back to a previous version to help troubleshoot the issue.`, 'ultimate-addons-for-gutenberg' ) }
                    </p>
                </div>
                <div className='flex'>
                    <select
                        id="location"
                        name="location"
                        className="block w-full h-9 pl-3 pr-10 py-2 mr-3 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        onChange={ (e) => { setPreviousVersion(e.target.value); } }
                    >
                        {
                            previousVersions.map((version) => {
                                return ( 
                                    <option key={version.value} value={version.value}>{version.label}</option>
                                );
                            })
                        }
                    </select>
                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 h-9"
                        onClick={rollbackButtonClickHandler}
                    >
                        {__( 'Rollback', 'ultimate-addons-for-gutenberg' )}
                    </button>
                </div>
            </section>
            <RollBackConfirmPopup openPopup={openPopup} setopenPopup={setopenPopup} previousVersionSelect={previousVersionSelect} />
        </>
    );
};

export default RollBack;