import React from 'react'
import PassOP from './PassOP'

const Navbar = () => {
    return (
        <nav className='py-2 bg-blue-950 text-xl w-full  '>
        <div className='w-[90%] flex justify-between m-auto'>
            <PassOP textColor ='text-white'/>

            <button className='flex items-center gap-1 bg-[#22c55e] pr-1 py-0.5 rounded-full border-2 border-[#FFF8E7]'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={32}
                    height={28}
                >
                    {/* Cream Background */}
                    <circle cx="12" cy="12" r="12" fill="#FFF8E7" />

                    {/* Green GitHub Logo */}
                    <path
                        fill="#22c55e"
                        d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.71 1.25 3.37.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.03 11.03 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.44-2.68 5.42-5.24 5.71.41.35.78 1.04.78 2.1v3.11c0 .3.21.66.79.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
                    />
                </svg>
                <span className='text-lg'>Github</span>
            </button>
        </div>
        </nav>
    )
}

export default Navbar