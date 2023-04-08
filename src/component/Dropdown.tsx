import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { dropdown } from '../utils/Type';
import DropdownModal from './DropdownModal';
import staticdata from '../staticData/Static';

type Props = {
  label: string;
  data: dropdown[];
  //   data: Array<{ id: number; name: number | string; value: number | string }>;
};
const Dropdown: React.FC<Props> = (props): JSX.Element => {
  const { label, data } = props;

  const [visible, setVisible] = useState(false);
  const toggleDropdown = () => {
    setVisible(!visible);
  };

  return (
    <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
      {visible && <DropdownModal list={staticdata.Player} />}
      {/* {visible && <Text style={styles.dropdown}>dfasdfds</Text>} */}
      {/* <DropdownModal list={data} /> */}
      <AntDesign name="down" size={20} />
    </TouchableOpacity>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    height: 50,
    width: '90%',
    paddingHorizontal: 10,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 50,
  },
  list: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    paddingVertical: 10,
  },
});
