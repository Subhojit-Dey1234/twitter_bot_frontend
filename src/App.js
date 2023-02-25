import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoContainer from "./Components/VideoContainer";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/:id" element = {<VideoContainer/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
