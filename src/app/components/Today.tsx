'use client';

import { useMemo } from 'react';

export const Today = () => {
	const today = new Date();

	const day = today.getDate();
	const month = today.toLocaleString('default', { month: 'long' });
	const year = today.getFullYear();

	const formattedDate = useMemo(() => {
		return `Today: ${day} ${month} ${year}`;
	}, [day, month, year]);

	return <span className="text-sm text-gray-500">{formattedDate}</span>;
};
