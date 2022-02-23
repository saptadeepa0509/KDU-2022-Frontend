import MiddleSection from './Component/MiddleSection'
import Sidebar from './Component/Sidebar'
import RightBar from './Component/RightBar'
import "./App.css"


function App() {
  return (
    <div className="app">
      <Sidebar />
      <MiddleSection />
      <RightBar />
    </div>
  )
}

export default App