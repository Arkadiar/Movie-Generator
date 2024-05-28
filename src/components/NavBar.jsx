export default function NavBar(props) {
  const { query, setQuery, setPage } = props;
  function evHandle(e) {
    setQuery(e.target.value);
    setPage(1);
  }
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
        onChange={(e) => evHandle(e)}
      />
      {/* <p className="num-results">
        Found <strong>{movies.length}</strong> results
      </p> */}
    </nav>
  );
}
