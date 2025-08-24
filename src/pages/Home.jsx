
const Home = () => {
  return (
    <div className="page">
      <section className="hero">
        <h1>Bienvenido a Kodigo Music</h1>
        <p>Descubre nueva música y crea tus playlists</p>
      </section>
      
      <section className="featured">
        <h2>Playlists destacadas</h2>
        <div className="playlists-grid">
          <div className="playlist-card">
            <div className="cover">🎧</div>
            <h3>Éxitos del momento</h3>
          </div>
          <div className="playlist-card">
            <div className="cover">🔥</div>
            <h3>Nuevos lanzamientos</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;