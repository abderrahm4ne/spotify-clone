import { useEffect, useState } from 'react'
import SideBar from './Components/SideBar'
import SearchBar from './Components/SearchBar';
import HomePage from './Components/HomePage';



function App() {
    
    const [sideBarWidth, setSideBarWidth] = useState('450px')
  return(
    <div className='h-screen w-[100%] px-1'>
      <div className='h-[8%]'>

      </div>
      <div className='flex flex-row gap-2 w-[100%] h-[81%]'>
        {
          // side bar
        }
        <div style={{width:sideBarWidth}} className='bg-[#121212] h-[100%] rounded-2xl flex flex-col gap-2 p-2 overflow-hidden'>
            <SideBar setSideBarWidth={setSideBarWidth} sideBarWidth={sideBarWidth} />
        </div>
        <div style={{width:`calc(100% - ${sideBarWidth})`}} className='h-[100%] flex flex-col bg-linear-to-t from-[#121212] to-[#292929] text-white px-5 rounded-2xl gap-4 overflow-scroll'>
            <HomePage />
        </div>
      </div>
      <div className='w-[100%] h-[10%] text-white text-4xl'>
      </div>
    </div>
  )
}

export default App
