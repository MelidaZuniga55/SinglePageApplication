
const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="player">
      <div className="song-info">
        <img src={currentSong.cover} alt={currentSong.title} width="50" />
        <div>
          <h4>{currentSong.title}</h4>
          <p>{currentSong.artist}</p>
        </div>
      </div>
      <div className="player-controls">
        <button>⏮</button>
        <button onClick={togglePlay}>{isPlaying ? '⏸' : '▶'}</button>
        <button>⏭</button>
      </div>
    </div>
  );
};

export default Player;