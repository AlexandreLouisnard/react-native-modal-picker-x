/* #region Imports */

import { KeyboardAvoidingView, Modal, Picker, Platform, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';

import { Button } from 'react-native-elements';

/* #endregion */

/* #region Flow typing */
type DataItem = { label: string, value: string };

type Props = {
	items: DataItem[],
	selectedValue?: ?string,
	onValueChange?: ?(item: DataItem) => boolean, // must return true to confirm the value change, false otherwise
	disabled?: boolean,
	containerStyle?: {},
	iosModalButtonStyle?: {},
	iosModalButtonTitleStyle?: {},
};

type State = {
	selectedValue: ?string,
	iosModalVisible: boolean,
	iosModalSelectedValue: ?string,
};
/* #endregion */

/* #region Consts */
const styles = StyleSheet.create({
	modalContainerBackgroundView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	modalContainerForegroundView: {
		borderColor: 'black',
		borderWidth: 2,
		padding: 20,
		margin: 20,
		backgroundColor: '#F2F2F2',
	},
	modalButtonButton: {
		marginLeft: 15,
	},
	modalButtonTitle: {
		color: '#0000FF',
	},
});

const defProps = {
	modalButton: {
		type: 'clear',
	},
};
/* #endregion */

/* #region Utils */
function getSafe<X>(fn: () => ?X /* object.nested.property */): ?X {
	try {
		const value: ?X = fn();
		return value;
	} catch (e) {
		return undefined;
	}
}
/* #endregion */

/**
 * A {Picker} that will open a {Modal} to select a new value.
 * - On Android, {ModalPicker} just renders the native {Picker} (dropdown menu). A click on it will open a default modal to change its value.
 * - On iOS, the native {Picker} component is multiline and does not render nicely on a single line. Therefore, {ModalPicker} implements a {Button} with a dropdown menu style. A click on it will open a custom {Modal} rending the native multiline {Picker} inside.
 *
 * @export
 * @class ModalPicker
 * @extends {Component<Props, State>}
 */
export default class ModalPicker extends Component<Props, State> {
	/* #region Fields */
	static defaultProps = {
		selectedValue: null,
		onValueChange: null,
		disabled: false,
		containerStyle: {},
		iosModalButtonStyle: {},
		iosModalButtonTitleStyle: {},
	};

	/* #endregion */

	/* #region Constructor(s) */
	constructor(props) {
		super(props);
		this.state = {
			selectedValue: props.selectedValue,
			iosModalVisible: false,
		};
	}
	/* #endregion */

	/* #region Component lifecycle */
	shouldComponentUpdate(nextProps, nextState) {
		const { selectedValue } = this.props;

		if (nextProps.selectedValue !== selectedValue && nextProps.selectedValue !== nextState.selectedValue) {
			// selectedValue has been updated by parent
			this.setState({ selectedValue: nextProps.selectedValue });
			return false;
		}
		return true;
	}
	/* #endregion */

	/* #region render() */
	render() {
		const { items, onValueChange, disabled, containerStyle, iosModalButtonStyle, iosModalButtonTitleStyle } = this.props;
		const { selectedValue, iosModalVisible, iosModalSelectedValue } = this.state;

		let selectedItem;
		const found = items.filter(({ value }) => value === selectedValue);
		if (found.length > 0) {
			[selectedItem] = found;
		} else if (items.length > 0) {
			[selectedItem] = items;
		} else {
			selectedItem = undefined;
		}

		if (Platform.OS === 'ios') {
			// For iOS, return a Button that opens a Picker in a Modal (because iOS picker is multiline)
			return (
				<View style={containerStyle}>
					<Button
						title={getSafe(() => selectedItem.label) || ''}
						icon={{
							name: 'arrow-drop-down',
							color: 'gray',
						}}
						iconRight
						type="clear"
						titleStyle={{ color: 'black', fontStyle: 'normal', fontWeight: 'normal' }}
						buttonStyle={{ width: '100%', justifyContent: 'space-between' }}
						onPress={() => {
							this.setState({ iosModalVisible: true, iosModalSelectedValue: selectedValue });
						}}
						disabled={disabled} />
					<Modal
						visible={iosModalVisible}
						animationType="fade"
						onRequestClose={() => this.setState({ iosModalVisible: false })}
						transparent>
						<KeyboardAvoidingView
							behavior={Platform.OS === 'ios' ? 'padding' : null}
							style={styles.modalContainerBackgroundView}>
							<View style={styles.modalContainerForegroundView}>
								<Picker
									selectedValue={iosModalSelectedValue}
									onValueChange={(itemValue, itemPosition) => {
										this.setState({ iosModalSelectedValue: itemValue });
									}}
									style={{ width: 200 }}>
									{items.map(({ label, value }) => (
										<Picker.Item
											label={label}
											value={value}
											key={value} />
									))}
								</Picker>
								<View style={{ flexDirection: 'row' }}>
									<Button
										{...defProps.modalButton}
										buttonStyle={{ ...styles.modalButtonButton, ...iosModalButtonStyle }}
										titleStyle={{ ...styles.modalButtonTitle, ...iosModalButtonTitleStyle }}
										title="Cancel"
										onPress={() => this.setState({ iosModalVisible: false })} />
									<Button
										{...defProps.modalButton}
										buttonStyle={{ ...styles.modalButtonButton, ...iosModalButtonStyle }}
										titleStyle={{ ...styles.modalButtonTitle, ...iosModalButtonTitleStyle }}
										title="OK"
										onPress={() => {
											this.setState({ iosModalVisible: false });
											if (iosModalSelectedValue !== selectedValue) {
												const newSelectedItem = items.filter(({ value }) => value === iosModalSelectedValue)[0];
												if (!onValueChange || onValueChange(newSelectedItem)) {
													// Update selected value if onValueChanged callback is not defined or has returned true
													this.setState({ selectedValue: iosModalSelectedValue });
												}
											}
										}} />
								</View>
							</View>
						</KeyboardAvoidingView>
					</Modal>
				</View>
			);
		}

		// For Android, return Picker directly
		return (
			<Picker
				style={containerStyle}
				selectedValue={selectedItem ? selectedItem.value : null}
				onValueChange={(itemValue, itemPosition) => {
					const newSelectedItem = items.filter(({ value }) => value === itemValue)[0];
					if (!onValueChange || onValueChange(newSelectedItem)) {
						// Update selected value if onValueChanged callback is not defined or has returned true
						this.setState({ selectedValue: itemValue });
					}
				}}
				enabled={!disabled}>
				{items.map(({ label, value }) => (
					<Picker.Item
						label={label}
						value={value}
						key={value} />
				))}
			</Picker>
		);
	}
	/* #endregion */
}
