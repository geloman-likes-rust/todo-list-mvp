import { Wrapper } from "../components/Wrapper";
import { Title } from "../view/Title";
import { TodoList } from "../view/TodoList";
import { AddTask } from "../view/AddTask";
import { TodoForm } from "../view/TodoForm";
import { useTodoForm } from "../model/useTodoForm";
import { useTodos } from "../model/useTodos";

const App = () => {
  const { todos, addTodo } = useTodos();
  const [isFormVisible, { showForm, hideForm }] = useTodoForm({
    visible: false,
  });
  return (
    <Wrapper flexDirection="column">
      <Title />
      <TodoList todos={todos} />
      {isFormVisible && (
        <TodoForm handleClick={hideForm} handleSave={addTodo} />
      )}
      <AddTask handleClick={showForm} />
    </Wrapper>
  );
};

export default App;
