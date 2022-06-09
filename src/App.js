// import logo from './logo.svg';
// import './App.css';
// import {BrowserRouter,Route,Routes} from 'react-router-dom'
// import Home from './Component/Home';
// import Bolly from './Component/Bolly';
// import Tech from './Component/Tech';
// import Holly from './Component/Holly';
// import Fitness from './Component/Fitness';
// import Food from './Component/Food';
// import Api from './Component/Api';

// function App() {
//   return (
//     <Api>
//     <div className="App">
//       <BrowserRouter>
//          <Home/>
//         <Routes>
//             <Route path='/Bolly' element={<Bolly/>}/>
//             <Route path='/tech' element={<Tech/>}/>
//             <Route path='/holly' element={<Holly/>} />
//             <Route path='/fitness' element={<Fitness/>}/>
//             <Route path='/food'element={<Food/>}/>






//         </Routes>
      
      
      
      
      
      
//       </BrowserRouter>

     
//     </div>
//     </Api>
//   );
// }

// export default App;









import "./App.css";
import Header from "./Component/Header";
import { NewsProvide } from "./Component/NewsContext";
import Home from "./Component/Home";
import Categorybi from "./Component/Categorybi";
import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";
import Detailsn from "./Component/Detailsn";


function App() {
  return (
    <NewsProvide>
      <Router>
      <div className="container">
        <Header />

        
        
        

        
          <Routes>
            
            <Route path='' element={<Home/>}/>
            <Route path='/category' element={<Categorybi/>}>
              <Route path=':ctname/' element={<Categorybi/>}>
                {/* <Route path=':id'element={<Detailsn/>}/> */}
              </Route>
              
            </Route>

            <Route path='news/:cate'element={<Detailsn/>}>
              <Route path=':id' element={<Detailsn/>} />
            </Route>


          </Routes>
        {/* <Detailsn/> */}

        

        



      </div>
      </Router>
    </NewsProvide>
  );
}

export default App;