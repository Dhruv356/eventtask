const PositionTable = () => {
  const rows = Array(7).fill({
    position: 'Camera 1 (Video)',
    time: '9 am - 7 pm',
    info: 'LP default',
    quantity: 20
  })

  return (
    <div style={{
      flex: 1,
      background: '#1a1832',
      borderRadius: '10px',
      padding: '1rem',
      overflowX: 'auto'
    }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', paddingBottom: '1rem' }}>Position</th>
            <th>Time</th>
            <th>Info</th>
            <th>Quantity</th>
            <th>Contractor</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td>{row.position}</td>
              <td>{row.time}</td>
              <td>{row.info}</td>
              <td>{row.quantity}</td>
              <td>
                <select style={{ padding: '0.5rem' }}>
                  <option>Select Contractor</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
        <button style={{
          padding: '0.5rem 1.5rem',
          background: '#d988ff',
          color: 'black',
          borderRadius: '8px',
          border: 'none',
          fontWeight: 'bold'
        }}>Save Edits</button>
      </div>
    </div>
  )
}

export default PositionTable
