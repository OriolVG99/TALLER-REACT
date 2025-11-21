import { useState, createContext } from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inici from './components/Inici';
import About from './components/About';
import LiveList from './components/LiveList';
import EventDetail from './components/EventDetail';
import NotFound from './components/NotFound';
import EventNotFound from "./components/EventNotFound";
import Login from "./components/Login";

export const UserContext = createContext();

function App() {
  const [usuari, setUsuari] = useState(null);

  return (
    <UserContext.Provider value={{ usuari, setUsuari }}>
      {!usuari ? (
        <Login />
      ) : (
        <>
          <Header />
          
          <Routes>
            <Route path="/" element={<Inici />} />
            <Route path="/events" element={<LiveList />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/events/*" element={<EventNotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <Footer />
        </>
      )}
    </UserContext.Provider>
  );
}

export default App;