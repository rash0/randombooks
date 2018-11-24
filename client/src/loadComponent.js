import React from 'react';
import ReactLoading from 'react-loading';

const Load = ({ type, color }) => (
	<ReactLoading className="mx-auto" type={'spin'} color={color} height={48} width={50} />
);

export default Load;
