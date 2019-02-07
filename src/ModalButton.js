// @flow
/* #region Imports */

import { Button } from 'react-native-elements';
import React from 'react';

/* #endregion */

/* #region ModalButton Component */
export const ModalButton = ({ titleStyle, buttonStyle, ...otherProps }) => (
	<Button
		type="clear"
		buttonStyle={{ marginLeft: 15, ...buttonStyle }}
		titleStyle={{ color: '#0000FF', ...titleStyle }}
		{...otherProps} />
);

/* #endregion */
