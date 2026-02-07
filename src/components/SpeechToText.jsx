export default function SpeechToText({ setText }) {
    const startListening = () => {
        const SpeechRecognition =
            window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            alert("Speech recognition not supported");
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.start();

        recognition.onresult = (e) => {
            setText((prev) => prev + " " + e.results[0][0].transcript);
        };
    };

    return (
        <button onClick={startListening}>🎙️ Speak</button>
    );
}