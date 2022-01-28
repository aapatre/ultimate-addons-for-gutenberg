import BlockCard from '@DashboardApp/pages/blocks/BlockCard';

const BlockCardsGroup = (props) => {

    const {
        blocksStatuses,
        updateFlag,
        setupdateFlag
    } = props;

    const blocksInfo = uag_react.blocks_info;
    
    const renderBlockCards = blocksInfo.map( ( block, index ) => {
		return <BlockCard key={ index } blockInfo={ block } blocksStatuses={ blocksStatuses[block.slug] ? blocksStatuses[block.slug] : 'disabled'} setupdateFlag={setupdateFlag} updateFlag={updateFlag} />}
	);
    
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 p-6">
            { renderBlockCards }
        </div>
    );
};

export default BlockCardsGroup;