# Checkbox icon

A Checkbox component, easy to use, versatile and very configurable to what you need. set the `size`, color when `unchecked` and when `checked`, need something quick and simple? ok just set the `value` of the component and you are done!

**Dependencies**

You need to install the `react-native-svg` package.
If you are using **Expo** you don't need to do this step.

```bash
npm i react-native-svg
```

```javascript
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'Checkbox';

export default function App() {
  const [checked, setChecked] = useState(false);
  return (
    <View style={{flexDirection:'row'}}>
      <Text>The Checkbox is{ checked ? 'Checked!':'un Checked !'}</Text>
      <Checkbox
        value={ checked }
        onCheck={ ()=> setChecked( !checked )}
        size={32}
        
      />
    </View>
  );
}

```

# props
For the component to work the right way you need the `value` (boolean) and `onChange` (a function) properties the rest of the properties are optional and have a default values.

**Default values**

* `value` -> false | boolean
* `colorUnCheck` -> black (#000) | string
* `colorCheck` -> black (#000) | string
* `fill` -> none | string
* `size` -> 24  | number of pixels
* `onCheck` -> _this prop is required_

## value 



## onChange - required