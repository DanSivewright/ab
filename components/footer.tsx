type Props = {}
export const Footer: React.FC<Props> = ({}) => {
  return (
    <footer className="relative pb-24 flex overflow-hidden flex-col w-full mt-3 bg-muted">
      <p className="absolute opacity-5 right-20 -bottom-[25%] w-full text-nowrap text-[12vw] font-black italic text-black">
        ABOVE BROOKLYN®
      </p>

      <div className="px-4 z-10 sm:px-6 lg:px-16">
        <div className="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-black">
              <div>
                <p className="font-semibold leading-6 text-black uppercase">
                  Above Brookly
                </p>
                <p className="mt-1 text-sm">
                  Bongani to give me company slogan
                </p>
              </div>
            </div>
            <nav className="flex gap-8 mt-11">
              <a
                className="hover:delay-[0ms] relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-500 transition-colors delay-150 hover:text-blue-600"
                href="#_"
              >
                <span className="relative z-10">Twitter</span>
              </a>
              <a
                className="hover:delay-[0ms] relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-500 transition-colors delay-150 hover:text-blue-600"
                href="#_"
              >
                <span className="relative z-10">Instagram</span>
              </a>
              <a
                className="hover:delay-[0ms] relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-500 transition-colors delay-150 hover:text-blue-600"
                href="#_"
              >
                <span className="relative z-10">Facebook</span>
              </a>
              <a
                className="hover:delay-[0ms] relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-500 transition-colors delay-150 hover:text-blue-600"
                href="#_"
              >
                <span className="relative z-10">FAQs</span>
              </a>
            </nav>
          </div>
          <div className="relative flex items-center self-stretch p-4 -mx-4 transition-colors group hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex items-center justify-center flex-none w-24 h-24 rounded-full bg-foreground">
              <span className="font-mono italic text-white">AB</span>
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-black">
                <a href="#_">
                  <span className="absolute inset-0 sm:rounded-2xl"></span>
                  Stay updated
                </a>
              </p>
              <p className="mt-1 text-sm text-gray-500 hover:text-blue-600">
                Follow us for social media for news and updates
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center pt-8 pb-12 border-t border-gray-200 md:flex-row-reverse md:justify-between md:pt-6">
          <div className="max-w-xl">
            <form
              className="flex flex-col items-center justify-center max-w-sm mx-auto"
              action=""
            >
              <div className="flex flex-col w-full gap-1 mt-3 sm:flex-row">
                <input
                  name="email"
                  type="email"
                  className="block w-full px-4 py-2 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded-full font-spline placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600/50 disabled:opacity-50"
                  placeholder="Enter your email..."
                />
                <button
                  type="button"
                  className="inline-flex  w-full items-center justify-center rounded-full border-2 border-black bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
                >
                  <div style={{ position: "relative" }}></div>
                  Subscribe
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-4 h-auto ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <p className="mt-6 text-sm text-gray-500 md:mt-0">
            © Copyright 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
