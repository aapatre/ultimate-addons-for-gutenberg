/**
 * BLOCK: Price Card
 */

import UAGB_Block_Icons from '@Controls/block-icons';
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import edit from './edit';
import save from './save';
import attributes from './attributes';


registerBlockType( 'uagb/price-card', {
    title: __( 'Price Card', 'ultimate-addons-for-gutenberg' ), // Block title.
    description: __( 'A block that allows you to add a cool price card', 'ultimate-addons-for-gutenberg' ), // Block description.
    icon: UAGB_Block_Icons.restaurant_menu, // Block icon.
    keywords: [ __( 'price' ), __( 'card' ), __( 'uag' ) ], // Keywords for the block.
    category: uagb_blocks_info.category,    // Block category.
    attributes: {}, // Block attributes.
    edit,
    save,
    example: {
        attributes: {
            isPreview: true,
        }
    },  // An empty object to render the preview.
} );