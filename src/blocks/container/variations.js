/**
 * Internal dependencies
 */
import rowIcons from './icons';

/**
 * Template option choices for predefined form layouts.
 *
 * @constant
 * @type {Array}
 */
const variations = [
	{
		name: 'one-column',
		icon: rowIcons['100'],
		attributes: {
			variationSelected: true,
		},
		scope: [ 'block' ],
	},
	{
		name: 'two-column-split',
		icon: rowIcons['50-50'],
		attributes: {
			variationSelected: true,
		},
		isDefault: true,
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 50 } ],
			[ 'uagb/container', { widthDesktop: 50 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-one-third-two-thirds',
		icon: rowIcons['25-75'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25 } ],
			[ 'uagb/container', { widthDesktop: 75 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'two-columns-two-thirds-one-third',
		icon: rowIcons['75-25'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 75 } ],
			[ 'uagb/container', { widthDesktop: 25 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-equal',
		icon: rowIcons['33-33-33'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 33.33 } ],
			[ 'uagb/container', { widthDesktop: 33.33 } ],
			[ 'uagb/container', { widthDesktop: 33.33 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-column-first-half',
		icon: rowIcons['25-25-50'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25 } ],
			[ 'uagb/container', { widthDesktop: 25 } ],
			[ 'uagb/container', { widthDesktop: 50 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-column',
		icon: rowIcons['50-25-25'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 50 } ],
			[ 'uagb/container', { widthDesktop: 25 } ],
			[ 'uagb/container', { widthDesktop: 25 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'three-columns-wider-center',
		icon: rowIcons['25-50-25'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25 } ],
			[ 'uagb/container', { widthDesktop: 50 } ],
			[ 'uagb/container', { widthDesktop: 25 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'four-column',
		icon: rowIcons['25-25-25-25'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25 } ],
			[ 'uagb/container', { widthDesktop: 25 } ],
			[ 'uagb/container', { widthDesktop: 25 } ],
			[ 'uagb/container', { widthDesktop: 25 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: 'five-column',
		icon: rowIcons['20-20-20-20-20'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 20 } ],
			[ 'uagb/container', { widthDesktop: 20 } ],
			[ 'uagb/container', { widthDesktop: 20 } ],
			[ 'uagb/container', { widthDesktop: 20 } ],
			[ 'uagb/container', { widthDesktop: 20 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '2-column-2nd-split',
		icon: rowIcons['50-50+100_100'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 50 } ],
			[ 
				'uagb/container',
				{ widthDesktop: 50, wrapDesktop: 'wrap' },
				[
					[ 'uagb/container', { widthDesktop: 100 } ],
					[ 'uagb/container', { widthDesktop: 100 } ],
				]
			],
		],
		scope: [ 'block' ],
	},
	{
		name: '100_50-50',
		icon: rowIcons['100_50-50'],
		attributes: {
			variationSelected: true,
			wrapDesktop: 'wrap'
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 100 } ],
			[ 
				'uagb/container', 
				{ widthDesktop: 100 },
				[
					[ 'uagb/container', { widthDesktop: 50 } ],
					[ 'uagb/container', { widthDesktop: 50 } ],
				]
			],
		],
		scope: [ 'block' ],
	},
	{
		name: '75+100_100+50-50-25',
		icon: rowIcons['75+100_100+50-50-25'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 
				'uagb/container', 
				{ widthDesktop: 75, wrapDesktop: 'wrap' }, 
				[ 
					[ 'uagb/container', { widthDesktop: 100 } ],
					[ 
						'uagb/container',
						{ widthDesktop: 100 },
						[
							[ 'uagb/container', { widthDesktop: 50 } ],
							[ 'uagb/container', { widthDesktop: 50 } ],
						]
					] 
				] 
			],
			[ 'uagb/container', { widthDesktop: 25 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '75-25_25_75',
		icon: rowIcons['75-25_25_75'],
		attributes: {
			variationSelected: true,
			wrapDesktop: 'wrap'
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 75 } ],
			[ 'uagb/container', { widthDesktop: 25 } ],
			[ 'uagb/container', { widthDesktop: 25 } ],
			[ 'uagb/container', { widthDesktop: 75 } ],

		],
		scope: [ 'block' ],
	},
	{
		name: '50+100_100+50-50-50+50-50',
		icon: rowIcons['50+100_100+50-50-50+50-50'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 
				'uagb/container', 
				{ widthDesktop: 50, wrapDesktop: 'wrap' }, 
				[ 
					[ 'uagb/container', { widthDesktop: 100 } ],
					[ 
						'uagb/container',
						{ widthDesktop: 100 },
						[
							[ 'uagb/container', { widthDesktop: 50 } ],
							[ 'uagb/container', { widthDesktop: 50 } ],
						]
					] 
				] 
			],
			[ 
				'uagb/container', 
				{ widthDesktop: 50, wrapDesktop: 'wrap' }, 
				[ 
					[ 'uagb/container', { widthDesktop: 50 } ],
					[ 'uagb/container', { widthDesktop: 50 } ], 
				] 
			],
		],
		scope: [ 'block' ],
	},
	{
		name: '50+100_100-50',
		icon: rowIcons['50+100_100-50'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 
				'uagb/container', 
				{ widthDesktop: 50, wrapDesktop: 'wrap' },
				[
					[ 'uagb/container', { widthDesktop: 100 } ],
					[ 'uagb/container', { widthDesktop: 100 } ],
				] 
			],
			[ 'uagb/container', { widthDesktop: 50 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '50-50_100',
		icon: rowIcons['50-50_100'],
		attributes: {
			variationSelected: true,
			wrapDesktop: 'wrap'
		},
		innerBlocks: [
			[ 
				'uagb/container', 
				{ widthDesktop: 100 },
				[
					[ 'uagb/container', { widthDesktop: 50 } ],
					[ 'uagb/container', { widthDesktop: 50 } ],
				] 
			],
			[ 'uagb/container', { widthDesktop: 100 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '50-50_50-50',
		icon: rowIcons['50-50_50-50'],
		attributes: {
			variationSelected: true,
			wrapDesktop: 'wrap'
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 50 } ],
			[ 'uagb/container', { widthDesktop: 50 } ],
			[ 'uagb/container', { widthDesktop: 50 } ],
			[ 'uagb/container', { widthDesktop: 50 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '33-33+100_100-33',
		icon: rowIcons['33-33+100_100-33'],
		attributes: {
			variationSelected: true
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 33 } ],
			[ 
				'uagb/container', 
				{ widthDesktop: 33, wrapDesktop: 'wrap' },
				[
					[ 'uagb/container', { widthDesktop: 100 } ],
					[ 'uagb/container', { widthDesktop: 100 } ]
				] 
			],
			[ 'uagb/container', { widthDesktop: 33 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '33-33-33+100_100',
		icon: rowIcons['33-33-33+100_100'],
		attributes: {
			variationSelected: true
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 33 } ],
			[ 'uagb/container', { widthDesktop: 33 } ],
			[ 
				'uagb/container', 
				{ widthDesktop: 33, wrapDesktop: 'wrap' },
				[
					[ 'uagb/container', { widthDesktop: 100 } ],
					[ 'uagb/container', { widthDesktop: 100 } ]
				] 
			],
		],
		scope: [ 'block' ],
	},
	{
		name: '33-33-33_33-33-33',
		icon: rowIcons['33-33-33_33-33-33'],
		attributes: {
			variationSelected: true,
			wrapDesktop: 'wrap'
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 33 } ],
			[ 'uagb/container', { widthDesktop: 33 } ],
			[ 'uagb/container', { widthDesktop: 33 } ],
			[ 'uagb/container', { widthDesktop: 33 } ],
			[ 'uagb/container', { widthDesktop: 33 } ],
			[ 'uagb/container', { widthDesktop: 33 } ],
		],
		scope: [ 'block' ],
	},
	{
		name: '25-75+100+50-50_100',
		icon: rowIcons['25-75+100+50-50_100'],
		attributes: {
			variationSelected: true,
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25 } ],
			[ 
				'uagb/container', 
				{ widthDesktop: 75, wrapDesktop: 'wrap' },
				[
					[ 
						'uagb/container', 
						{ widthDesktop: 100 },
						[
							[ 'uagb/container', { widthDesktop: 50 } ],
							[ 'uagb/container', { widthDesktop: 50 } ],
						]
					],
					[ 'uagb/container', { widthDesktop: 100 } ],
				]
			],
		],
		scope: [ 'block' ],
	},
	{
		name: '25-75_75-25',
		icon: rowIcons['25-75_75-25'],
		attributes: {
			variationSelected: true,
			wrapDesktop: 'wrap'
		},
		innerBlocks: [
			[ 'uagb/container', { widthDesktop: 25 } ],
			[ 'uagb/container', { widthDesktop: 75 } ],
			[ 'uagb/container', { widthDesktop: 75 } ],
			[ 'uagb/container', { widthDesktop: 25 } ],

		],
		scope: [ 'block' ],
	},
];

export default variations;
