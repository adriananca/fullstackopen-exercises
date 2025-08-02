const Filter = ({ newFilter, handleFilterChange }) =>
  <div>
    filter show with <input value={newFilter} onChange={handleFilterChange} />
  </div>

export default Filter