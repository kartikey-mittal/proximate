import './App.css';
import Layout from './Layout';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
        <SideBar />
        <Layout />
      </div>
    </>
  );
}

export default App;