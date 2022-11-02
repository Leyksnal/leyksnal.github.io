import React, { useContext } from 'react';
import { Context } from '../context';

function Error() {
	const {error} = useContext(Context)

	return <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{error}</div>
}

export default Error;
