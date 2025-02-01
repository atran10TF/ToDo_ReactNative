import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from '../components/ToDoList';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaView className="bg-primary">
    {/* <View className="flex-1 items-center justify-center"> */}
    <ToDoList />
    {/* </View> */}
    </SafeAreaView>
  );
}

