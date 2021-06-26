import React from "react";
import "./App.css";
import AdviceApp from "./components/advice/AdviceApp";
import {store} from './redux/store'
import { Provider } from "react-redux";





const App = () => {
  return (  
    
<Provider store={store}>
      <React.Fragment> 
        <AdviceApp/>
      </React.Fragment>
 </Provider>


  

  );
};

export default App;
