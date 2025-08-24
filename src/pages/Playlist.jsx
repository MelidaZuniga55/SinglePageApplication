import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";

function Playlist() {
  const { id } = useParams();

  const songs = {
    1: ["Amigo", "Spanish Girl", "El perdedor"],
    2: ["Khé?", "Ojitos lindos", "Andrea"],
    3: ["Lluvia", "Tu con él", "Deseandote"]
  };

  return (
    <>
      <Navbar />
      <div className="library">
        <h2>Playlist {id}</h2>
        <ul>
          {songs[id]?.map((song, index) => (
            <li key={index}>🎵 {song}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Playlist;
