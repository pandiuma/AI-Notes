export default function SearchBar({ query, setQuery }) {
    return (
        <input
            className="search"
            placeholder="Search notes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    );
}