import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SpeechToText from "../components/SpeechToText";
import { summarizeText } from "../ai/summarizer";
import { getCurrentUser } from "../auth/auth";
import noteImg from "../assets/notes.jpg";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");
  const navigate = useNavigate();

  const currentUser = getCurrentUser();

  const saveNote = () => {
    if (!title || !content) {
      alert("Please add title and content");
      return;
    }

    const notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.push({
      id: Date.now(),
      title,
      content,
      summary,
      user: currentUser,
      createdAt: new Date().toISOString(),
    });

    localStorage.setItem("notes", JSON.stringify(notes));
    navigate("/");
  };

  return (
    <div className="container create-note">
      {/* LEFT SIDE - FORM */}
      <div className="create-left">
        <h2>Create New Note</h2>

        <input
          type="text"
          placeholder="Note title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your note..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="actions">
          <SpeechToText setText={setContent} />
          <button
            className="ai-btn"
            onClick={() => setSummary(summarizeText(content))}
          >
            🤖 Summarize
          </button>
        </div>

        {summary && (
          <div className="summary-box">
            <h4>AI Summary</h4>
            <p>{summary}</p>
          </div>
        )}

        <button className="save-btn" onClick={saveNote}>
          💾 Save Note
        </button>
      </div>

      <div className="create-right">
        <div className="image-wrapper">
          <img src={noteImg} alt="Create note illustration" />
        </div>
      </div>
    </div>
  );
}
