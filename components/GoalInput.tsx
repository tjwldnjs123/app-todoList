import React from 'react';
import {StyleSheet, TextInput, View, Button, Modal} from 'react-native';

type Props = {
  visible: boolean;
  onClose: (b: boolean) => void;
  enteredGoalText: string;
  onGoalInputHandler: (e: string) => void;
  onGoalHandler: () => void;
};
function GoalInput({
  visible,
  onClose,
  enteredGoalText,
  onGoalInputHandler,
  onGoalHandler,
}: Props) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="입력"
          value={enteredGoalText}
          onChangeText={e => onGoalInputHandler(e)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={onGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => {
                onClose(false);
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#ccc',
    color: '#fff',
    width: '100%',
    padding: 10,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});

export default GoalInput;
