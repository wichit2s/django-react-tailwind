import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex justify-center">
      <header className="flex flex-col mx-auto">
        <img src={logo} className="mx-auto animate-pulse hover:animate-spin" alt="logo" width="512" height="512"/>
        <p className="font-mono m-10 mx-auto">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div class="mx-auto">
          <a
            className="font-sans text-center bg-green-600 text-white px-6 py-3 rounded mt-10 drop-shadow hover:text-green-200 hover:bg-gray-100"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <a href="https://github.com/wichit2s/django-react-tailwind" className="mx-auto mt-10 hover:text-green-600">
          https://github.com/wichit2s/django-react-tailwind
        </a>
      </header>
    </div>
  );
}

export default App;
