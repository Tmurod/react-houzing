import styled from "styled-components";
import "./root.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<h1>home</h1>} />
        <Route path="/properties" element={<h1>properties</h1>} />
        <Route path="/contacts" element={<h1>contacts</h1>} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Root;