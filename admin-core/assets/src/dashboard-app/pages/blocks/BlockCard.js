import UAGB_Block_Icons from '@Controls/block-icons';
console.log(UAGB_Block_Icons);
const BlockCard = (props) => {
    const {
        doc,
        link,
        slug,
        title
    } = props.blockInfo;

    return (
        <div
        key={slug}
        className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
        >
            <div className="flex-shrink-0">
                { UAGB_Block_Icons.advanced_heading }
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 mb-0">{title}</p>
                <a className="text-sm text-gray-500 truncate" href={ `https://ultimategutenberg.com/blocks/${ link }` } target="_blank"rel="noreferrer">Live Demo</a>
            </div>
        </div>
    );
};

export default BlockCard;