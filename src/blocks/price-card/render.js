import classnames from 'classnames';
import React, { useLayoutEffect, useMemo } from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
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
	const { className, attributes } = props;

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
            { image !== '' &&
                <img src={ image.url } alt="catalog item" />
            }
        </div>
    );
}
export default React.memo( Render );
