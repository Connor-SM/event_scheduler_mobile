import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

// forgot 's' on import of materialicons, also should be parens below not brackets, it's a function return

const TabBarIcon = name => ({ tintColor }) => (

  <MaterialIcons
    style={{ backgroundColor: 'transparent' }}
    name={name}
    color={tintColor}
    size={24}
  />
);

export default TabBarIcon;
