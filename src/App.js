import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import Form from "./pages/Form";
import Detail from "./pages/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { getInitialData } from "./utils";
import { Route, Routes, Navigate } from "react-router-dom"; // Perhatikan penambahan 'dom' di sini

function App() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const notesUnarchive = (searchNotes || notes).filter((note) => !note.archived);
  const notesArchive = (searchNotes || notes).filter((note) => note.archived);
  const notesAll = (searchNotes || notes).map((note) => note);

  useEffect(() => {
    setSearchNotes(
      notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, notes]);

  

  return (
    <div className="note-app">
      <Header search={query} setQuery={setQuery} />
      
      <Routes>
        <Route path="/home" element={<Home notesUnarchive={notesUnarchive} setNotes={setNotes} />} />
        <Route path="/archive" element={<Archive notesArchive={notesArchive} setNotes={setNotes} />} />

        <Route path="/detail/:id" element={<Detail notesAll={notesAll} setNotes={setNotes} />} />
        <Route path="/form" element={<Form setNotes={setNotes} notesAll={notesAll} />} />

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<><div className="note-app__body"><h1>🙈404 Not Found🙊 </h1></div></>} />

      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
