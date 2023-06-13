import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';


export default function App() {
  function onPress() {
      Alert.alert(
        'Title',
        'Message',
        [
            {
                text: 'Yes',
                onPress: () => {
                    console.log('Yes');
                },
            },
            {
                text: 'No',
                style: 'cancel',
            },
        ],
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TouchableOpacity onPress={onPress} style={{height: 50, width: 150, backgroundColor: 'lavender'}}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
