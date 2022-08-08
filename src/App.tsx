import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import { routeLists } from './utility/constants';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <MainRoute />
      </Router>
    </div>
  );
}

export default App;

function MainRoute() {
  return (
    <Routes>
      {routeLists.map(({ path, ...rest }, index) => (
        <Route key={index} path={path} element={<rest.element/>} />
      ))}
    </Routes>
  )
}