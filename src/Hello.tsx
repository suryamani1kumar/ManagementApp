import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import data from './staticData/Static';
import { field } from './utils/Type';
import Dropdown from './component/Dropdown';
import staticdata from './staticData/Static';

const inputfield = {
  series: ' ', //input
  match: '', //input
  time: '', //input or slect box
  invesment: 0, //input
  returns: 0, //input
  numberOfPlayer: 0,
  created: 'Select field',
  comment: '', //input
  date: '', //select
};

const Hello: React.FC = (): JSX.Element => {
  const [input, setInput] = useState<field>(inputfield);
  return (
    <View>
      <Dropdown label="Select Item" data={staticdata.Player} />
      {/* {data.CreateBy.map((item, i) => (
        <Text key={item.id} style={styles.name}>
          {item.value}
        </Text>
      ))}
      {data.Player.map((item) => (
        <Text key={item.id} style={styles.name}>
          {item.name}
        </Text>
      ))} */}
    </View>
  );
};

export default Hello;

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
  },
});
