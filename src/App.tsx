import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="w-full min-h-screen bg-slate-100">
      <div className="max-w-7xl space-y-4 p-8 mx-auto w-full">
        <Button
          onClick={() => {
            console.log("click");
          }}
          size="sm"
        >
          Button text
        </Button>
        <br />
        <button
          type="button"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Button text
        </button>
      </div>
    </div>
  );
}

export default App;
