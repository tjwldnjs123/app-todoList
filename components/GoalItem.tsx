import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

type Props = {
  text: string;
  id: string;
  onDeleteGoalText: (id: string) => void;
};

function GoalItem({text, id, onDeleteGoalText}: Props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#ddd'}}
        style={({pressed}) => pressed && styles.pressedItem}
        onPress={() => onDeleteGoalText(id)}>
        <View>
          <Text style={styles.goalItemText}>{text}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.7,
  },
  goalItemText: {
    color: 'white',
    padding: 8,
    textAlign: 'center',
  },
});

export default GoalItem;
