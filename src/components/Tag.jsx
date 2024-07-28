import React from 'react';

const Tag = ({tag}) => {
	return (
		<div className='border-2 border-yellow-500/70 text-yellow-500/60 text-[12px] font-medium rounded-full px-2 py-0.5'>
			{tag}
		</div>
	);
};

export default Tag;
