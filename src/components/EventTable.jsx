import React from "react";

const rows = new Array(15).fill({
  name: "Filled Name",
  start: "Jan 12, 2024",
  end: "Jan 14, 2024",
  client: "Muhammad Asad",
  phone: "+1234 566 7890",
  venue: "Lorem Ipsum Dolor Sit Amet",
});

const EventTable = () => {
  return (
    <>
      <style>{`
        :root {
          --color-primary: #e600ff;
          --color-background: #0d0b22;
          --color-white: #ffffff;
        }
        .table-container {
          overflow-x: auto;
          color: var(--color-white);
          font-size: 0.875rem;
          background-color: var(--color-background);
          min-height: 100vh;
          padding: 1rem;
          font-family: system-ui, sans-serif;
        }
        .event-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 0.5rem;
          text-align: left;
        }
        .header-row {
          background-color: var(--color-primary);
          color: var(--color-white);
          border-radius: 0.375rem;
        }
        .cell {
          padding: 0.5rem 1rem;
        }
        .body-row {
          background: linear-gradient(to right, #1c1c3b, #10101e);
          transition: filter 0.3s ease;
          cursor: pointer;
        }
        .body-row:hover {
          filter: brightness(1.25);
        }
        .pagination {
          display: flex;
          justify-content: flex-end;
          margin-top: 1rem;
          padding-right: 1.5rem;
          align-items: center;
        }
        .page-btn {
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          font-size: 1rem;
          padding: 0 0.5rem;
        }
        .page-numbers {
          display: flex;
          gap: 0.25rem;
          margin: 0 0.5rem;
        }
        .page-number {
          background: none;
          border: none;
          color: var(--color-white);
          padding: 0 0.5rem;
          cursor: pointer;
          font-weight: normal;
          font-size: 1rem;
        }
        .page-number.active {
          color: var(--color-primary);
          font-weight: 700;
        }
      `}</style>

      <div className="table-container">
        <table className="event-table">
          <thead>
            <tr className="header-row">
              <th className="cell">Event Name ⬆</th>
              <th className="cell">Event Start</th>
              <th className="cell">Event End</th>
              <th className="cell">Client Name</th>
              <th className="cell">Contact Info</th>
              <th className="cell">Venue</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="body-row">
                <td className="cell">👁 {row.name}</td>
                <td className="cell">{row.start}</td>
                <td className="cell">{row.end}</td>
                <td className="cell">{row.client}</td>
                <td className="cell">{row.phone}</td>
                <td className="cell">{row.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <button className="page-btn">←</button>
          <div className="page-numbers">
            {[1, 2, 3, 4].map((p) => (
              <button
                key={p}
                className={`page-number ${p === 4 ? "active" : ""}`}
              >
                {p}
              </button>
            ))}
          </div>
          <button className="page-btn">→</button>
        </div>
      </div>
    </>
  );
};

export default EventTable;
