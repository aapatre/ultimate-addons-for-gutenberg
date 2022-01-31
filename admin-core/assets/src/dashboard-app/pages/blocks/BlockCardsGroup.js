import BlockCard from '@DashboardApp/pages/blocks/BlockCard';
import { useSelector } from 'react-redux';

const BlockCardsGroup = () => {

    const activeBlocksFilterTab = useSelector( (state) => state.activeBlocksFilterTab );

    const blocksInfo = uag_react.blocks_info;
    
    const renderBlockCards = blocksInfo.map( ( block, index ) => {

        let blockCategories = block['admin_categories'];
        let showBlockCard = blockCategories.includes(activeBlocksFilterTab) || 'all' === activeBlocksFilterTab;

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
        activeBlocksFilterTab: state.activeBlocksFilterTab,
    };
};
const MapDispatchToProps = (dispatch) => {
    return {
        updateBlockStatuses: (blocksStatuses)=> dispatch({type:'UPDATE_BLOCK_STATUSES', payload: blocksStatuses}),
    }
}; 

export default BlockCardsGroup;