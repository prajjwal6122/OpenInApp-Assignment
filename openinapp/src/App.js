// App.js
import React from 'react';
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
          {/* Set Login as the default route */}
          <Route path="/" element={<Login />} index />

          {/* Nested route for other pages */}
          <Route path="/layout" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/layout/upload" element={<Upload />} />
            <Route path="/layout/invoice" element={<Invoice />} />
            <Route path="/layout/schedule" element={<Schedule />} />
            <Route path="/layout/calendar" element={<Calendar />} />
            <Route path="/layout/notification" element={<Notification />} />
            <Route path="/layout/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
