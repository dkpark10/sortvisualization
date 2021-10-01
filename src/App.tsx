import './css/App.css';
import rainbowColor from './modules/color';
import Sticks from './components/molecules/sticklist';
import SelectButton from './components/molecules/selectbutton';

const App = () => {

  console.log('app render');
  
  return (
    <>
      <nav>
        <p><span>length:ength </span></p>
        <p><span id='comparison'>comparison: 0</span></p>
        <p><span id='percentage'>percentage: 0</span></p>
        <p><span>delay : 10ms</span></p>
      </nav>
      <section className='sortboard'>
        <Sticks color={rainbowColor} />
      </section>
      <aside>
        <SelectButton />
      </aside>
    </>
  )
}

export default App;