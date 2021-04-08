import React, {useState} from 'react';
import {connect} from 'react-redux';

import {
  Button,
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {setItemToList} from './Redux/SetItem/set.actions';
import {
  submitItem,
  deleteItem,
  deleteAll,
} from './Redux/DispalyItem/display.actions';
const App = props => {
  const [data, setData] = useState('');
  const onAddItemPress = () => {
    props.setItem(data);
    props.submit({id: Math.random(), data: data});
    // props.submit(data);
  };
  // const deletePressed = id => {
  //   props.deleteItem(id);
  // };
  const onDeleteAllPressed = () => {
    props.deleteAllItem();
  };
  const renderList = ({item}) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
          }}>
          <Text style={{fontSize: 20}}>{item.data}</Text>
          <TouchableOpacity
            style={{width: '20%', height: '100%'}}
            // onPress={() => deletePressed(item.id)}>
            onPress={() => props.deleteItem(item.id)}>
            <Text
              style={{
                backgroundColor: 'black',
                color: 'white',
                fontSize: 20,
                textAlign: 'center',
              }}>
              DELETE
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 30, top: 10, marginHorizontal: 5}}>ITEM </Text>
        <TextInput
          style={styles.input}
          placeholder="ADD ITEM HERE"
          onChangeText={text => setData(text)}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={onAddItemPress}>
          <Text
            style={{
              fontSize: 35,
              textAlign: 'center',
              backgroundColor: 'yellow',
              width: '100%',
              alignSelf: 'center',
            }}>
            ADD ITEM
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDeleteAllPressed}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              backgroundColor: 'black',
              width: '100%',
              color: 'red',
              alignSelf: 'center',
              left: '15%',
              top: '40%',
            }}>
            DELETE ALL
          </Text>
        </TouchableOpacity>
      </View>
      {/* {console.log('props.getSubmittedItem', props)} */}
      <Text style={{fontSize: 15, color: 'red'}}>{props.getItem} </Text>
      <FlatList
        keyExtractor={item => item.id}
        data={props.getSubmittedItem}
        renderItem={renderList}
      />
      {/* <Text style={{fontSize: 20}}>{props.getSubmittedItem} </Text> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    width: '75%',
    borderWidth: 1,
  },
});
const mapSateToProps = fetch => ({
  getItem: fetch.itemList.item,
  getSubmittedItem: fetch.submitList.item,
});

const mapDispatchToProps = dispatch => ({
  setItem: item => dispatch(setItemToList(item)),
  submit: item => dispatch(submitItem(item)),
  deleteItem: item => dispatch(deleteItem(item)),
  deleteAllItem: () => dispatch(deleteAll()),
});

export default connect(mapSateToProps, mapDispatchToProps)(App);
// export default App;
