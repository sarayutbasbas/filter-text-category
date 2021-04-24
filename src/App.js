import { useState, useEffect } from 'react'
import styled from 'styled-components'
import getCategories from './services/getCategories'

function App() {
  const [categories, setCategories] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    const fetCategories = async () => {
      const categories = await getCategories()
      setCategories(categories)
      setResult(categories)
    }
    fetCategories()
  }, [])


  const handleChange = (e) => {
    const value = e.target.value
    const filteredCategories = categories.filter(val => val.toLowerCase().includes(value))
    setResult(filteredCategories)
  }

  return (
    <Container>
      <FilterContainer>
        <Header>Filtering</Header>
        <input type="string" onChange={handleChange} />
      </FilterContainer>
      <ResultContainer>
        <Header>Result Table</Header>
        <ListResult>
          {result.map(val => <div key={val}>{val}</div>)}
        </ListResult>
      </ResultContainer>
    </Container>
  )
}

export default App;

const Container = styled.div`
  height: 944px;
  min-width: 600px;
  width: 100%;
`

const FilterContainer = styled.div`
  width: calc(50% - 2px);
  height: 100%;
  display: inline-block;
  border-right: 2px solid black;
`

const ResultContainer = styled.div`
  width: 50%;
  height: 100%;
  display: inline-block;
  position: absolute;
`

const Header = styled.div`
  font-size: 22px;
  font-weight: 600;
`

const ListResult = styled.div`
  position: relative;
`