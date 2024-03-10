import React from 'react'

export const Navbar = () => {
  return (
    <>
        <header className='bg-[#101419] border-b-2 border-[#293038]'>
            <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
                <div className="flex lg:flex-1">
                    <a href="#" className="inline-flex -m-1.5 p-1.5">
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
                        <span className="text-white text-xl lg:text-3xl pb-2 mx-4 font-bold">FreeRail</span>
                    </a>
                </div>
                <div className='flex md:hidden'>
                    <button  type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-bold flex flex-col p-6 md:p-0 md:items-center mt-4 border border-[#e26767] rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <a href="#about-me" className='block py-2 px-3 md:p-0 text-sm text-[#cdd9e4] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#df9a9a] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Sobre mi</a>
                        </li>
                        <li>
                            <a href="#projects" className='block py-2 px-3 md:p-0 text-sm text-[#cdd9e4] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#df9a9a] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Proyectos</a>
                        </li>
                        <li>
                            <a href="#concat" className='block py-2 px-3 md:p-0 text-sm text-[#cdd9e4] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#df9a9a] md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>Contacto</a>                    
                        </li>
                        <li>
                            <div className='relative'>
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="text" className='rounded-md border-0 w-60 py-2.5 pl-9 text-white bg-[#293038]' placeholder='Buscar'/>
                                <button type="submit" className="text-white absolute end-1 bottom-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                            </div>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
    </>
  )
}
