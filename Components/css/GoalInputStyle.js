import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    InputContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex:1
    },
    TextInputStyle: {
      padding: 10,
      backgroundColor: "#eee",
      fontSize: 20,
      borderWidth: 1,
      margin: 5,
      width: "80%",
      // Set border Hex Color Code Here.
      borderColor: 'black',
  
      // Set border Radius.
    }
    ,
    ButtonContainer:{
      margin:5,
      width:"60%",
      flexDirection:"row",
      justifyContent:"space-between"
    },
    buttonStyle:{
      width:"40%"
    }  
  });
export default styles;