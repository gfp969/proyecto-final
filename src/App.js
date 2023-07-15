import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./auth/Login";
import { Logout } from "./auth/Logout";
import { Link, Route, Routes } from 'react-router-dom';
import Favorites from "./pages/Favorites";
import SearchBar from "./components/SearchBar";

function App() {

  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
              <div className="container">
                <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to='/favorites'>Favoritos</Link>
                <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to='/home'>Home</Link>
                <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to='/logout'>Logout</Link>
              </div>
            </nav>
          </>
        ) : (
          <Login />
        )}
      </header>
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/home" element={<SearchBar />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
}

export default App;