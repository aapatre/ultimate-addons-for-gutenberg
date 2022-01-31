import React from 'react';
import ReactDOM from 'react-dom';
/* Main Compnent */
import './common/all-config.scss';
import SettingsWrap from '@DashboardApp/SettingsWrap';
import { Provider } from "react-redux";
import globalDataStore from '@Admin/store/globalDataStore';
import setInitialBlocksStatuses  from '@Utils/setInitialBlocksStatuses';

let currentState = globalDataStore.getState();

if ( ! currentState.blocksStatuses || 0 === currentState.blocksStatuses.length ) {

	setInitialBlocksStatuses( globalDataStore );
}

ReactDOM.render(
	<Provider store={globalDataStore}>
		<SettingsWrap/>
	</Provider>,
	document.getElementById( 'uag-dashboard-app' )
);