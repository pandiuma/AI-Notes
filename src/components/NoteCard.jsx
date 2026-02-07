import { Link } from "react-router-dom";

export default function NoteCard({ note }) {
    return (
        <Link to={`/note/${note.id}`} className="note-card">
            <h3>{note.title}</h3>
            <p>{note.content.substring(0, 80)}...</p>
        </Link>
    );
}