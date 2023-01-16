import Home from './home/Home';
import Auth from './auth/Auth';
import { Container } from '@material-ui/core';
import Navbar from './component/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Container maxWidth="lg">
    <Navbar /> 
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/auth" element={<Auth />} />
    </Routes>
  </Container>
  );
}

export default App;
