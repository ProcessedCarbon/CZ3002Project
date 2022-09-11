import React from 'react'
import CharacterPage from './components/characterpage/CharacterPage'

const App = () => {
  const renderContent = () => (
    <>
      <CharacterPage />
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