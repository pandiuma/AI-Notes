import { useState, useEffect } from "react";
import NoteCard from "../components/NoteCard";
import SearchBar from "../components/SearchBar";

export default function Home() {
    const [notes, setNotes] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(saved);
    }, []);

    const filtered = notes.filter(
        (n) =>
            n.title.toLowerCase().includes(query.toLowerCase()) ||
            n.content.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="home-bg">
            <div className="container">
                <SearchBar query={query} setQuery={setQuery} />
                <div className="notes-grid">
                    {filtered.map((note) => (
                        <NoteCard key={note.id} note={note} />
                    ))}
                </div>
            </div>
        </div>
    );
}