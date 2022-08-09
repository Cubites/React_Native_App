import React, { useState } from 'react';
import { View, RefreshControl, StyleSheet } from 'react-native';
import Header from './components/Heading';
import Input from './components/Input';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

let todoIndex = 0;

const App = () => {
  const [InputValue, setInputValue] = useState("");
  const [Todos, setTodos] = useState([]);
  const [Type, setType] = useState("");
  const inputchange = (inputText) => {
    setInputValue(inputText);
  };

  const submitTodo = () => { // 입력 값 저장
    if(InputValue.match(/^\s*$/)){ // 빈값인 경우 추가 X
      return;
    }
    let todo = {
      title: InputValue,
      todoIndex,
      complete: false
    };
    todoIndex++;
    setTodos([...Todos, todo]);
  }

  const todoDelete = (todoIndex) => {
    const newTodos = Todos.filter((todo) => todo.todoIndex !== todoIndex);
    setTodos(newTodos);
  }

  const toggleComplete = (todoIndex) => {
    Todos.forEach(todo => {
      if(todo.todoIndex === todoIndex){
        todo.complete = !todo.complete
      }
    });
    // console.log(Todos);
    setTodos(Todos);
    onRefresh();
  }

  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(2000).then(() => setRefreshing(false));
  // }, [Todos]);

  return (
    <View style={styles.container}>
      <Header />
      <Input InputValue={InputValue} inputchange={inputchange} submitTodo={submitTodo} />
      <TodoList 
        Todos={Todos} 
        todoDelete={todoDelete} 
        toggleComplete={toggleComplete} 
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={onRefresh}
        //   />
        // }
        />
      <Footer Type={Type} setType={setType} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', 
    width: '100%', 
    height: '100%',
    // backgroundColor: '#ddd'
  },
})

export default App