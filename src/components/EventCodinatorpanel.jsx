const EventCoordinatorPanel = () => {
  return (
    <div style={{
      background: '#1e1c3a',
      padding: '1rem',
      borderRadius: '10px',
      marginTop: '1rem'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <label>Assign Coordinator</label>
          <select style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}>
            <option>Search Coordinator</option>
          </select>
          <a href="#" style={{ color: '#d988ff', fontSize: '0.8rem' }}>+ Add New Coordinator</a>
        </div>
        <div style={{ flex: 1, marginLeft: '2rem' }}>
          <strong>Event Name</strong> <span>(Venue Here)</span>
          <div>Start: 12-12-2023 &nbsp;&nbsp; End: 15-12-2023</div>
          <div>Venue Address: Some Location 12, Name Here, City, State.</div>
        </div>
      </div>
    </div>
  )
}

export default EventCoordinatorPanel
