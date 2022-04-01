const attributes = {
    // Block Requirements.
    classMigrate: {
		type: 'boolean',
		default: false,
	},
    block_id: {
		type: 'string',
		default: 'not_set',
	},
    // Editor and editor settings.
    title: {
        type: 'string',
    },
    description: {
        type: 'string',
    },
    image: {
        type: 'string',
        default: '',
    },
    priceSmall: {
        type: 'number',
        default: 0,
    },
    priceMedium: {
        type: 'number',
        default: 0,
    },
    priceLarge: {
        type: 'number',
        default: 0,
    },
    smallVariantText: {
        type: 'string',
        default: 'Small'
    },
    smallMediumText: {
        type: 'string',
        default: 'Small'
    },
    smallLargeText: {
        type: 'string',
        default: 'Small'
    },
    smallVariantExists: {
        type: 'boolean',
        default: true,
    },
    mediumVariantExists: {
        type: 'boolean',
        default: true,
    },
    largeVariantExists: {
        type: 'boolean',
        default: true,
    },
};

export default attributes;