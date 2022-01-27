import { __ } from '@wordpress/i18n';

const Welcome = (props) => {

    return(
        <main className="py-6">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Page title</h1>
            {/* Main 3 column grid */}
            <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
              {/* Left column */}
              <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                  <h2 className="sr-only" id="section-1-title">
                    Section title
                  </h2>
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                    <div className="p-6">
                         <h2>{__( 'Powerful Blocks & Beautiful Templates for any kind of website.', 'ultimate-addons-for-gutenberg' )}</h2>
                         <iframe width="100%" height="380px" src="https://www.youtube.com/embed/N-MLUplUoZc?showinfo=0&controls=0" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
                         <span className="relative z-0 inline-flex shadow-sm rounded-md py-6 justify-center w-full">
                            <button
                                type="button"
                                className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-wpcolor text-[#fff] text-sm font-medium hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                Create New Page
                            </button>
                            <button
                                type="button"
                                className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                Read Full Guide
                            </button>
                        </span>
                    </div>
                  </div>
                </section>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-1 gap-4">
                <section aria-labelledby="section-2-title">
                  <h2 className="sr-only" id="section-2-title">
                    Section title
                  </h2>
                  <div className="rounded-lg bg-white overflow-hidden shadow">
                    <div className="p-6">{/* Your content */}</div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
    );
};

export default Welcome;