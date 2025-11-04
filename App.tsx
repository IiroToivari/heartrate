import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
 

 const [age, setAge] = useState<string>("")

 const ageAsNumber: number = !isNaN(Number(age))===true ? Number(age) : 0

 const LowLimit = (220 - ageAsNumber) * 0.65
 const UpLimit =  (220 - ageAsNumber) * 0.85

  return (
    <View style={styles.container}>
      <Text style={styles.container}>Heart Rate Limits Calculator</Text>
      <Text>Enter your age</Text>
    <TextInput
      placeholder="0"
      keyboardType='number-pad' 
      value={age} 
      onChangeText={setAge}   
/>

       <Text>
        Lower limit: {(Number(age) > 0) ? LowLimit.toFixed(0) : 0} 
        </Text>

       <Text>
        Upper limit: {(Number(age) > 0) ? UpLimit.toFixed(0)  : 0} 
        </Text>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: '#fff',
    fontSize: 25,
    paddingVertical: 30,
    paddingLeft: 15,
  },


});
