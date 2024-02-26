import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import MainPage from './pages/Mainpage';
import AudioPlay from './pages/AudioPlay';
import AudioRecord from './pages/AudioRecord';
import MyNav from './components/MyNav';

function App() {
  return (
    <>
      <MyNav />
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/AudioPlay' element={<AudioPlay/>}/>
        <Route path='/AudioRecord' element={<AudioRecord/>}/>
      </Routes>
    </>
  );
}

export default App;
