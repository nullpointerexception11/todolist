import { StoreProvider } from './store';
import List from './components/list';

function App() {
  return (
   
    <StoreProvider>
      <List/>
    </StoreProvider>
  );
}

export default App;
