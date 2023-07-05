import React from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";
import Header from "./Header";
import NotFound from "./NotFound";
import SingleBlog from "./SingleBlog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogHome from "./BlogHome";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/blog" element={<BlogHome />}>
          <Route index element={<Blog />}></Route>
          <Route path=":id" element={<SingleBlog />}></Route>
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
