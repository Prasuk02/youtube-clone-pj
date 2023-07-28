import './App.css';
import ContextApi from './context/ContextApi';
import Header from './components/Header';
import Feeds from './components/Feeds'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ChannelDetails from './components/ChannelDetails';

function App() {
  return (
    <>
      <ContextApi>
        <Router>
          <Header/>
          <Routes>
            <Route path='/' exact element={<Feeds/>}/>
            <Route path='/searchResult/:searchQuery' element={<SearchResult/>}/>         {/*DYNAMIC PATH :*/}
            <Route path='/video/:id' element={<VideoDetails/>}/>
            <Route path='/channel/:id' element={<ChannelDetails/>}/>
          </Routes>
        </Router>
      </ContextApi>
    </>
  );
}

export default App;
