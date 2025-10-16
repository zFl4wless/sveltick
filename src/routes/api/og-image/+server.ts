import { ImageResponse } from '@vercel/og';
import type { RequestHandler } from '@sveltejs/kit';
import React from 'react';

export const GET: RequestHandler = async () => {
	const now = new Date();
	const time = now.toLocaleTimeString('en-GB', { hour12: false });

	const element = React.createElement(
		'div',
		{
			style: {
				display: 'flex',
				width: '1200px',
				height: '630px',
				backgroundColor: '#1a1a1a',
				color: '#ffffff',
				alignItems: 'center',
				justifyContent: 'center',
				fontSize: '96px',
				fontFamily: 'monospace'
			}
		},
		`🕒 ${time}`
	);

	return new ImageResponse(element, {
		width: 1200,
		height: 630
	});
};
