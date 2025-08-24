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
      cover: "🎵",
      genre: "Rock"
    },
    {
      id: 2,
      title: "Blinding Lights", 
      artist: "The Weeknd",
      duration: "3:22",
      cover: "🎵",
      genre: "Pop"
    },
    {
      id: 3,
      title: "Shape of You",
      artist: "Ed Sheeran",
      duration: "3:54",
      cover: "🎵",
      genre: "Pop"
    },
    {
      id: 4,
      title: "Bad Guy",
      artist: "Billie Eilish",
      duration: "3:14",
      cover: "🎵",
      genre: "Electrónica"
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