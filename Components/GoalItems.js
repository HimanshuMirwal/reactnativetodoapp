import React from "react";
import { FlatList, Text, View, Touchable, TouchableOpacity } from "react-native";
import styles from "./css/GoalItemstyle";
const GoalItem = (props) => {
    function onclickDeleteButton(value){
        console.log(value);
        props.DeleteDataFromGoal(value)
    }
    return (
        <>
        {/* keyExtractor={(item, index)=>} property pf key value */}
        <FlatList data={props.Goal} renderItem={(itemData) => {
            return (
            <TouchableOpacity onPress={()=>onclickDeleteButton(itemData.item.key)}>
            <View style={styles.ListViews}>
                <Text >{itemData.item.value}</Text>
            </View>
            </TouchableOpacity>
            )
        }}>
        </FlatList>
        </>
    )
}
export default GoalItem;