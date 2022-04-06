import classnames from 'classnames';
import React, { useLayoutEffect, useMemo } from 'react';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
    // Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

    props = props.parentProps;
	const deviceType = useDeviceType();
	const { className, attributes, setAttributes } = props;

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

    return(
        <div className={ classnames(
            className,
            `uagb-block-${ block_id }`,
        ) }>
            {/* If image isn't empty */}
            { image && image !== '' && image.url &&
                <img src={ image.url } alt="catalog item" />
            }

            <RichText
                tagName='h3'
                placeholder={__( 'Enter Card Title', 'ultimate-addons-for-gutenberg' )}
                value={ title }
                onChange={ ( content ) => setAttributes( { title: content } ) }
            />

            <RichText
                tagName='p'
                placeholder={__( 'Enter Card Description', 'ultimate-addons-for-gutenberg' )}
                value={ description }
                onChange={ ( content ) => setAttributes( { description: content } ) }
            />

        </div>
    );
}
export default React.memo( Render );
