import Section from './Components/Section'
import AppIntroduce from './Components/AppIntroduce/AppIntroduce'
import { GlobalStyle } from './styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Section>
            <AppIntroduce />
          </Section>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
