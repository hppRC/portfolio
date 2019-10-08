import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/core';

export const Reset = () => (
	<Global
		styles={css`
			${emotionReset}
		`}
	/>
);

export default Reset;
