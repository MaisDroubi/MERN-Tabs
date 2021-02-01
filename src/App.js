import React, { useState } from 'react';
import Tabs from './components/Tabs';

function App() {
  const tab_list = [
    {tab_name: "Tab 1", tab_content: "Tab 1 content is showing here", callback(){
    }},
    {tab_name: "Tab 2", tab_content: "Tab 2 content is showing here", callback(){
    }},
    {tab_name: "Tab 3", tab_content: "Tab 3 content is showing here", callback(){
    }},
  ];
  return (
    <div className="App">
      <Tabs tab_list={tab_list}/>

    </div>
  );
}

export default App;
