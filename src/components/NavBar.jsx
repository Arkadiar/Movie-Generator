export default function NavBar(props) {
  const { query, setQuery } = props;

  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🎬</span>
        <h1>Watch It!</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p> */}
    </nav>
  );
}
