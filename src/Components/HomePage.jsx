import { useState, useEffect } from "react";
import img1 from './recents/1.jpg'
import img2 from './recents/2.jpg'
import img3 from './recents/3.jpg'
import img4 from './recents/4.jpg'
import img5 from './recents/5.jpg'
import img6 from './recents/6.jpg'
import img7 from './recents/7.jpg'
import img8 from './recents/8.jpg'

import img11 from '../assets/albumsCover/1.jpg'
import img22 from '../assets/albumsCover/2.jpg'
import img33 from '../assets/albumsCover/3.jpg'
import img44 from '../assets/albumsCover/4.jpg'
import img55 from '../assets/albumsCover/5.jpg'
import img66 from '../assets/albumsCover/6.jpg'
import img77 from '../assets/albumsCover/7.jpg'
import img88 from '../assets/albumsCover/8.png'
import { slice } from "lodash";

function HomePage(){

    function CategoryList() {

        const [selectedCategory, setSelectedCategory] = useState('All');

        const handleClick = category => {
            if(selectedCategory != category){
                setSelectedCategory(category);
            }
        };

        return(
            <ul className="flex flex-row gap-x-2.5">
                {["All", "Music", "Podcasts"].map
                (category => (
                    <li key={category} 
                     onClick={() => handleClick(category)} className={`cursor-pointer p-3.5 py-2 rounded-2xl ${selectedCategory === category ? "bg-[#ffffff] text-black" : "bg-[#121212] text-white"}`}>
                        <button>
                            <h3>{category}</h3>
                        </button>
                    </li>
                 ))}
            </ul>
        )
    }
    

    function GeneratesPlaylist({img, text, descreption}){
        return(
                <div style={{borderRadius:"6px"}} className="hover:bg-[#2f2e2e] p-2 flex flex-col gap-2 w-[300px]">
                    <img style={{width:"s", borderRadius:"6px"}} src={img} alt="img" />
                    <h3 className="text-xl text-wrap">
                        {text}
                    </h3>
                    <p className="text-gray-400 text-base">
                        {descreption.slice(0, 55) + '...'}
                    </p>
                </div>
        )
    }

    function GenerateArtists({img, text, descreption}){

        return(
            <div className="hover:bg-[#2f2e2e] p-2 flex flex-col gap-2 w-[200px] rounded-[6px] items-center">
                    <img style={{width:"150px", height:"150px", borderRadius:"50%"}} src={img} alt="img" />
                    <h3 className="text-xl text-wrap">
                        {text}
                    </h3>
                    <p className="text-gray-400 text-base">
                        {descreption}
                    </p>
                </div>
        )
    }

    return(
        <>
            <div className="w-[100%] h-[10%] sticky top-0 bg-linear-to-t from-[#272626] to-[#292929] p-2 pt-4 pb-4">
                <CategoryList />
            </div>
            <div className="grid grid-cols-4 grid-rows-2 gap-2 ">
                    <div style={{borderRadius:"6px"}} className="flex flex-row gap-2 bg-[#121212] ">
                        <img style={{width:"70px", height:"70px", borderRadius:"6px"}} src={img1} alt="img1" />
                        <p className="self-center font-bold text-xs  pr-1 lg:text-sm">MyPlaylist#1</p>
                    </div>
                    <div style={{borderRadius:"6px"}} className="flex flex-row gap-2 bg-[#121212] ">
                        <img style={{width:"70px", height:"70px", borderRadius:"6px"}} src={img2} alt="img2" />
                        <p className="self-center font-bold text-xs  pr-1 lg:text-sm">MyPlaylist#2</p>
                    </div>
                    <div style={{borderRadius:"6px"}} className="flex flex-row gap-2 bg-[#121212] ">
                        <img style={{width:"70px", height:"70px", borderRadius:"6px"}} src={img3} alt="img3" />
                        <p className="self-center font-bold text-xs  pr-1 lg:text-sm">MyPlaylist#3</p>
                    </div>
                    <div style={{borderRadius:"6px"}} className="flex flex-row gap-2 bg-[#121212] ">
                        <img style={{width:"70px", height:"70px", borderRadius:"6px"}} src={img4} alt="img4" />
                        <p className="self-center font-bold text-xs  pr-1 lg:text-sm">MyPlaylist#4</p>
                    </div><div style={{borderRadius:"6px"}} className="flex flex-row gap-2 bg-[#121212] ">
                        <img style={{width:"70px", height:"70px", borderRadius:"6px"}} src={img5} alt="img5" />
                        <p className="self-center font-bold text-xs  pr-1 lg:text-sm">MyPlaylist#5</p>
                    </div>
                    <div style={{borderRadius:"6px"}} className="flex flex-row gap-2 bg-[#121212] ">
                        <img style={{width:"70px", height:"70px", borderRadius:"6px"}} src={img6} alt="img6" />
                        <p className="self-center font-bold text-xs  pr-1 lg:text-sm">MyPlaylist#6</p>
                    </div>
                    <div style={{borderRadius:"6px"}} className="flex flex-row gap-2 bg-[#121212] ">
                        <img style={{width:"70px", height:"70px", borderRadius:"6px"}} src={img7} alt="img7" />
                        <p className="self-center font-bold text-xs  pr-1 lg:text-sm">MyPlaylist#7</p>
                    </div>
                    <div style={{borderRadius:"6px"}} className="flex flex-row gap-2 bg-[#121212] ">
                        <img style={{width:"70px", height:"70px", borderRadius:"6px"}} src={img8} alt="img8" />
                        <p className="self-center font-bold text-xs  pr-1 lg:text-sm">MyPlaylist#8</p>
                    </div>
            </div>
            <div className="flex flex-col gap-2 text-3xl text-white mt-10 w-[100%] ">
                <h3 className="font-bold text-2xl">Made For .</h3>
                <div className="flex flex-row">
                    <GeneratesPlaylist img={img11} text={'Release Radar'} descreption={'Catch all the lastest music for the artists you follow, plus'}/>
                    <GeneratesPlaylist img={img44} text={'Remix 1'} descreption={'your favorites song mixed with our ai on your test so its aodad'}/> 
                    <GeneratesPlaylist img={img55} text={'Remix 2'} descreption={'King Von in the O/block praying  with lil derj'}/>
                    <GeneratesPlaylist img={img66} text={'Remix 3'} descreption={'i just lost my dawwwg and I was thick of it'}/>        
                    <GeneratesPlaylist img={img77} text={'Remix 6'} descreption={'what is the next step for the operation, low taper fade'}/> 
                    <GeneratesPlaylist img={img88} text={'Remix 7'} descreption={'do you know what else is massive ? low taper fade meme '}/>
                    </div>
            </div>
            <div className="flex flex-col gap-2 text-3xl text-white mt-10 w-[100%]">
                <h3 className="font-bold text-2xl">Albums featuring songs you like</h3>
                <div className="flex flex-row">
                    <GeneratesPlaylist img={img11} text={'Release Radar'} descreption={'Catch all the lastest music for the artists you follow, plus'}/>
                    <GeneratesPlaylist img={img44} text={'Remix 1'} descreption={'your favorites song mixed with our ai on your test so its aodad'}/> 
                    <GeneratesPlaylist img={img55} text={'Remix 2'} descreption={'King Von in the O/block praying  with lil derj'}/>
                    <GeneratesPlaylist img={img66} text={'Remix 3'} descreption={'i just lost my dawwwg and I was thick of it'}/>        
                    <GeneratesPlaylist img={img77} text={'Remix 6'} descreption={'what is the next step for the operation, low taper fade'}/> 
                    <GeneratesPlaylist img={img88} text={'Remix 7'} descreption={'do you know what else is massive ? low taper fade meme '}/>
                    </div>
            </div>
            <div className="flex flex-col gap-2 text-3xl text-white mt-10 w-[100%]">
                <h3 className="font-bold text-2xl">Favourite Artists</h3>
                <div className="flex flex-row">
                    <GenerateArtists img={img1} text={'Johan Libert'} descreption={'Serial Killer'}/>
                    <GenerateArtists img={img8} text={'Joel Miller'} descreption={'Saver'} />
                    <GenerateArtists img={img2} text={'Grimmer-San'} descreption={'Significent Steiner'} />
                </div>
                
            </div>
        </>
        
        
    )
}

export default HomePage;