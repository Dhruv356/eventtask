import React from "react";

const Sidebar = () => {
  return (
    <>
      <style>{`
        :root {
          --color-primary: #e600ff; /* pink */
          --color-bg-start: #1a1a40;
          --color-bg-end: #090016;
          --color-white: #ffffff;
          --color-gray-400: #9ca3af;
          --color-black: #000000;
          --btn-hover-bg: #e600ff;
        }
        aside.sidebar {
          width: 16rem; /* 64 in Tailwind = 16rem */
          background: linear-gradient(to bottom, var(--color-bg-start), var(--color-bg-end));
          color: var(--color-white);
          padding: 1rem;
          min-height: 100vh;
          border-top-right-radius: 1rem; /* rounded-r-2xl */
          border-bottom-right-radius: 1rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
        }
        aside.sidebar > div.logo-container {
          margin-bottom: 2.5rem; /* mb-10 */
        }
        aside.sidebar img.logo {
          width: 2.5rem; /* w-10 */
          height: 2.5rem; /* h-10 */
        }
        aside.sidebar .section-title {
          color: var(--color-primary);
          font-weight: 700;
          margin-bottom: 0.5rem;
          font-size: 0.875rem; /* text-sm */
        }
        aside.sidebar ul.menu {
          list-style: none;
          padding-left: 0.5rem; /* pl-2 */
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem; /* space-y-2 */
        }
        aside.sidebar ul.menu li {
          cursor: pointer;
        }
        aside.sidebar ul.menu li.text-gray {
          color: var(--color-gray-400);
          display: flex;
          align-items: center;
        }
        aside.sidebar ul.menu li.text-gray .badge {
          background-color: #b91c94; /* bg-pink-600 */
          padding: 0.125rem 0.5rem; /* px-2 py-0.5 */
          border-radius: 9999px; /* rounded-full */
          font-size: 0.75rem; /* text-xs */
          margin-left: 0.5rem; /* ml-2 */
          font-weight: 600;
          color: var(--color-white);
        }
        aside.sidebar button.logout-btn {
          margin-top: 2.5rem; /* mt-10 */
          background-color: var(--color-black);
          color: var(--color-white);
          padding: 0.5rem 1rem; /* px-4 py-2 */
          border-radius: 0.5rem;
          width: 100%;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        aside.sidebar button.logout-btn:hover {
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
            <li>New Requests</li>
            <li className="text-gray">
              Estimate <span className="badge">9</span>
            </li>
            <li>Events</li>
            <li>Partial Requests</li>
          </ul>
          <p className="section-title" style={{ marginTop: "1.5rem" }}>Users</p>
          <ul className="menu">
            <li>Admins</li>
            <li>Clients</li>
            <li>Coordinators</li>
          </ul>
          <button className="logout-btn">Logout</button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
