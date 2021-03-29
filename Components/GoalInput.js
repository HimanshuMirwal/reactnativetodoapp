import React, { useState } from "react";
import { Button, TextInput, View, Modal } from "react-native";
import styles from "./css/GoalInputStyle";
const GoalInput = (props) => {
    const [EnteredGoal, setEnteredGoal] = useState("");
    const AddGoalHandler = () => {
        // console.log(EnteredGoal);
        props.GetGoalArray(EnteredGoal);
        setEnteredGoal("");
    }
    return (
        <Modal visible={props.ModalVisibility} animationType={"slide"}>
            <View style={styles.InputContainer} >
                <TextInput style={styles.TextInputStyle} onChangeText={(value) => setEnteredGoal(value)} value={EnteredGoal} placeholder="Enter Course " />
                <View style={styles.ButtonContainer}>
                    <View style={styles.buttonStyle}>
                        <Button onPress={() => { AddGoalHandler(); }} title="ADD" />
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button  title="CANCEL" color="red" onPress={() => props.functionForGoalInputCancelButton()} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
export default GoalInput;