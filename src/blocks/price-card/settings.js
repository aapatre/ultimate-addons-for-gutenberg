import React, { Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import { __ } from '@wordpress/i18n';
import { select } from '@wordpress/data';
import Range from '@Components/range/Range.js';
import ResponsiveSlider from '@Components/responsive-slider';
import ResponsiveSelectControl from '@Components/responsive-select';
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

import { SelectControl, Icon, ToggleControl, TextControl, __experimentalNumberControl as NumberControl } from '@wordpress/components';



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
			setAttributes( { image: '' } );
			return;
		}

		if ( ! media.type || 'image' !== media.type ) {
			return;
		}

		setAttributes( { image: media.url } );
	};

    /*
	 * Event to set Image as null while removing.
	 */
	const onRemoveImage = () => {
		setAttributes( { image: '' } );
	};

    const priceCardGeneralSettings = () => {
        return(
			<>
				<UAGAdvancedPanelBody title='Image' initialOpen= { true }>
					<UAGImage
						label={ __( 'Card Image', 'ultimate-addons-for-gutenberg' ) }
						onSelectImage={ onSelectImage }
						backgroundImage={ image }
						onRemoveImage={ onRemoveImage }
					/>
				</UAGAdvancedPanelBody>
				<UAGAdvancedPanelBody title='Variations' initialOpen= { true }>
					
					{/* Small variant setings */}
					<ToggleControl
						label = {__( 'Small variant exists?', 'ultimate-addons-for-gutenberg' )}
						checked = {smallVariantExists}
						onChange = { () => setAttributes( { smallVariantExists: !smallVariantExists } )}
					/>

					{ smallVariantExists &&
						<>
							<TextControl
								label = { __( 'Small variant name:', 'ultimate-addons-for-gutenberg' ) }
								value = {smallVariantText}
								onChange = { value => setAttributes( { smallVariantText: value } ) }
							/>

							<NumberControl
								label = { __( 'Price for the small variant:', 'ultimate-addons-for-gutenberg' ) }
								isDragEnabled
								isShiftStepEnabled
								min = { 0 }
								shiftStep = { 0.1 }
								step = { 0.01 }
								value = { priceSmall }
								onChange = { value => setAttributes( { priceSmall: value } ) }
							/>
						</>
					}

					<hr />

					{/* Medium variant settings */}
					<ToggleControl
						label = {__( 'Medium variant exists?', 'ultimate-addons-for-gutenberg' )}
						checked = {mediumVariantExists}
						onChange = { () => setAttributes( {mediumVariantExists: !mediumVariantExists } )}
					/>

					{ mediumVariantExists &&
						<>
							<TextControl
								label = { __( 'Medium variant name:', 'ultimate-addons-for-gutenberg' ) }
								value = {mediumVariantText}
								onChange = { value => setAttributes( { mediumVariantText: value } ) }
							/>

							<NumberControl
								label = { __( 'Price for the medium variant:', 'ultimate-addons-for-gutenberg' ) }
								isDragEnabled
								isShiftStepEnabled
								min = { 0 }
								shiftStep = { 0.1 }
								step = { 0.01 }
								value = { priceMedium }
								onChange = { value => setAttributes( { priceMedium: value } ) }
							/>
						</>
					}

					<hr />

					{/* Large variant settings */}
					<ToggleControl
						label = {__( 'Large variant exists?', 'ultimate-addons-for-gutenberg' )}
						checked = {largeVariantExists}
						onChange = { () => setAttributes( {largeVariantExists: !largeVariantExists } )}
					/>

					{ largeVariantExists &&
						<>
							<TextControl
								label = { __( 'Large variant name:', 'ultimate-addons-for-gutenberg' ) }
								value = {largeVariantText}
								onChange = { value => setAttributes( { largeVariantText: value } ) }
							/>

							<NumberControl
								label = { __( 'Price for the large variant:', 'ultimate-addons-for-gutenberg' ) }
								isDragEnabled
								isShiftStepEnabled
								min = { 0 }
								shiftStep = { 0.1 }
								step = { 0.01 }
								value = { priceLarge }
								onChange = { value => setAttributes( { priceLarge: value } ) }
							/>
						</>
					}

					<hr />

				</UAGAdvancedPanelBody>
			</>
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