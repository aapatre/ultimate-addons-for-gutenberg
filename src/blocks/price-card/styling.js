/**
 * Returns Dynamic Generated CSS
 */

 import generateCSS from '@Controls/generateCSS';
 import generateCSSUnit from '@Controls/generateCSSUnit';

 function styling ( props ) {
    const selectors = {};
	const tablet_selectors = {};
	const mobile_selectors = {};

    const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS(
		tablet_selectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	styling_css += generateCSS(
		mobile_selectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return styling_css;
 }

 export default styling;