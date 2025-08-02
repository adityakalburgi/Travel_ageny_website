import "./App.css";
import Layout from './components/Layout/Layout';
import { ThemeProvider } from './context/ThemeContext'; // import ThemeProvider

function App() {
   return (
      <ThemeProvider>
         <Layout />
      </ThemeProvider>
   );
}

export default App;
