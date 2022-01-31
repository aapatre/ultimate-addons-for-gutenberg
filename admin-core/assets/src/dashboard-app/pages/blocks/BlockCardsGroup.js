import BlockCard from '@DashboardApp/pages/blocks/BlockCard';
import { useSelector } from 'react-redux';

const BlockCardsGroup = () => {

    const activeFilterTab = useSelector( (state) => state.activeFilterTab );

    const blocksInfo = uag_react.blocks_info;
    
    const renderBlockCards = blocksInfo.map( ( block, index ) => {

        let blockCategories = block['admin_categories'];
        let showBlockCard = blockCategories.includes(activeFilterTab) || 'all' === activeFilterTab;

        if ( ! showBlockCard ) {
            return '';
        }

		return <BlockCard key={ index } blockInfo={ block } />}
	);
    
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 p-6">
            { renderBlockCards }
        </div>
    );
};

const MapStateToProps = (state) => {
    return {
        blocksStatuses: state.blocksStatuses,
        activeFilterTab: state.activeFilterTab,
    };
};
const MapDispatchToProps = (dispatch) => {
    return {
        updateBlockStatuses: (blocksStatuses)=> dispatch({type:'UPDATE_BLOCK_STATUSES', payload: blocksStatuses}),
    }
}; 

export default BlockCardsGroup;