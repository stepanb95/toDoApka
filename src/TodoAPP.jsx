const TodoApp = () => {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState('');
   
    const handleAddTask = () => {
      if (taskText.trim() !== '') {
        setTasks([...tasks, { id: Date.now(), text: taskText }]);
        setTaskText('');
      }
    };
   
    const handleRemoveTask = (taskId) => {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    };
   
    return (
      <AppContainer>
        <TodoContainer>
          <h1>Todo List</h1>
          <InputContainer>
            <Input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="Nový úkol"
            />
            <AddButton onClick={handleAddTask}>Přidat úkol</AddButton>
          </InputContainer>
          <TaskList>
            {tasks.map((task) => (
              <TaskItem key={task.id}>
                {task.text}
                <RemoveButton onClick={() => handleRemoveTask(task.id)}>Odstranit</RemoveButton>
              </TaskItem>
            ))}
          </TaskList>
        </TodoContainer>
      </AppContainer>
    );
  };
   
  export default TodoApp;
   