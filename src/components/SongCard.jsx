
const SongCard = ({ song, onPlay }) => {
  return (
    <div className="song-card" onClick={() => onPlay(song)}>
      <img src={song.cover} alt={song.title} />
      <div className="song-info">
        <h4>{song.title}</h4>
        <p>{song.artist}</p>
        <span>{song.duration}</span>
      </div>
    </div>
  );
};

export default SongCard;