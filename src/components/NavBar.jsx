export default function NavBar(props) {
  const { query, setQuery, setPage, setShowInfoModal, setShow } = props;
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
      <button
        onClick={() =>
          setTimeout(() => {
            setShowInfoModal(true);
            setTimeout(() => {
              setShow(true);
            }, 2);
          }, 1)
        }
        className="info-button"
        aria-label="Info"
      >
        <span className="info-icon">I</span>
      </button>
    </nav>
  );
}
