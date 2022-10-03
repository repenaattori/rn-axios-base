//Component for showing array of values as buttons. Selected value (button selected) 

import { StyleSheet } from "react-native";

//is passed to valuSelected function (props) 
export default function ButtonSelector({values, valueSelected}){

    const [selected, setSelected] = useState();
    const selectedStyle = {backgroundColor: '#f5ae1f'};
  
    const onButtonPress = (selectedValue)=>{
      setSelected(selectedValue);
      valueSelected(selectedValue);
    }
  
    return(
      <View style={styles.buttonrow}>
        {values.map(i=>{
            return(
              <Pressable onPress={()=>onButtonPress(i)} key={i} >
                <Text 
                  style={[styles.pressitem, i==selected && selectedStyle]}
                >
                  {i}
                </Text>
              </Pressable>)
          })}
      </View>
    );  
  }

  const styles = StyleSheet.create({
    buttonrow:{
      flexDirection: 'row',
      flexWrap:'wrap',
      justifyContent: 'space-evenly'
    },
    pressitem:{
      borderWidth: 1,
      padding: 5,
      margin: 5,
      textAlign: 'center',
      alignContent: 'center'
    }
  });