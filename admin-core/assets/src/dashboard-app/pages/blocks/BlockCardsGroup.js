import BlockCard from '@DashboardApp/pages/blocks/BlockCard';

const blocksInfo = uag_react.blocks_info;

const BlockCardsGroup = (props) => {

    const renderBlockCards = blocksInfo.map( ( block, index ) => {
		return <BlockCard key={ index } blockInfo={ block } />}
	);

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 p-6">
            { renderBlockCards }
        </div>
    );
};

export default BlockCardsGroup;