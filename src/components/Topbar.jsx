import React from "react";

const Topbar = () => {
  return (
    <>
      <style>{`
        :root {
          --color-primary: #e600ff;
          --color-pink-600: #be00e6;
          --color-pink-700: #a300cc;
          --color-pink-500: #e600ff;
          --color-bg-input: #1e1e2f;
          --color-white: #fff;
          --font-family: system-ui, sans-serif;
        }
        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          color: var(--color-white);
          font-family: var(--font-family);
        }
        .topbar h2 {
          font-size: 1.5rem; /* text-2xl */
          font-weight: 600;
          margin: 0;
        }
        .topbar .right-section {
          display: flex;
          align-items: center;
          gap: 1rem; /* gap-4 */
        }
        .topbar input.search {
          padding: 0.25rem 0.75rem; /* py-1 px-3 */
          background-color: var(--color-bg-input);
          border-radius: 0.5rem; /* rounded-lg */
          border: none;
          color: var(--color-white);
          font-size: 0.875rem; /* text-sm */
          outline: none;
          width: 180px;
        }
        .topbar input::placeholder {
          color: #a0a0a0;
        }
        .topbar button.add-btn {
          background-color: var(--color-pink-600);
          color: var(--color-white);
          padding: 0.25rem 0.75rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
          user-select: none;
          line-height: 1;
        }
        .topbar button.add-btn:hover {
          background-color: var(--color-pink-700);
        }
        .topbar .user-info {
          display: flex;
          align-items: center;
          gap: 0.5rem; /* gap-2 */
        }
        .topbar img.avatar {
          width: 7rem; /* w-8 */
          height: 7rem; /* h-8 */
          border-radius: 50%;
          object-fit: cover;
        }
        .topbar .user-text {
          font-size: 0.875rem; /* text-sm */
          line-height: 1.2;
        }
        .topbar .user-text p {
          margin: 0;
        }
        .topbar .user-text p span.username {
          color: var(--color-pink-500);
          font-weight: 600;
        }
        .topbar .user-text p.welcome {
          font-size: 0.75rem; /* text-xs */
          color: #c0c0c0;
        }
      `}</style>

      <div className="topbar">
        <h2>Event Requests</h2>
        <div className="right-section">
          <input type="text" placeholder="Search here" className="search" />
          <button className="add-btn">+</button>
          <div className="user-info">
            <img src="/avatar.png" alt="User Avatar" className="avatar" />
            <div className="user-text">
              <p>
                Hi, <span className="username">Muhammad Asad</span>
              </p>
              <p className="welcome">welcome back!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
