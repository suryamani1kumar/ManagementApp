import {
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { dropdown } from '../utils/Type';

type ItemProps = dropdown;
type modalProps = { list: dropdown[] };

const DropdownModal: React.FC<modalProps> = (props): JSX.Element => {
  const { list } = props;

  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState();
  const onItemPress = (value): void => {
    setSelected(value);
    setVisible(false);
  };

  const renderItem: React.FC<ItemProps> = (props): JSX.Element => {
    const { name, value, ...data } = props;

    return (
      <TouchableOpacity onPress={() => onItemPress(value)}>
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal visible={false} transparent animationType="none">
      <TouchableOpacity onPress={() => setVisible(false)}>
        <View style={[styles.dropdown]}>
          {/* {visible && ( */}
          <FlatList
            data={list}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => renderItem(item)}
          />
          {/* )} */}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default DropdownModal;

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
});
