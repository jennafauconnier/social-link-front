import styled from 'styled-components'
import Social from './Social'

function App() {
  return (
      <Container>
        <Social />
      </Container>
  )
}

const Container = styled.div`
  background-color: hsl(0, 0%, 8%);
  border: 0;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

export default App
