import React from "react";
import Layout from "./Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./Card";
import "./App.css";
import CardContainer from "./CardContainer";
import About from "./About";

const blogPage = (
  <CardContainer>
    <Card
      title="First Blog!!"
      imageUrl="https://picsum.photos/200/300"
      content="Lorem ipsum."
      dateAdded="02/02/2022"
    />
    <Card
      title="Second Blog!!"
      imageUrl="https://picsum.photos/200/300"
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis aliquam risus. Fusce fermentum velit ut justo congue, ut tristique felis tincidunt. Nulla facilisi. Proin at sapien sit amet dui posuere ultricies nec a felis. Vivamus interdum, leo a tempor commodo, mi sapien malesuada dolor, id suscipit nisl leo et turpis. Mauris in ullamcorper lacus. Phasellus eu tellus nec libero suscipit consequat."
      dateAdded="21/12/2012"
    />
  </CardContainer>
);
const flag = "CTF{3num_is_k3y}";
const hidden = (
  <div>Who does not like a bit of enumeration? Good job! {flag}</div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={blogPage} />
          <Route path="about" element={<About />} />
          <Route path="secure" element={hidden} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
