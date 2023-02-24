import {Text, View, StyleSheet, Pressable} from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{color: "#dddddd"}} // built in android effect
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem} // ios effect handled manually by destructuring Pressable pressed event
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc"
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        padding: 8,
        color: "white"
    }
});