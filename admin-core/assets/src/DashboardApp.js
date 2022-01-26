import React from 'react';
import ReactDOM from 'react-dom';
/* Main Compnent */
import './common/all-config.scss';
import "./common/tailwindbase.scss";
import SettingsWrap from '@DashboardApp/SettingsWrap';

ReactDOM.render(
	<SettingsWrap/>,
	document.getElementById( 'uag-settings-app' )
);