/**
 * BLOCK: Price Card - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import PriceDisplay from './components/PriceDisplay';


export default function save( props ) {
	const { attributes, className } = props;
    
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

    const countOfVariants = [smallVariantExists, mediumVariantExists, largeVariantExists].filter( Boolean ).length;
    console.log( 'count of variants: ' + countOfVariants );

    return (
        <div className={ classnames(
				className,
				`uagb-block-${ block_id }`,
        ) }>
            {/* If image isn't empty */}
            { image &&
                <img src={ image } alt="catalog item" />
            }

            {/* Title */}
            <RichText.Content
                tagName='h3'
                value={ title } 
            />

            {/* Description */}
            <RichText.Content
                tagName='p'
                value={ description }
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

        </div>
    );
}