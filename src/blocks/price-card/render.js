import classnames from 'classnames';
import React, { useLayoutEffect, useMemo } from 'react';
import { InnerBlocks } from '@wordpress/block-editor';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';