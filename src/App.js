import './App.css';
import { Provider } from 'react-redux';
import Region from './components/Region';
import Store from './Store/Store';

function App() {
  return (
   <Provider store={Store}>
    <div class="App">
 <Region />
 {/* error: {this.props} */}
   </div>
 </Provider>
  );
}

export default App;