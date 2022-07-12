import logo from './logo.svg';
import './App.css';
import { Todo } from './Todo/Todo';
import { Github } from './GithubUsers/Github';

function App() {
  return (
    <div className="App">
      <Todo/>
      <Github/>
    </div>
  );
}

export default App;
