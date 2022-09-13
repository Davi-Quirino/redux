import HomePage from "./components/home/HomePage";
import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import AboutPage from "./components/about/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import CoursesPage from "./components/courses/CoursesPage";




export default function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
