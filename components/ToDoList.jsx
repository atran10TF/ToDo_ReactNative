import React, { useState } from 'react';
import { ScrollView, View, TextInput, Button } from 'react-native';
import ToDoItem from './ToDoItem';

export default function ToDoList() {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Welcome to my ToDoList', completed: false },
    ]);
    
    const [text, setText] = useState('');

    function addTask() {
      const newTask = { id: Date.now(), text, completed: false };
      setTasks([...tasks, newTask]);
      setText('');
    }

    // Function to Delete Task
    function deleteTask(id) {
      setTasks(tasks.filter(task => task.id !== id));
    }
    // Function to Toggle Task Completion
    function toggleCompleted(id) {
      setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
    }

    return (
    <ScrollView className="flex h-full">
      <View className="flex-1 justify-center items-center bg-gray-100 p-4">
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
      </View>

      <View className=" p-4 bg-white shadow-lg rounded-lg h-100">
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="New Task"
        className="border p-2 rounded-md"
      />
      <Button title="Add" onPress={addTask} />
      </View>
    </ScrollView>
  );
}
