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

type ItemProps = {
  items: dropdown;
};
type modalProps = {
  list: dropdown[];
};

const DropdownModal: React.FC<modalProps> = (props): JSX.Element => {
  const { list } = props;
  const [visible, setVisible] = useState(false);
  // const [selected, setSelected] = useState<{ value: string }>({ value: null });
  const onItemPress = (value: string | number): void => {
    // setSelected({ value: value });
    // setVisible(false);
  };
  // console.log(selected);

  const RenderItem: React.FC<ItemProps> = (props): JSX.Element => {
    const { items } = props;
    console.log('item', items);
    return (
      <TouchableOpacity>
        {/* onPress={() => onItemPress(item)} */}
        <Text>{items.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal visible={true}>
      <TouchableOpacity onPress={() => setVisible(false)}>
        <View style={[styles.dropdown]}>
          <FlatList
            data={list}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <RenderItem items={item} />}
          />
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
