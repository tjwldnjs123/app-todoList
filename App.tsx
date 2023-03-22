/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

function App(): JSX.Element {
  const [enteredGoalText, setEnteredGoalText] = useState<string>('');
  const [courseGoals, setCourseGoals] = useState<{text: string; id: string}[]>(
    [],
  );
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const onGoalInputHandler = (e: any) => {
    setEnteredGoalText(e);
  };

  const onGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    setEnteredGoalText('');
    setModalIsVisible(false);
  };

  const onDeleteGoalText = (id: string) => {
    console.log(id);
    setCourseGoals(prev => prev.filter(data => data.id !== id));
  };

  console.log('dfasd');

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={() => setModalIsVisible(true)}
        />
        {modalIsVisible && (
          <View>
            <GoalInput
              visible={modalIsVisible}
              onClose={setModalIsVisible}
              enteredGoalText={enteredGoalText}
              onGoalInputHandler={onGoalInputHandler}
              onGoalHandler={onGoalHandler}
            />
          </View>
        )}

        <FlatList
          data={courseGoals}
          alwaysBounceVertical={false}
          renderItem={data => {
            return (
              <GoalItem
                key={data.item.id}
                onDeleteGoalText={onDeleteGoalText}
                text={data.item.text}
                id={data.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: 'red',
  },

  goalContainer: {
    flex: 5,
  },
});

export default App;
