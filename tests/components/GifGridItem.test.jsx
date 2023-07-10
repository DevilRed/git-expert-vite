import { describe, it, expect } from 'vitest';
import { render } from "@testing-library/react";
import { GifGridItem } from '../../src/components/GifGridItem';

describe('GifGridItem', () => {
	it('should be match with snapshot', () => {
		const { asFragment } = render(<GifGridItem title={'some'} url={'someUrl'} />)
		expect(asFragment()).toMatchSnapshot();
	});
});