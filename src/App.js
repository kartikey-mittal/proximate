import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <div style={{ display: 'grid' }}>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </div>
    </>
  );
}

function AppContent() {
  const location = useLocation();

  // Define an array of paths where SideBar should not be displayed
  const pathsWithoutSideBar = ['/login','/signup','/room/meet'];

  // Check if the current path is in the pathsWithoutSideBar array
  const showSideBar = !pathsWithoutSideBar.includes(location.pathname);

  // Define gridTemplateColumns based on whether SideBar should be displayed
  const gridTemplateColumns = showSideBar ? '250px auto' : 'auto';

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns }}>
        {showSideBar && <SideBar />}
        <Layout />
      </div>
    </>
  );
}

export default App;
