/* eslint-disable react/prop-types */
const Search = ({search, setSearch }) => {
  return (
    <div className="search">
        <h2>Buscar tarefa</h2>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

export default Search