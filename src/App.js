import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
        <BrowserRouter>
        <SideBar />
       
        <Layout />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;