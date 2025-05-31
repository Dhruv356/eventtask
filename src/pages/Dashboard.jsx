import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import EventCoordinatorPanel from '../components/EventCodinatorpanel';
import RoomList from '../components/Roomlist';
import PositionTable from '../components/Positiontable';
import EventTable from '../components/EventTable';

const Dashboard = () => {
  const [selectedView, setSelectedView] = useState('newRequests'); // default to 'newRequests'
const renderMainContent = () => {
  switch (selectedView) {
    case 'newRequests':
    case 'events': // treat both the same
      return (
        <>
          <EventCoordinatorPanel />
          <div className="main-panel">
            <RoomList />
            <PositionTable />
          </div>
        </>
      );
    case 'estimate':
      return <div style={{ padding: '1rem' }}>Estimate view here</div>;
    case 'eventTable':
      return <EventTable />;
    case 'admins':
      return <div style={{ padding: '1rem' }}>Admin management UI</div>;
    default:
      return <div style={{ padding: '1rem' }}>Coming Soon...</div>;
  }
};

  return (
    <>
      <style>{`
        :root {
          --color-background: #0d0b22;
        }
        .dashboard {
          display: flex;
          background-color: var(--color-background);
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
          color: white;
        }
        .content {
          flex: 1;
          padding: 1rem;
          display: flex;
          flex-direction: column;
        }
        .main-panel {
          display: flex;
          flex: 1;
          gap: 1rem;
          margin-top: 1rem;
        }
      `}</style>

      <div className="dashboard">
        <Sidebar onMenuSelect={setSelectedView} />
        <main className="content">
          <Topbar />
          {renderMainContent()}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
