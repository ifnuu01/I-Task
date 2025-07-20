import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [task, setTask] = useState<string>('');

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

        <View style={styles.card}>
          <Text style={{
            color: '#C1BABA'
          }}>Hallo</Text>

          <TouchableOpacity style={{
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 8,
            backgroundColor: '#DC3636',
          }}
            onPress={() => Alert.alert('Delete nieh??')}
          >
            <Text style={{
              color: '#fff'
            }}>X</Text>
          </TouchableOpacity>

        </View>

        <View style={styles.inner}>
          <View style={styles.form}>
            <TextInput
              placeholder={`Input Field`}
              style={styles.input}
              value={task}
              placeholderTextColor={'#C1BABA'}
              onChangeText={setTask}
              focusable
            />
            <TouchableOpacity onPress={() => Alert.alert('halo')} activeOpacity={0.8}>
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
  inner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logo: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 100,
  },
  card: {
    height: 60,
    backgroundColor: '#242C3B',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#2d384dff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
