import { MyProvider } from './context';
import { AppRouter } from './router';
import './App.css'

function App() {

  return (
    <MyProvider >
      <AppRouter />
    </MyProvider>
  )
}

export default App
