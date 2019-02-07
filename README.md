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
/>
```

## CHANGELOG

## BACKLOG
