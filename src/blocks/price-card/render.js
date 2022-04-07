import classnames from 'classnames';
import React, { useLayoutEffect, useMemo, useEffect, useState } from 'react';
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
    let [countOfVariants, setCountOfVariants] = useState( 0 );

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

    // This hook will check the number of product variants that are currently active (updates in realtime).
    useEffect( () => {
        
        // Get how many variants are currently active.
        setCountOfVariants( [smallVariantExists, mediumVariantExists, largeVariantExists].filter( Boolean ).length );

    }, [smallVariantExists, mediumVariantExists, largeVariantExists] );

    return(
        <div className={ classnames(
            className,
            `uagb-block-${ block_id }`,
        ) }>
            {/* If image isn't empty */}
            { image &&
                <img src={ image } alt="catalog item" />
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

            {/* In case only one variant render either of these instead of a dropdown selector */}

            { countOfVariants === 1 && smallVariantExists &&
                <>
                    <h4>
                        <span>{smallVariantText}:</span>
                        <strong><span> {priceSmall}</span></strong>
                    </h4>
                </>
            }

            { countOfVariants === 1 && mediumVariantExists &&
                <>
                    <h4>
                        <span>{mediumVariantText}:</span>
                        <strong><span> {priceMedium}</span></strong>
                    </h4>
                </>
            }

            { countOfVariants === 1 && largeVariantExists &&
                <>
                    <h4>
                        <span>{largeVariantText}:</span>
                        <strong><span> {priceLarge}</span></strong>
                    </h4>
                </>
            }

        </div>
    );
}
export default React.memo( Render );
