import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import './App.css';
import CardContainer from './CardContainer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-content">
      <CardContainer>
      <Card 
      title = "First Blog!!"
      imageUrl = "https://picsum.photos/200/300"
      content = "Lorem ipsum."
      />
      <Card 
      title = "Second Blog!!"
      imageUrl = "https://picsum.photos/200/300"
      content = "Lorem ipsum."
      />
      <Card 
      title = "Third Blog!!"
      imageUrl = "https://picsum.photos/200/300"
      content = "Lorem ipsum."
      />
      <Card 
      title = "Fourth Blog!!"
      imageUrl = "https://picsum.photos/200/300"
      content = "Lorem ipsum."
      />
      <Card 
      title = "Fourth Blog!!"
      imageUrl = "https://picsum.photos/200/300"
      content = "Lorem ipsum."
      />
      <Card 
      title = "Fourth Blog!!"
      imageUrl = "https://picsum.photos/200/300"
      content = "Lorem ipsum."
      />
      <Card 
      title = "Fourth Blog!!"
      imageUrl = "https://picsum.photos/200/300"
      content = "Lorem ipsum.sakdnhkasjhd jkashdjkhas jkhdkjas hdkj haskjdhjkas hdjkhas kjdhasjk h"
      />
      <Card 
      title = "Fourth Blog!!"
      imageUrl = "https://picsum.photos/200/300"
      content = "Lorem ipsum."
      />
      </CardContainer>
      </div>
      
      
      <Footer />
    </div>
  );
}

export default App;
