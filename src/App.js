import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Read from './components/Read';
import Create from './components/Create';

//importing components from my folder so I can delcare it within app and display these components within the app.
//wrapping the app in BrowserRouter and using Routes and Route to define different routes for the app..
//below there is some routing logic. each route link to a different component
//home link will display content.js
//Client-side routing
//Routers main goal is to supply the browser with an asynchronous URL that corresponds to the data that will show on the web page.
//It is mainly used to create single-page web apps since it retains the application's regular structure and functionality.

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Content/>} />
          <Route path="/read" element={<Read/>} />
          <Route path="/create" element={<Create/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
