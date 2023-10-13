/* eslint-disable react/prop-types */
const Category = ({category, setCategory}) => {
  return (
    <div className="category">
      <h2>Categoria</h2>
        <div className="category-options">
            <div>
                <p>Status:</p>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                  <option value="Todas">Todas</option>
                  <option  value="Trabalho">Trabalho</option>
                  <option value="Faculdade">Faculdade</option>
                  <option value="Projetos">Projetos</option>
                  <option value="Casa">Casa</option>
                  <option value="Mozin">Mozin</option>                    
                </select>
            </div>    
        </div>    
    </div>
  )
}

export default Category


