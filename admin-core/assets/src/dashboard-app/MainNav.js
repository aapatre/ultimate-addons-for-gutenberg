import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, useLocation } from 'react-router-dom';
import { __ } from '@wordpress/i18n';

function classNames( ...classes ) {
  return classes.filter( Boolean ).join( ' ' )
}

export default function MainNav() {
  const menus = [
    {
        name: __( 'Welcome', 'ultimate-addons-for-gutenberg' ),
        slug: uag_react.home_slug,
        path: '',
    },
    {
        name: __( 'Blocks', 'ultimate-addons-for-gutenberg' ),
        slug: uag_react.home_slug,
        path: 'blocks',
    },
    {
        name: __( 'Settings', 'ultimate-addons-for-gutenberg' ),
        slug: uag_react.home_slug,
        path: 'settings',
    },
  ];

  const query = new URLSearchParams( useLocation()?.search );
	const activePage = query.get( 'page' )
		? query.get( 'page' )
		: uag_react.home_slug;
	const activePath = query.get( 'path' ) ? query.get( 'path' ) : '';

  const onVisitWebsiteClick = () => {
		window.open(
			'https://ultimategutenberg.com',
			'_blank'
		);
	};

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {( { open } ) => (
        <>
          <div className="max-w-full mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={ uag_react.logo_url }
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                    { menus.map( ( menu , key ) => (
                        <Link
                            index = {key}
                            key={ `?page=${ menu.slug }&path=${ menu.path }` }
                            to={ {
                                pathname: 'options-general.php',
                                search: `?page=${ menu.slug }${
                                    '' !== menu.path ? '&path=' + menu.path : ''
                                }`,
                            } }
                            className={ `${
                                activePage === menu.slug && activePath === menu.path
                                    ? ' border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                            }` }
                        >
                            { menu.name }
                        </Link>
                    ) ) }
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 rounded-md border border-gray-300 bg-wpcolor text-[#fff] text-sm font-medium focus:z-10 focus:outline-non"
                    onClick={ onVisitWebsiteClick }
                >
                    {__( 'Visit Website', 'ultimate-addons-for-gutenberg' )}
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                
                className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                
                className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              >
                Calendar
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
