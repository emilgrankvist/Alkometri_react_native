import { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme, Alert, Switch, TextInput, ScrollView } from 'react-native';
import styles from '../style/style';
import NumericInput from 'react-native-numeric-input';
import themeContext from '../style/themeContext';
import { EventRegister } from 'react-native-event-listeners';
import Radiobutton from 'react-native-radio-buttons-group';
import CalculateButton from './Calculate'
import RadioButtonsGroup from 'react-native-radio-buttons-group';



export default function App(onChange) {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);


  const radioButtonsData = [{
    id: '1',
    label: (
      <Text style={[styles.radioB, {color: theme.radioB}]}>{'Male    '}</Text>
    ),
    value: '1',
    color: "white",

  }, {
    id: '2',
    label: (
      <Text style={[styles.radioB, {color: theme.radioB}]}>{'Female'}</Text>
    ),
    value: '2',
    color: "white",

  }]
  

  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState(0);

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);


  
  useEffect(() =>{
    radioButtonsData[0].selected = true;
    setTimeout(()=> {
      console.log(radioButtonsData);
      setRadioButtons([...radioButtonsData]);
    }, 1000)
  }, []);

  
  function resultcolor(){
    if(result>= 0.5 && result <1){
      return{
        color: 'yellow'
      }
    }
    if(result>=1){
      return{
        color: 'red'
      }
    }
    if(result<0.5 && result > 0){
        return{
          color: 'green'
        }
      }
  }

  function missingAlert() {
    Alert.alert(
      " Your weight is missing, please type it in!"
    )
  }
  function calculate() { 
    let blood = 0;
    let litres = bottles * 0.33;
    let burning = weight / 10;
    let grams1 = litres * 8 * 4.5;
    let grams2 = grams1 - (burning * time)

    if(burning === 0) {
      missingAlert()
    }
    

    if (gender === "male") {
      blood = grams2 / (weight * 0.7)
    } else {
      blood = grams2 / (weight * 0.6)
    } if (blood<0) {
      blood = 0;
    }
    setResult(blood);
   }


  return (
  <ScrollView style={[styles.ScrollView, {backgroundColor: theme.background}]}>
    <View style={[styles.container, {backgroundColor: theme.background}]}>
       <Switch style={{alignSelf: 'flex-start', marginTop:50}} value = {mode} onValueChange={() => {
      setMode((value)=> !value)
      EventRegister.emit("changeTheme", mode)
      }}/>
   

      <Text style={[styles.Title, {color: theme.color}]}>Alcometer</Text>

      <Text style={[styles.Text, {color: theme.color}]}>Weight (kg)</Text>
      <TextInput   style={[ styles.TextInput, {backgroundColor: "white", background:"fill", borderRadius: 3, color: "black" }]}    returnKeyType='done'
        keyboardType='number-pad'
        placeholder='Enter your weight here'
        placeholderTextColor={theme.background}
        onChangeText={text => setWeight(text)}
        />

      <Text style={[styles.Text, {color: theme.color}]}>Bottles</Text>
      <NumericInput style={[{color: theme.color, backgroundColor:theme.background}]} 
      onChange={value => setBottles(value)} 
      borderColor="white"
      textColor={theme.input} 
      />

      <Text style={[styles.Text, {color: theme.color}]}>Hours</Text>
      <NumericInput style={[{color: theme.background}]} 
      onChange={value => setTime(value)}
      borderColor="white"
      textColor={theme.input} 
      />

      <Text style={[styles.Text, {color: theme.color}]}>Gender</Text>
      <Radiobutton 
        radioButtons={radioButtons} 
        onPress={(value) => {setGender(value)}} 
      />

      <CalculateButton 
      title='Calculate'
      onPress={calculate}
      />

      <Text style={[styles.result, resultcolor()]}>
        {result.toFixed(2)}
      </Text>
      
    </View>
  </ScrollView>
  );
}