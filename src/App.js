import './App.css';
import Signin from './components/signin.js'
import Signup from './components/signup.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <>
          <Signin />
          <Signup />
        </>
      </header>
    </div>
  );
}

export default App;
