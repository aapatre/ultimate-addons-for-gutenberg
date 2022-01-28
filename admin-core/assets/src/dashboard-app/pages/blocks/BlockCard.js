import UAGB_Block_Icons from '@Common/block-icons';
import { Switch } from '@headlessui/react'

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
                { UAGB_Block_Icons[slug] }
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 mb-0">{title}</p>
                <a className="text-sm text-gray-500 truncate" href={ `https://ultimategutenberg.com/blocks/${ link }` } target="_blank"rel="noreferrer">Live Demo</a>
            </div>
            <Switch
                checked={false}
                // onChange={setEnabled}
                className={`${false ? 'bg-teal-900' : 'bg-teal-700'}
                relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Use setting</span>
                <span
                aria-hidden="false"
                className={`${false ? 'translate-x-9' : 'translate-x-0'}
                    pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                />
            </Switch>
        </div>
    );
};

export default BlockCard;