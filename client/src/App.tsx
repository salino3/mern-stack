import { MyProvider } from './context';
import { AppRouter } from './router';

function App() {

  return (
    <MyProvider >
      <AppRouter />
    </MyProvider>
  )
}

export default App
