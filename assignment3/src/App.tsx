import MiddleSection from './Component/MiddleSection'
import Sidebar from './Component/Sidebar'
import RightBar from './Component/RightBar'
import "./App.css"
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import { withAuthenticator,AmplifySignOut } from '@aws-amplify/ui-react'
import styled, {ThemeProvider} from 'styled-components'
import theme from 'styled-theming'

Amplify.configure(awsconfig);

function App() {
  return (
    <ThemeProvider theme={{theme:'light'}}>
    <div className="app">
      <Sidebar />
      <MiddleSection />
      <RightBar />
    </div>
    </ThemeProvider>
  )
}

export default withAuthenticator(App);
// export default App;