import classnames from 'classnames';
import React, { useLayoutEffect, useMemo, useEffect, useState } from 'react';
import { InnerBlocks, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';
import PriceDisplay from './components/PriceDisplay';

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
	const { className, clientId, attributes, setAttributes } = props;
    let [countOfVariants, setCountOfVariants] = useState( 0 );
    let [currentVariantId, setCurrentVariantId] = useState( null );  // Currently displayed variant (0 = small, 1 = medium, 2 = large).

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
                <PriceDisplay variantName={smallVariantText} price={priceSmall} />
            }

            { countOfVariants === 1 && mediumVariantExists &&
                <PriceDisplay variantName={mediumVariantText} price={priceMedium} />
            }

            { countOfVariants === 1 && largeVariantExists &&
                <PriceDisplay variantName={largeVariantText} price={priceLarge} />
            }

            {/* If more variants exist, render a dropdown selector to see the price of the product. */}
            { countOfVariants > 1 &&
                <>
                    <label htmlFor={ 'uagb-price-card-variant-selector-' + clientId.substr( 0, 8 ) } >
                        { __( 'Choose variant: ', 'ultimate-addons-for-gutenberg' ) }
                    </label>
                    {/* eslint-disable jsx-a11y/no-onchange */}
                    <select
                        onChange={ ( e ) => setCurrentVariantId( e.target.value )  }
                        name={ 'uagb-price-card-variant-selector-' + clientId.substr( 0, 8 ) }
                    >
                        {/* eslint-enable jsx-a11y/no-onchange */}
                        <option selected disabled hidden>{ __( 'Select variant', 'ultimate-addons-for-gutenberg' ) }</option>
                        
                        { smallVariantExists &&
                            <option value={0}>{smallVariantText}</option>
                        }
                        { mediumVariantExists &&
                            <option value={1}>{mediumVariantText}</option>
                        }
                        { largeVariantExists &&
                            <option value={2}>{largeVariantText}</option>
                        }

                    </select>

                    {/* Render the price of the selected variant. */}

                    { currentVariantId === '0' &&
                        <PriceDisplay variantName={smallVariantText} price={priceSmall} />
                    }

                    { currentVariantId === '1' &&
                        <PriceDisplay variantName={mediumVariantText} price={priceMedium} />
                    }

                    { currentVariantId === '2' &&
                        <PriceDisplay variantName={largeVariantText} price={priceLarge} />
                    }

                </>
            }

        </div>
    );
}
export default React.memo( Render );
