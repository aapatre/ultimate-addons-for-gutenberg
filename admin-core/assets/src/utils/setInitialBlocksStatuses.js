import apiFetch from '@wordpress/api-fetch';

const setInitialBlocksStatuses = (store) => {

    apiFetch( {
        path: '/uag/v1/admin/commonsettings/',
    } ).then( ( data ) => {
        store.dispatch({type: 'UPDATE_BLOCK_STATUSES', payload: data.options.blocks_activation_and_deactivation})
    } );
};

export default setInitialBlocksStatuses;