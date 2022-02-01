import apiFetch from '@wordpress/api-fetch';

const setInitialState = (store) => {
    apiFetch( {
        path: '/uag/v1/admin/commonsettings/',
    } ).then( ( data ) => {
        console.log(data);
        store.dispatch({type: 'UPDATE_BLOCK_STATUSES', payload: data.options.blocks_activation_and_deactivation});
        store.dispatch({type: 'UPDATE_FILE_GENERATION', payload: data.options.enable_file_generation});
        store.dispatch({type: 'UPDATE_TEMPLATES_BUTTON', payload: data.options.enable_templates_button});
        store.dispatch({type: 'UPDATE_BETA', payload: data.options.enable_beta_updates});
        store.dispatch({type: 'UPDATE_ENABLE_SELECTED_FONT_FAMILIES', payload: data.options.load_select_font_globally});
        store.dispatch({type: 'UPDATE_SELECTED_FONT_FAMILIES', payload: data.options.select_font_globally});
        store.dispatch({type: 'UPDATE_INITIAL_STATE_FLAG', payload: true});
    } );
};

export default setInitialState;