import {
    BellIcon,
    CreditCardIcon,
    KeyIcon,
    UserCircleIcon,
    ViewGridAddIcon,
} from '@heroicons/react/outline'

import { __ } from '@wordpress/i18n';

import { useSelector, useDispatch } from 'react-redux';
import AssetsGeneration from '@DashboardApp/pages/settings/AssetsGeneration';
import RegenerateAssets from '@DashboardApp/pages/settings/RegenerateAssets';
import TemplatesButton from '@DashboardApp/pages/settings/TemplatesButton';
import RollBack from '@DashboardApp/pages/settings/RollBack';
import BetaUpdates from '@DashboardApp/pages/settings/BetaUpdates';
import SelectedFontFamilies from '@DashboardApp/pages/settings/SelectedFontFamilies';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Settings = () => {
    
    const dispatch = useDispatch();

    const activeSettingsNavigationTab = useSelector( (state) => state.activeSettingsNavigationTab );

    const navigation = [
        { name: __( 'Asset Generation', 'ultimate-addons-for-gutenberg' ), slug: 'asset-generation', icon: UserCircleIcon },
        { name: __( 'Templates', 'ultimate-addons-for-gutenberg' ), slug: 'templates', icon: KeyIcon },
        { name: __( 'Version Control', 'ultimate-addons-for-gutenberg' ), slug: 'version-control', icon: BellIcon },
        { name: __( 'Performance', 'ultimate-addons-for-gutenberg' ), slug: 'fonts-performance', icon: CreditCardIcon },
        { name: __( 'Global Settings', 'ultimate-addons-for-gutenberg' ), slug: 'global-settings', icon: ViewGridAddIcon },
      ];

    return (
        <main className="max-w-7xl mx-auto my-6 pb-10 lg:py-6 lg:px-8 bg-white rounded-lg shadow overflow-hidden min-h-screen">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
                <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3 border-r-2">
                    <nav className="space-y-1">
                        {navigation.map((item) => (
                        <a
                            key={item.name}
                            className={classNames(
                            activeSettingsNavigationTab === item.slug
                            ? 'bg-gray-50 text-blue-600 hover:bg-white'
                            : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                            'group cursor-pointer rounded-md px-3 py-2 flex items-center text-sm font-medium'
                            )}
                            onClick={ () => dispatch({type:'UPDATE_SETTINGS_ACTIVE_NAVIGATION_TAB', payload: item.slug}) }
                        >
                        <item.icon
                            className={classNames(
                            activeSettingsNavigationTab === item.slug ? 'text-blue-500' : 'text-gray-400 group-hover:text-gray-500',
                            'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                            )}
                            aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                        </a>
                    ))}
                    </nav>
                </aside>
                <div className='space-y-6 sm:px-6 lg:px-0 lg:col-span-9'>
                    { 'asset-generation' === activeSettingsNavigationTab && 
                        <>
                            <AssetsGeneration/>
                            <RegenerateAssets/>
                        </>
                    }
                    { 'templates' === activeSettingsNavigationTab && 
                        <TemplatesButton/>
                    }
                    { 'version-control' === activeSettingsNavigationTab && 
                        <>
                            <RollBack/>
                            <BetaUpdates/>
                        </>
                    }
                    { 'fonts-performance' === activeSettingsNavigationTab &&
                        <>
                            <SelectedFontFamilies/>
                        </>
                    }
                </div>
            </div>
        </main>
    );
};

export default Settings;