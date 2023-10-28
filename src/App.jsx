import { login } from "./services/apiAuth";

function App() {
  return (
    <>
      <button onClick={() => login()}>Login</button>
    </>
  );
}

export default App;
