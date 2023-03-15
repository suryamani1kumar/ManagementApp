import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { dropdown } from '../utils/Type';
import DropdownModal from './DropdownModal';

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

  // const renderDropDown = () => {
  //   if (visible) {
  //     return (
  //       <Text style={styles.dropdown}>
  //         {data.map((item) => (
  //           <Text key={item.id} style={styles.dropdown}>
  //             {item.name}
  //           </Text>
  //         ))}
  //       </Text>
  //     );
  //   }
  // };

  return (
    <TouchableOpacity onPress={toggleDropdown} style={styles.button}>
      <Text style={styles.buttonText}>{label}</Text>
      {/* {renderDropDown()} */}
      {/* {visible && (
        <Text style={styles.dropdown}>
          {data.map((item) => (
            <Text key={item.id} style={styles.list}>
              {item.name}
            </Text>
          ))}
        </Text>
      )} */}
      {visible && <DropdownModal list={data} />}
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
