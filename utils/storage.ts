import { TaskProps } from "@/types/type";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeTasks = async (tasks: TaskProps[]) => {
    try {
        await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
      } catch (error) {
        throw new Error('Failed to store tasks');
      }
}

export const loadTasks = async():Promise<TaskProps[]> => {
    try {
        const data = await AsyncStorage.getItem('tasks');
        return data ? JSON.parse(data): [];
    } catch (error) {
        throw new Error('Failed to load tasks');
    }
}