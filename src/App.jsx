import React from 'react'
import Navbar from './components/Navbar'
// import Manager from './components/Manager'
import PassOP from './components/PassOP'
import InputSection from './components/InputSection'
import PasswordTable from './components/PasswordTable'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-[#1c243f] min-h-screen w-[99vw]'>
    <Navbar/>
    <PassOP textSize='text-3xl' center='text-center' mt='mt-18' textColor ='text-white'/>
    <div className='text-gray-400 text-center text-lg'>
      Your own password manager
    </div>
    <InputSection/>
    
    {/* <PasswordTable/> */}
    <Footer/>
    {/* <Manager/> */}
    </div>
  )
}

export default App