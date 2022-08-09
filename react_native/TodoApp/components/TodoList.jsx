import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import Todo from './Todo';

const TodoList = ({Todos, todoDelete, toggleComplete}) => {
  return (
    <View style={styles.todoListContainer}>
      <ScrollView keyboardShouldPersistTaps='always'>
        {
          Todos === [] ? <Text style={styles.nothingTodo}>할 일이 없습니다.</Text> :
          Todos.map((data, i) => (
            <Todo data={data} key={i} todoDelete={todoDelete} toggleComplete={toggleComplete} />
          ))
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  todoListContainer: {
    flex: 6,
    paddingHorizontal: 40,
    marginTop: 50,
  },
  nothingTodo: {
    marginLeft: 10
  }
});

export default TodoList