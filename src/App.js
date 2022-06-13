function App() {
  return (
    <div className="App flex h-auto sm:h-screen w-full justify-center items-center bg-back flex-col p-5 sm:p-0">
      <h2 className="text-center text-textColor text-2xl font-bold mb-4">
        Tailwind İle Card Tasarımı
      </h2>
      <div className="card flex flex-col bg-cardBack w-full sm:w-1/3 rounded-2xl p-6 shadow-md shadow-buttonBack3">
        <div className="bg-buttonBack1 h-16 w-16 flex justify-center items-center rounded-full mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            height="32"
            width="32"
            fill="#E68226"
          >
            <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z" />
          </svg>
        </div>
        <h2 className=" text-textColor text-2xl font-bold mb-4 ">
          React Tailwind CSS!!!
        </h2>
        <p className="text-textColor1">
          React İle Tailwind Olayı React İle Tailwind OlayıReact İle Tailwind
          OlayıReact İle Tailwind OlayıReact İle Tailwind OlayıReact İle
          Tailwind Olayı
        </p>
        <div className="flex sm:flex-row flex-col justify-between mt-4">
          <button className="text-textColor bg-buttonBack1 buttons">1</button>
          <button className="text-textColor bg-buttonBack1 buttons">2</button>
          <button className="text-textColor bg-buttonBack1 buttons">3</button>
          <button className="text-textColor bg-buttonBack2 buttons">4</button>
          <button className="text-textColor bg-buttonBack3 buttons">5</button>
        </div>
        <button className="bg-buttonSubmit font-semibold text-lg rounded-3xl text-buttonBack3 w-full mt-4 p-3">SUBMIT</button>
      </div>
    </div>
  );
}

export default App;
