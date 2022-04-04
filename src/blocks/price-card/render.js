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
}
export default React.memo( Render );
