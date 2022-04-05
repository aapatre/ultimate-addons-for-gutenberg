/**
 * BLOCK: Price Card - Save Block
 */

// Import block dependencies and components.
import classnames from 'classnames';

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
            { image.length > 0 &&
                <img src={ image } alt="catalog item" />
            }
        </div>
    );
}