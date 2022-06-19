import Section from './Components/Section'
import AppIntroduce from './Components/AppIntroduce/AppIntroduce'
import { GlobalStyle } from './styles/globalStyle'

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
