import React from "react";

const Sidebar = ({ onMenuSelect }) => {
  return (
    <>
      <style>{`
        :root {
          --color-primary: #e600ff;
          --color-bg-start: #1a1a40;
          --color-bg-end: #090016;
          --color-white: #ffffff;
          --color-gray-400: #9ca3af;
          --color-black: #000000;
          --btn-hover-bg: #e600ff;
        }
        aside.sidebar {
          width: 16rem;
          background: linear-gradient(to bottom, var(--color-bg-start), var(--color-bg-end));
          color: var(--color-white);
          padding: 1rem;
          min-height: 100vh;
          border-top-right-radius: 1rem;
          border-bottom-right-radius: 1rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
        }
        aside.sidebar .logo-container {
          margin-bottom: 2.5rem;
        }
        aside.sidebar img.logo {
          width: 2.5rem;
          height: 2.5rem;
        }
        .section-title {
          color: var(--color-primary);
          font-weight: 700;
          margin-bottom: 0.5rem;
          font-size: 0.875rem;
        }
        ul.menu {
          list-style: none;
          padding-left: 0.5rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        ul.menu li {
          cursor: pointer;
        }
        li.text-gray {
          color: var(--color-gray-400);
          display: flex;
          align-items: center;
        }
        .badge {
          background-color: #b91c94;
          padding: 0.125rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          margin-left: 0.5rem;
          font-weight: 600;
        }
        .logout-btn {
          margin-top: 2.5rem;
          background-color: var(--color-black);
          color: var(--color-white);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          width: 100%;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        .logout-btn:hover {
          background-color: var(--btn-hover-bg);
        }
      `}</style>

      <aside className="sidebar">
        <div className="logo-container">
          <img src="/logo.png" alt="Logo" className="logo" />
        </div>
        <div className="text-sm">
          <p className="section-title">Events</p>
          <ul className="menu">
            <li onClick={() => onMenuSelect('newRequests')}>New Requests</li>
            <li className="text-gray" onClick={() => onMenuSelect('estimate')}>
              Estimate <span className="badge">9</span>
            </li>
            <li onClick={() => onMenuSelect('eventTable')}>Events</li>
            <li onClick={() => onMenuSelect('partialRequests')}>Partial Requests</li>
          </ul>
          <p className="section-title" style={{ marginTop: "1.5rem" }}>Users</p>
          <ul className="menu">
            <li onClick={() => onMenuSelect('admins')}>Admins</li>
            <li onClick={() => onMenuSelect('clients')}>Clients</li>
            <li onClick={() => onMenuSelect('coordinators')}>Coordinators</li>
          </ul>
          <button className="logout-btn">Logout</button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
