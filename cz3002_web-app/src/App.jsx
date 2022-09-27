import React from 'react'
import CharacterPage from './components/characterpage/CharacterPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import BattlePage from './components/battle_page/BattlePage';

const App = () => {
  const renderContent = () => (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CharacterPage/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="profile" element={<CharacterPage/>}/>
          <Route path="battle" element={<BattlePage/>}/>
          <Route path="*" element={<h1>404</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  );

  return (
    <section>
        <h1>CZ3002 Web Application</h1>
        <div>
          {renderContent()}
        </div>
    </section>
  )
}

export default App