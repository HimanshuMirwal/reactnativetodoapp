import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalInput from "./Components/GoalInput";
import GoalItem from "./Components/GoalItems";
export default function App() {
  const [Goal, SetGoal] = useState([]);
  const [ModalVisibility , SetModalVisibility]=useState(false);
  function GetGoalArray(EnteredGoal) {
    // console.log("value from GoalInput "+EnteredGoal)
    SetGoal(Goal => [...Goal, {key:Math.random().toString(), value:EnteredGoal}]);
    SetModalVisibility(false);
  }
  function functionForGoalInputCancelButton(){
    SetModalVisibility(false);
  }
  function DeleteDataFromGoal(ValueTobeDeletedKey) {
    console.log("value from Delete "+ValueTobeDeletedKey);
    SetGoal(Goal =>{
      return Goal.filter(GoalElement => GoalElement.key != ValueTobeDeletedKey)
    });

  }
  return (
    <View style={styles.Container}>
      <Text style={styles.HeadingText}>TO DO App</Text>
      <Button title="Add Goal" onPress={()=>SetModalVisibility(true)} />
      <GoalInput GetGoalArray={GetGoalArray} ModalVisibility={ModalVisibility} functionForGoalInputCancelButton={functionForGoalInputCancelButton} />
      <GoalItem  Goal ={Goal}  DeleteDataFromGoal={DeleteDataFromGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: 30,

  },
  HeadingText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold'
  },
});
