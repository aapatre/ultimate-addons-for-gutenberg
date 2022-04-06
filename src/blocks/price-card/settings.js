import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import MultiButtonsControl from '@Components/multi-buttons-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import renderSVG from '@Controls/renderIcon';
import UAGPresets from '@Components/presets';

import { InspectorControls } from '@wordpress/block-editor';

import { SelectControl, Icon } from '@wordpress/components';



import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import UAGImage from '@Components/image';


const Settings = ( props ) => {
    props = props.parentProps;
	const { setAttributes, attributes, deviceType } = props;

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

	/*
	 * Event to set Image as while adding.
	 */
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( { image: null } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			return;
		}

		setAttributes( { image: media } );
	};

    /*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { image: null } );
	};

    const priceCardGeneralSettings = () => {
        return(
            <UAGAdvancedPanelBody title='Image' initialOpen= { true }>
                <UAGImage
                    label={ __( 'Card Image', 'ultimate-addons-for-gutenberg' ) }
                    onSelectImage={ onSelectImage }
                    backgroundImage={ image }
                    onRemoveImage={ onRemoveImage }
			    />
            </UAGAdvancedPanelBody>
        );
    }

    return (
		<>
			<InspectorControls>
				<InspectorTabs tabs={ [ 'general', 'style', 'advance' ] }>
					<InspectorTab { ...UAGTabs.general }>
						{ priceCardGeneralSettings() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{/* { priceCardTitleSettings() } */}
						{/* { priceCardContentSettings() } */}
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
		</>
	);
}

export default React.memo( Settings );