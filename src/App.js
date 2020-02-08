import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "node_modules/video-react/dist/video-react.css";
// import "font-awesome/css/font-awesome.min.css";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="container">
      <Routes />;
    </div>
  );
}

export default App;
