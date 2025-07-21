import Task from '@/components/Task';
import { TaskProps } from '@/types/type';
import { loadTasks, storeTasks } from '@/utils/storage';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Alert, FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [task, setTask] = useState<string>('');
  const [listTask, setListTask] = useState<TaskProps[]>([]);

  useEffect(() => {
    loadTasks()
      .then(setListTask)
      .catch(() => Alert.alert('Failed to load tasks'))
  }, [])

  useEffect(() => {
    storeTasks(listTask).catch(() => Alert.alert('Failed to save tasks'))
  }, [listTask])

  const createTask = () => {
    if (task === '') {
      return Alert.alert(
        'Alert', 'Task tidak boleh kosong!', [
        {
          text: 'Ok',
          onPress: () => null
        }
      ]
      )
    }
    setListTask([...listTask, { task: task }]);
    setTask('');
  }

  const completeTask = (index: number, task: string) => {
    Alert.alert(
      'Complete Task', `${task} Yakin Sudah Selesai?`, [
      {
        text: 'Belum',
        onPress: () => null
      },
      {
        text: 'Sudah',
        onPress: () => {
          let itemCopy = [...listTask];
          itemCopy.splice(index, 1);
          setListTask(itemCopy);
        },
      },
    ]
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginBottom: 20,
        }}>
          <LinearGradient
            colors={['#34C8E8', '#4E4AF2']}
            style={styles.logo}>
            <Text style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 24
            }}>I</Text>
          </LinearGradient>
          <Text style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 24
          }}>Tasks</Text>
        </View>

        <FlatList
          data={listTask}
          renderItem={({ item, index }) => <Task task={item.task} callback={() => completeTask(index, item.task)} />}
        />

        <View style={styles.absolute}>
          <View style={styles.form}>
            <TextInput
              placeholder={`Input Field`}
              style={styles.input}
              value={task}
              placeholderTextColor={'#C1BABA'}
              onChangeText={setTask}
              focusable
            />
            <TouchableOpacity onPress={() => createTask()}>
              <LinearGradient
                colors={['#34C8E8', '#4E4AF2']}
                style={styles.btn}>
                <Text style={{ color: 'white' }}>Add</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView >
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: '#242C3B',
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    height: 60,
    backgroundColor: '#242C3B',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    color: '#fff',
    elevation: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#2d384dff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  absolute: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  btn: {
    paddingVertical: 18,
    height: 60,
    width: 80,
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  logo: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 100,
  }
});
