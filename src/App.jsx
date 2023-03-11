import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SearchContainer from './components/SearchField'
import SearchResult from './components/SearchResult'
import LeafletMap from './components/LeafletMap'

function App() {

  return (<>
    <main>
      <SearchContainer />
      <SearchResult />
      <LeafletMap />
    </main>
  </>


  )
}

export default App
