import StyleComponent from './styleomponent';

function App() {
  return (
    <div>
      <StyleComponent/>
    </div>
  );
}

export default App;







// import './App.css';
// import { UseReduce } from './usereducer';
// import { useState, createContext } from 'react';


// export const ThemeContext = createContext();

// function App() {
//   const [style, setStyle] = useState({ color: "black", backgroundColor: "white" });
//   const [Theme, setTheme] = useState("light");
//   const ToggleTheme = () => {
//     if (Theme == "light") {
//       setTheme("dark");
//       setStyle({color:"white",backgroundColor:"black"});
//   }
//     else {
//       setTheme("light");
//       setStyle({color:"black",backgroundColor:"white"});
//     }
//   }
//   console.log(Theme);
//   return (
//     <ThemeContext.Provider value={{ Theme, style }}> 
//       <div>
//         <p>hello from app</p>
//         <button onClick={ToggleTheme}>click</button>
//         <p style={style}>Theme: {Theme}</p>
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// // import {C1} from './Day7/c1';
// import { Container } from './Day7/Container';
// // import { useState } from 'react';
// import { User } from './Day7/User';
// import { useState,createContext } from 'react';
// export const themeContext=createContext();

// function App() {
//   const [theme,setTheme]=useState("Light")
//   const toggletheme=()=>{
//     setTheme((theme) => (theme === "Light" ? "Dark" : "Light"));//theme is the currentstate -what value is stored
//   }
//   return (
    
//     <div className="App">
//       {/* <C1/> */}

//       <themeContext.Provider value={theme}>
//       <button onClick={toggletheme}>click  theme</button>
      
//       <h1>App Component</h1>
      
//       <Container theme={theme}/>
//       </themeContext.Provider>
//     </div>
//   );
// }

// export default App;wvibgyor