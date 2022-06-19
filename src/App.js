import './App.css'
import Section from './Component/Section'
import AppIntroduce from './Component/AppIntroduce'
import { GlobalStyle } from './styles/globalStyle'
import { ThemeProvider } from 'styled-components'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Section>
          <AppIntroduce />
        </Section>
      </div>
    </>
  )
}

export default App
