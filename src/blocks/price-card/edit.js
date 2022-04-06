/**
 * BLOCK: Price Card - Edit Class
 */

import styling from './styling';
import { select, dispatch } from '@wordpress/data';
import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/price-card/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/price-card/render" */ './render' )
);

const UAGBPriceCardEdit = ( props ) => {

	const deviceType = useDeviceType();

    useEffect( () => {

    	const { className, clientId, attributes, setAttributes } = props;

        // Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

        const {
            classMigrate,
            block_id,
            title,
            description,
            image,
            priceSmall,
            priceMedium,
            priceLarge,
            smallVariantText,
            mediumVariantText,
            largeVariantText,
            smallVariantExists,
            mediumVariantExists,
            largeVariantExists
        } = attributes;

    }, [] );

    // The following 2 useEffect hooks are responsible for rendering styling.

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-price-card-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-price-card-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

    return(
        <>
            <Suspense fallback={ lazyLoader() }>
                <Settings parentProps={ props } />
                <Render parentProps={ props } /> 
            </Suspense>
        </>
    );

};

export default UAGBPriceCardEdit;