import './App.css'
import Counter from './components/Counter'
import ControlledInput from './components/ControlledInputField'
import ToggleVisibility from './components/ToggleVisibility'
import CharacterCounter from './components/CharacterCounter'
import TodoList from './components/TodoList'
import ToggleButtonText from './components/ToggleButtonText'
import ShowHidePassword from './components/ShowHidePassword'
import SimpleForm from './components/SimpleFormSubmission'

function App() {

  return (
    <>
      <Counter />
      <ControlledInput />
      <ToggleVisibility />
      <CharacterCounter />
      <TodoList />
      <ToggleButtonText />
      <ShowHidePassword />
      <SimpleForm />
    </>
  )
}

export default App
