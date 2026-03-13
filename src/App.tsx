import './App.css'
import UserForm from './component/Form'
import UserList from './component/UserList';
import { UserState } from './shared/userState';

function App() {


  return (
    <>
      <UserForm />
      <UserList />
    </>
  )
}

export default App
