import React from 'react'

export const Navbar = () => {
  return (
    <>
        <header className='bg-[#101419] border-b-2 border-[#293038]'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between py-3 lg:px-8'>
                <div className="flex lg:flex-1">
                    <a href="/" className="inline-flex p-1.5">
                        <img className="h-11 w-auto" src="/src/assets/img/FreeRail_Logo.png" alt=""/>
                        <span className="text-white text-xl lg:text-3xl mx-4 font-bold">FreeRail</span>
                    </a>
                </div>
                <div className='flex md:hidden'>
                    <button  type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-bold flex flex-col p-6 md:p-0 md:items-center mt-4 border border-[#e26767] rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <div className='relative'>
                                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="text" className='rounded-md border-0 w-60 py-1.5 pl-9 text-white bg-[#293038]' placeholder='Buscar'/>
                            </div>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
    </>
  )
}
