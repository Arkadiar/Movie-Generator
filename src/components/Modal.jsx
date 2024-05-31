import React from "react";

export default function Modal({ showx, show, onClose }) {
  if (!show) return null;

  return (
    <>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className={`modal ${showx ? "show" : ""}`}>
        <div className="modal-header">
          <h2>About Watch It!</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          <p>
            Not sure what to watch? Use WatchIt! to get some suggestions based
            on what you like!
          </p>
          <br></br>
          <h4>
            <strong>Features:</strong>
          </h4>
          <ul>
            <li>- Search for movies using the search bar.</li>
            <li>- Click on a movie to add it to your watched list.</li>
            <li>- View detailed information about each movie.</li>
            <li>
              - Remove movies from your watched list by clicking on them again.
            </li>
            <li>
              - Receive dynamic movie recommendations based on your watched
              list.
            </li>
            <h4>
              <strong>How to use:</strong>
            </h4>
            <p>
              Simply search for a title, click it, and let the app do the magic!
              <br></br>
              Right click on a generated movie to find out more, you may really
              like it!
            </p>
          </ul>
        </div>
      </div>
    </>
  );
}
