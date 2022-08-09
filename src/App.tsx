import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/nav';
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
  const initialRoute = "/defi/overview";
  
  return (
    <Routes>
      <Route path="/" element={<Navigate to={initialRoute} />} />
      {routeLists.map(({ path, ...rest }, index) => (
        rest.subRouteLists ? (
          <Route key={index} path={path} element={<rest.element />} >
            {rest.subRouteLists.map((subRoute, subIndex) => (
              <Route key={subIndex} path={subRoute.path} element={<subRoute.element />} />
            ))}
          </Route>
        ) : (
          <Route key={index} path={path} element={<rest.element />} />
        )
      ))}
    </Routes>
  )
}