 import React from 'react';
import Pageination from './Pageination';
import Search from './Search';
import Stories from './Stories';
 
 const App = () => {
  return (
    <div>
       <Search/>
       <Pageination/>
       <Stories/>
    </div>
  );
 };
 
 export default App;