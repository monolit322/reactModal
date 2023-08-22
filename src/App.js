import React from "react";
import "./index.scss";

import Modal from "./Modal";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      {/* Если не нужна анимация */}
      {/* {
        open && (
          <div className="overlay">
        <div className="modal">
          <svg onClick={() => setOpen(false)} height="200" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img alt='wooou' src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div>
        )
      } */}

      {/* Если нужна анимация */}
      <Modal open={open} setOpen={setOpen}></Modal>
    </div>
  );
}

export default App;
