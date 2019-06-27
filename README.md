# React Native Modal Picker X

**Author: Alexandre Louisnard alouisnard@gmail.com**  
**React Native JS NPM module**  
**2019**

## DESCRIPTION

A Modal Picker for React Native, rendering correctly on both iOS and Android.

## USAGE

### Installation

```Command-line
npm install --save react-native-modal-picker-x
```

### JSX

```JSX
<ModalPicker
  items={[
    {
      label: 'A',
      value: 'A'
    },
    {
      label: 'B',
      value: 'B'
    },
    {
      label: 'C',
      value: 'C'
    }
  ]}
  selectedValue={this.state.pickerModalValue}
  onValueChange={({ label, value }) => {
    this.setState({ pickerModalValue: value });
    return true;
  }}
  iosModalButtonTitleStyle={{ color: 'blue' }}
  iosModalItemStyle={{ fontSize: 14, textAlign: 'left' }}
  iosOkButtonText={'OK'}
  iosCancelButtonText={'Annuler'} />
```

### Props

```Javascript
type DataItem = { label: ?string, value: ?string };

type Props = {
  items: DataItem[],
  selectedValue?: ?string,
  onValueChange?: ?(item: DataItem) => boolean, // must return true to confirm the value change, false otherwise
  disabled?: boolean,
  containerStyle?: {},
  iosModalButtonStyle?: {},
  iosModalButtonTitleStyle?: {},
  iosModalItemStyle?: {},
  iosOkButtonText?: string,
  iosCancelButtonText?: string,
};

static defaultProps = {
  selectedValue: null,
  onValueChange: null,
  disabled: false,
  containerStyle: {},
  iosModalButtonStyle: {},
  iosModalButtonTitleStyle: {},
  iosModalItemStyle: {},
  iosOkButtonText: 'OK',
  iosCancelButtonText: 'CANCEL',
};
```

## CHANGELOG

## BACKLOG
