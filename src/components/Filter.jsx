/* eslint-disable react/prop-types */
const Filter = ( {filter, setFilter }) => {
  return (
    <div className="filter">
        <h2>FIltrar</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                    <option value="Todas">Todas</option>
                    <option value="Prontas">Prontas</option>
                    <option value="Pendentes">Pendentes</option>                    
                </select>
            </div>    
        </div>    
    </div>
  )
}

export default Filter