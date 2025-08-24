import SongCard from '../components/SongCard';

const Discover = ({ songs, setCurrentSong }) => {
  const playSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="page">
      <h1>Descubrir Música</h1>
      
      <section className="songs-list">
        <h2>Todas las canciones</h2>
        <div className="songs-grid">
          {songs.map(song => (
            <SongCard 
              key={song.id} 
              song={song} 
              onPlay={playSong} 
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Discover;