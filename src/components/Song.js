const Song = ({ currentSong, playSongHandler, setLibraryStatus }) => {
  return (
    <div className="song-container" onClick={() => setLibraryStatus(false)}>
      <img onClick={playSongHandler} alt="cover" src={currentSong.cover}></img>
      <h2>{currentSong.name}</h2>
      <h3>{currentSong.artist}</h3>
    </div>
  );
};

export default Song;
