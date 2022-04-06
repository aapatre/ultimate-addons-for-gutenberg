/**
 * BLOCK: Price Card - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


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

    return (
        <div className={ classnames(
				className,
				`uagb-block-${ block_id }`,
        ) }>
            {/* If image isn't empty */}
            { image && image !== '' && image.url &&
                <img src={ image.url } alt="catalog item" />
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

            <div>
                <span>{ __( 'Variant: ', 'ultimate-addons-for-gutenberg' ) }</span>
                <select>
                    
                </select>
            </div>

        </div>
    );
}