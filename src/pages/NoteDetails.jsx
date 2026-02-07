import { useParams } from "react-router-dom";

export default function NoteDetails() {
    const { id } = useParams();
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const note = notes.find((n) => n.id === Number(id));

    if (!note) return <p>Note not found</p>;

    return (
        <div className="container">
            <h2>{note.title}</h2>
            <p>{note.content}</p>
            {note.summary && (
                <>
                    <h4>AI Summary</h4>
                    <p>{note.summary}</p>
                </>
            )}
        </div>
    );
}