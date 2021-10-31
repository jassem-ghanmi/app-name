import './App.css';
import Idk from './profile/Idk';


function App() {
  var tab=["nadim","khayem","jassem"];
  var age=20;
  const func= (name) => {
    alert(`${name} is learning react`)
  };

  return (
    <div className="App">
      <Idk tab={tab} age={age} func={func}/>
    </div>
  );
}

export default App;
