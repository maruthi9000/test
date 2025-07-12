import React from 'react'

const SongPlayer = () => {
    const [songs, setSongs] = React.useState([]);
    const [currentIndex,setCurrentIndex] = React.useState(-1)
    const [newSong,setNewSong] = React.useState("")

    const handleAddSong = ()=>{
        if(newSong.trim()){
            setSongs([...songs, newSong.trim()]);
            if(songs.length === 0 ) setCurrentIndex(0);
            setNewSong('');
        }
    }
  
    const handleNext =() =>{
        if(songs.length === 0) return;
        setCurrentIndex(prev => (prev + 1) % songs.length);
    }
    const handlePrevious = ()=>{
        if(songs.length === 0) return;
        setCurrentIndex(prev => (prev -1 + songs.length)% songs.length)
    }

    const handleJumpTo = (index) =>{
        setCurrentIndex(index);
    }
    const handleDelete = (index) =>{
        const updatedSongs = songs.filter((_,i) => i !== index);
        setSongs(updatedSongs);
        if(updatedSongs.length === 0){
            setCurrentIndex(-1);
        }else if(index === currentIndex){
            setCurrentIndex(index % updatedSongs.length);
        }else if(index < currentIndex){
            setCurrentIndex(prev => prev -1);
        }
    }

    return (
      <div>
       <h1>Music playlist</h1>
       <div className="add-song">
        <input type="text" placeholder='enter song title' value={newSong} 
        onChange={(e)=> setNewSong(e.target.value)} />
       </div>
      </div>
    )
}

export default SongPlayer
