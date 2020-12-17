import { playAudio } from "../util";

const LibrarySong = ({
  songs,
  isPlaying,
  audioRef,
  song,
  setCurrentSong,
  setSongs,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //add active state
    const newSongs = songs.map((el) => {
      if (song.id === el.id) {
        return {
          ...el,
          active: true,
        };
      } else {
        return {
          ...el,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    //check if the song is playing
    playAudio(isPlaying, audioRef);
  };
  return (
    <div
      onClick={songSelectHandler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
