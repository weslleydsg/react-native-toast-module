import * as React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ToastModule from 'react-native-toast-module';

export default function App() {
  const [message, setMessage] = React.useState('');

  async function showToast() {
    try {
      await ToastModule.show(message);
    } catch (error) {
      const { message: errorMessage } = error as Error;
      Alert.alert(errorMessage);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Type your toast message"
        onChangeText={setMessage}
      />

      <TouchableOpacity onPress={showToast}>
        <Text style={styles.button}>Show</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
  textInput: {
    flex: 1,
    marginRight: 16,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#3333',
  },
  button: {
    padding: 8,
    backgroundColor: 'green',
    color: 'white',
    borderRadius: 4,
  },
});
