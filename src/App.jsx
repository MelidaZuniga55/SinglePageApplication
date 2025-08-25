import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Player from './components/Player';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Library from './pages/Library';
import Login from './pages/Login';
import Search from './pages/Search';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Datos de canciones
  const songs = [
    {
      id: 1,
      title: "Bohemian Rhapsody",
      artist: "Queen",
      duration: "5:55",
      cover: "https://i.scdn.co/image/ab67616d0000b27328581cfe196c266c132a9d62",
      genre: "Rock"
    },
    {
      id: 2,
      title: "Earned It",
      artist: "The Weeknd",
      duration: "4:37", // duración aproximada
      cover: "https://i.ytimg.com/vi/1mOGF169Eno/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLANgxZTN8nleRmrNLa3WEaPMTIcXw", // puedes reemplazar con la URL de la carátula si quieres una imagen
      genre: "R&B"
    },
    {
      id: 3,
      title: "Margaret",
      artist: "Lana Del Rey",
      duration: "3:35", // duración aproximada
      cover: "https://akamai.sscdn.co/uploadfile/letras/albuns/8/8/0/f/1724891679602733.jpg", // puedes reemplazar con la URL de la portada si quieres imagen real
      genre: "Indie/Pop"
    },

      {
      id: 4,
      title: "Sonata Patética",
      artist: "Ludwig van Beethoven",
      duration: "7:25", // duración aproximada del primer movimiento
      cover: "https://m.media-amazon.com/images/I/51R8CXz90mL.jpg", // puedes reemplazar con la portada o una imagen representativa
      genre: "Clásica"
      }
  ];

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <Router>
      <div className="App">
        <Header user={user} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home user={user} />} />
            <Route 
              path="/discover" 
              element={<Discover songs={songs} setCurrentSong={setCurrentSong} />} 
            />
            <Route path="/library" element={<Library />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        {currentSong && (
          <Player 
            currentSong={currentSong} 
            isPlaying={isPlaying} 
            setIsPlaying={setIsPlaying} 
          />
        )}
      </div>
    </Router>
  );
}

export default App;