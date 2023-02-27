import { HashRouter as Router, Routes, Route } from "react-router-dom";
import VideoContainer from "./Components/VideoContainer";
import './App.css'
import HomeContainer from "./Components/HomeContainer";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomeContainer/>} />
          <Route path="/:id" element = {<VideoContainer/>} />
        </Routes>
      </Router>
      <div style={{background:"#1c3a68",padding:"10px 0"}}>
        <p style={{textAlign:"center",fontSize:"1.2em"}}>Build by Subhojit Dey 😁</p>
        <p style={{textAlign:"center"}}><a href="https://twitter.com/thesubhojitdey" style={{textDecoration:"none",color:"wheat"}}>@subhojitdey09</a></p>
      </div>
    </div>
  );
}

export default App;
