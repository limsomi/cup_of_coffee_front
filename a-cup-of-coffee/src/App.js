import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./js/pages/categoryPage";
import MainPage from "./js/pages/MainPage";
import WritePage from "./js/pages/WritePage";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="main" element={MainPage()}/>
        <Route path="category" element={CategoryPage()} />
        <Route path="write" element={WritePage()} />
      </Routes>
    </Fragment>
  );
}

export default App;
