import React from 'react';
import { ScrollView,View, Text, Pressable  } from 'react-native';
import Checkbox from 'expo-checkbox';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ToDoItem({ task, deleteTask, toggleCompleted }) {
    return (
      // <ScrollView className=" " contentContainerStyle={{ height: '100%'}}>
        // <View className="flex justify-center items-center bg-gray-100 p-4">
          <View className="bg-white flex shadow-lg rounded-xl w-full max-w-md p-6 mb-4 ">
            <View className="flex-row items-center mb-4">
              <Checkbox
                value={task.completed}
                onValueChange={() => toggleCompleted(task.id)}
                className="absolute top-1 left-0"
              />
              <Text className={`flex-1 text-lg pl-8 ${task.completed ? 'text-gray-400 line-through' : 'text-black'}`}
                    style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </Text>
            </View>
              <Pressable onPress={() => deleteTask(task.id)} className="self-end mt-2 py-2 px-4 rounded-md border border-transparent text-center bg-red-600">
                <Text className="text-white">Delete</Text>
              </Pressable>
          </View>
        // </View>
      // </ScrollView>
    );
  }