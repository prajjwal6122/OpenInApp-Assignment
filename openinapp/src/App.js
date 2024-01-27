import logo from './logo.svg';
import '../src/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './components/dashBoard/dashboard';
import Upload from './components/upload/upload';
import Login from './components/login/login';
import Invoice from './components/invoice/invoice';
import Calendar from './components/calendar/calendar';
import Schedule from './components/schedule/schedule';
import Notification from './components/notification/notification';
import Settings from './components/settings/settings';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/invoice' element={<Invoice/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
        <Route path='/calendar' element={<Calendar/>}/>
        <Route path='/notification' element={<Notification/>}/>
        <Route path='/settings' element={<Settings/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
