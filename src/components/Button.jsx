export default function OverlayButton(props) {
  const { open, setOpen } = props;
  return (
    <button className="btn-toggle" onClick={() => setOpen((open) => !open)}>
      {open ? "–" : "+"}
    </button>
  );
}
