import { Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./components/AllMeetups";
import NewMeetupPage from "./components/NewMeetup";
import FavoritesPage from "./components/Favorites";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />}></Route>
        <Route path="/new-meetup" element={<NewMeetupPage />}></Route>
        <Route path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
