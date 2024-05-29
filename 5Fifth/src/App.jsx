
import './App.css'
import Login from './Contex/Login';
import UserContexProvider from './Contex/UserContexProvider'
import Profile from './Contex/Profile';
function App() {

  return (<UserContexProvider>
<Login></Login>
    <Profile />
  </UserContexProvider>);
}

export default App
