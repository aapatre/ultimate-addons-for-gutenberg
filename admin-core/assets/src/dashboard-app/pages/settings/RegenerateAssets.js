import React, { useState } from 'react';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

const RegenerateAssets = () => {

    const [ regenerateAssetsState, setRegenerateAssetsState ] = useState(false);

    const regenerateAssets = () => {

        const formData = new window.FormData();
		formData.append( 'action', 'uag_regenerate_assets' );
		formData.append( 'security', uag_react.regenerate_assets_nonce );
		formData.append( 'value', true );

		apiFetch( {
			url: uag_react.ajax_url,
			method: 'POST',
			body: formData,
		} ).then( ( data ) => {
            if ( data.success ) {
                setTimeout( function () {
					setRegenerateAssetsState( false );
				}, 1000 );
				setRegenerateAssetsState( true );
			}
		} );
    };

    return (
        <section className='flex border-b border-solid border-slate-200'>
            <div className='pr-16 pb-8 w-4/5'>
                <h2 className="text-lg leading-6 font-medium text-gray-900">
                    {__( 'Asset Regeneration', 'ultimate-addons-for-gutenberg' )}
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                    { __( 'Facing issues with style, layout, color or another page element? Use this option to regenerate CSS and Javascript assets. It can help with all kinds of asset issues.', 'ultimate-addons-for-gutenberg' ) }
                </p>
            </div>
            <div>
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={regenerateAssets}
                >
                    {__( 'Regenerate Assets', 'ultimate-addons-for-gutenberg' )}
                </button>
                { regenerateAssetsState &&
                    <p className='text-sm text-lime-600 pt-4'>
                        {__( 'Assets Regenerated!', 'ultimate-addons-for-gutenberg' )}
                    </p>
                }
            </div>
        </section>
    );
};

export default RegenerateAssets;