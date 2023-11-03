import './App.css';
import Home from './Components/Home/Home';
import { useAuth0 } from "@auth0/auth0-react";
import Welcome from './Components/WelcomePage/Welcome';

function App() {
  const {isAuthenticated, user } = useAuth0();

  return (
    < >
    
      {
        isAuthenticated ?
          (<Home />)
          :
          (<Welcome />)
      }

    </>
  );
}

export default App;
