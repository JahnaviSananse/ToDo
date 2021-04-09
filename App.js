import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
// import CheckBox from 'react-native-check-box';
import CheckBox from '@react-native-community/checkbox';

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
  checkItem,
  checkAllItem,
  updateData,
  updateFlag,
} from './Redux/DispalyItem/display.actions';
const App = props => {
  const [data, setData] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [search, setSearch] = useState('');
  const [update, setupdadte] = useState('');
  let ary = [];

  const onAddItemPress = () => {
    props.setItem(data);
    props.submit({
      id: Math.random(),
      data: data,
      checked: false,
      updated: false,
    });
    // props.submit(data);
  };
  // const deletePressed = id => {
  //   props.deleteItem(id);
  // };
  const onDeleteAllPressed = () => {
    props.deleteAllItem();
  };
  const multipleCheck = () => {
    setIsSelected(!isSelected);
    props.checkAllData(isSelected);
    return;
  };
  const onSearchPressed = () => {
    alert(search);
  };

  useEffect(() => {
    if (search) {
      console.log('11111', search);
      props.getSubmittedItem.map(value => {
        console.log('22222');

        if (value.data.includes(search)) {
          ary.push(value);
        }
        return;
      });
    }
  }, [search]);

  const onUpdatePressed = id => {
    // alert(update);
    props.updateFlag({id: id, update: update});

    return;
  };

  const renderList = ({item}) => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 10,
            flex: 3,
          }}>
          {/* single check  */}
          <CheckBox
            onValueChange={() => props.checkData(item.id)}
            value={item.checked}
          />
          {item.updated ? (
            <TextInput
              style={styles.inputUpdate}
              placeholder={item.data}
              onChangeText={setupdadte}
            />
          ) : (
            <Text style={{fontSize: 20}}>{item.data}</Text>
          )}
          {/* <Text style={{fontSize: 20}}>{item.data}</Text> */}
          <View
            style={{
              width: '30%',
              // backgroundColor: 'yellow',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={{width: '50%', height: '100%'}}
              // onPress={() => deletePressed(item.id)}>
              onPress={() => props.deleteItem(item.id)}>
              <Text
                style={{
                  backgroundColor: 'black',
                  color: 'white',
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                DELETE
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width: '50%', height: '100%'}}
              onPress={() => onUpdatePressed(item.id)}>
              <Text
                style={{
                  backgroundColor: 'pink',
                  color: 'black',
                  fontSize: 15,
                  textAlign: 'center',
                }}>
                UPDATE
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={onSearchPressed}>
          <Text
            style={{
              fontSize: 20,
              top: 10,
              backgroundColor: 'yellow',
              marginHorizontal: 5,
              top: 20,
            }}>
            SEARCH
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.inputSearch}
          placeholder="SEARCH ITEM HERE"
          onChangeText={text => setSearch(text)}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontSize: 30, top: 10, marginHorizontal: 5}}>ITEM </Text>
        <TextInput
          style={styles.input}
          placeholder="ADD ITEM HERE"
          onChangeText={text => setData(text)}
        />
      </View>

      {/* multiple check */}
      <CheckBox value={isSelected} onValueChange={multipleCheck} />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={onAddItemPress}>
          <Text
            style={{
              fontSize: 20,
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
      {console.log('item', props.getSubmittedItem)}
      <Text style={{fontSize: 15, color: 'red'}}>{props.getItem} </Text>
      <FlatList
        keyExtractor={item => item.id}
        data={ary.length > 1 ? ary : props.getSubmittedItem}
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
  inputSearch: {
    height: 40,
    margin: 12,
    width: '75%',
    borderWidth: 1,
  },
  inputUpdate: {
    height: 40,
    margin: 12,
    width: '30%',
    borderWidth: 1,
  },
  checkbox: {
    alignSelf: 'center',
  },
});
const mapSateToProps = fetch => ({
  getItem: fetch.itemList.item,
  getSubmittedItem: fetch.submitList.item,
  getUpdatedData: fetch.submitList.item,
});

const mapDispatchToProps = dispatch => ({
  setItem: item => dispatch(setItemToList(item)),
  submit: item => dispatch(submitItem(item)),
  deleteItem: item => dispatch(deleteItem(item)),
  deleteAllItem: () => dispatch(deleteAll()),
  checkData: item => dispatch(checkItem(item)),
  checkAllData: state => dispatch(checkAllItem(state)),
  updateMyData: data => dispatch(updateData(data)),
  updateFlag: data => dispatch(updateFlag(data)),
});

export default connect(mapSateToProps, mapDispatchToProps)(App);
// export default App;
