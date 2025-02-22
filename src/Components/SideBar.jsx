import SearchBar from "./toChange/SearchBar";
import { useEffect, useState, useRef } from "react";

function SideBar(){
    const [isSearch , setIsSearch] = useState(true);

    const [playlists, setPlaylists] = useState([]);


    const [clicked, setClicked] = useState(false);

    const playlistInputRef = useRef(null);

    const adderButton = useRef(null);

    const handleClickOutSide = (e) => {
        if(playlistInputRef.current && !playlistInputRef.current.contains(e.target) && !adderButton.current.contains(e.target)){
            setClicked(false);
        }
    }

    useEffect(() => {
        if(clicked){
            document.addEventListener('mousedown' , handleClickOutSide);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutSide);
        }
    }, [clicked]);

    function Categories() {

        const [selectedCategory, setSelectedCategory] = useState('Playlist');

        const handleClick = category => {
            if(selectedCategory != category){
                setSelectedCategory(category);
            }
        };

        return(
            <ul className="flex flex-row gap-2.5">
                {["Playlist", "Podcasts", "Albums", "Artists"].map
                (category => (
                    <li key={category} 
                     onClick={() => handleClick(category)} className={`cursor-pointer p-3.5 py-2 rounded-2xl ${selectedCategory === category ? "bg-[#ffffff] text-black" : "bg-[#1d1c1c] text-white"}`}>
                        <button>
                            <h3>{category}</h3>
                        </button>
                    </li>
                 ))}
            </ul>
        )
    }

    const handleCreatePlayList = () => {
        
            setPlaylists([...playlists, {title : 'MyPlaylist', songs: [] }])
        }


    return(
        <>
            <div className="flex flex-row justify-between items-center px-2 pt-2">
                <button >
                    <div className="flex flex-row items-center text-[#d3d9d3] gap-2 font-bold text-lg">
                        <img width={35} src="src/assets/locallibrary.svg" alt="library" />
                        <h1>
                            Your Library
                        </h1>
                    </div>
                </button>
                <div className="flex flex-row items-center gap-4 relative">
                    <button ref={adderButton} onClick={() => {
                        setClicked(!clicked)
                    }}>
                        <img width={30} src="src/assets/plus.svg" alt="add" />
                    </button>
                    {clicked && 
                        (
                            <div ref={playlistInputRef} className="flex flex-col w-50 bg-[#282828] text-white text-base absolute top-10 right-11 rounded-[6px] p-[4px]">
                                <button className="p-2 hover:bg-[#494949] rounded-[6px]" onClick={() => {
                                    setIsCreatingPlayList(true);
                                    handleCreatePlayList();
                                    
                                }}>Create a new playlist</button>
                                <button className="p-2 hover:bg-[#494949] rounded-[6px]">Create a playlist folder</button>
                            </div>
                        )
                    }
                    <button>
                        <img width={30} src="src/assets/rightarrow.svg" alt="" />
                    </button>
                </div>
            </div>
            <div className=" text-white text-xg flex-nowrap px-2 mt-2">
                <Categories />
            </div>
            <div className="flex flex-row items-center justify-between px-2">
                <div className="flex flex-row items-center">
                    <button onClick={() => 
                        setIsSearch(prev => !prev)
                    }>
                        <img src="src/assets/search.svg" alt="search" className="z-1" />
                    </button>

                    {<SearchBar hidden={isSearch} />}
                </div>
                    
                    
                    <button >
                        <div className="flex flex-row gap-2 text-[#d3d9d3]">
                            <h2>Recents</h2>
                            <img src="src/assets/recents.svg" alt=""/>
                        </div>
                    </button>

            </div>
            <div className="w-[100%] h-[0.1%] bg-[#2c2c2c]">
            </div>

            <div className="flex flex-col gap-2 overflow-auto">
                {playlists.map((playlist, i) => (
                    <div key={i} className="flex flex-row items-center p-2 rounded hover:bg-[#232323] gap-3 text-white">
                        <img width={35} src="src/assets/whiteHeart.svg" alt="playlist" />
                        <div className="flex flex-col">
                            <h1 className="text-[1.1rem]">MyPlaylist #{i}</h1>
                            <h3 className="text-gray-400 text-sm">Playlist • {playlist.songs.length} songs</h3>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default SideBar;