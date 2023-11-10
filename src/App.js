import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Navigation from './routes/navigation/Navigation';
import PageNotFound from './routes/pageNotFound/PageNotFound';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />} >
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/about/:id' element={<About />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
