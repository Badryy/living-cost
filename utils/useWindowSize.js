import { useEffect, useState } from 'react';

export const useWindowSize = () => {
	const [width, setWidth] = useState(undefined);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleResize = () => {
				setWidth(window.innerWidth);
			};

			// Add event listener
			window.addEventListener('resize', handleResize);

			// Call handler right away so state gets updated with initial window size
			handleResize();

			// Remove event listener on cleanup
			return () => window.removeEventListener('resize', handleResize);
		}
		// setMax(window.innerWidth);
	}, []);

	return width;
};
