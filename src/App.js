import AllRoutes from './AllRoutes';
import { BrowserRouter} from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'
import ScrollToTop from "./components/util/ScrollToTop";

import './App.css';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <ScrollToTop />
        {/* This is where everything comes together. It uses the all routes component to know where all of the webpages are and it starts at the index page which is home.js */}
        <AllRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;