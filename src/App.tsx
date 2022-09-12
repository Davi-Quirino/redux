import HomePage from "./components/home/HomePage";
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import AboutPage from "./components/about/AboutPage";




export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
