import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import EventTable from '../components/EventTable'

const Dashboard = () => {
  return (
    <>
      <style>{`
        :root {
          --color-background: #0d0b22;
          --font-family: system-ui, sans-serif;
        }
        .dashboard {
          display: flex;
          background-color: var(--color-background);
          min-height: 100vh;
          font-family: var(--font-family);
          color: white;
        }
        main.content {
          flex: 1;
          padding: 1.5rem; /* 6 in Tailwind is 1.5rem */
          display: flex;
          flex-direction: column;
        }
        .content > .topbar-wrapper {
          /* space below topbar */
          margin-top: 0;
        }
        .content > .table-wrapper {
          margin-top: 1.5rem; /* mt-6 is 1.5rem */
          flex-grow: 1;
        }
      `}</style>

      <div className="dashboard">
        <Sidebar />
        <main className="content">
          <div className="topbar-wrapper">
            <Topbar />
          </div>
          <div className="table-wrapper">
            <EventTable />
          </div>
        </main>
      </div>
    </>
  )
}

export default Dashboard
