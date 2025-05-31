const rooms = [1, 2, 3, 4, 5]

const RoomList = () => {
  return (
    <div style={{
      width: '250px',
      background: '#1a1832',
      borderRadius: '10px',
      padding: '1rem',
      color: 'white'
    }}>
      {rooms.map(num => (
        <div key={num} style={{
          background: num === 1 ? '#d988ff' : '#2a2749',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '0.75rem',
          cursor: 'pointer'
        }}>
          <strong>Meeting Room {num}</strong>
          <div>{num === 1 ? 'Start from 12 Jan, 2023 - Ends at 15 Jan, 2023' : 'Start from 12 Jan, 2023 - Ends at 15 Jan, 2023'}</div>
          <span style={{ fontSize: '0.8rem' }}>12 Positions</span>
        </div>
      ))}
    </div>
  )
}

export default RoomList
