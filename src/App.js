import React from 'react'
import Sidebar from './sidebar'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

const AppSidebar = () => {
  return (
    <Router>
      <div className="" style={{ background: 'rgba(33,150,243,5%)' }}>
        <Sidebar />
      </div>
    </Router>
  );
}

class App extends React.Component{
  render() {
    return (
      <AppSidebar />
    )
  }
}

export default App;