import {useTypewriter, Cursor} from 'react-simple-typewriter'
import './App.css';
function App() {
  const [typeEffect] = useTypewriter({
    words: ['Fatec','Presidente Prudente'],
    loop:{},
    typeSpeed: 30,
    deleteSpeed: 40
  })

  const [typeEffecttwo] = useTypewriter({
    words: ['Software Engineering Laboratory'],
    loop:{},
    typeSpeed: 100,
    deleteSpeed: 40
  })

  return (
    <div className="App">
      <h1>
      I'm Pedro and I study at
      <span style={{fontWeight: 'bold', color: 'red', marginLeft: '5px'}}>{typeEffect}</span>
      </h1>
    

      <h1>
        <span style={{fontWeight: 'bold', color: 'red'}}>{typeEffecttwo}</span>
      </h1>
    </div>
  );
}

export default App;
