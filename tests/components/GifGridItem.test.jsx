import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import { GifGridItem } from '../../src/components/GifGridItem';

describe('GifGridItem', () => {
	const title = 'some';
	const url = 'http://some-url/lala';// fails if Uppercase word is used
	it('should be match with snapshot', () => {
		const { asFragment } = render(<GifGridItem title={title} url={url} />)
		expect(asFragment()).toMatchSnapshot();
	});
	it('should show the provided image url and alt', () => {
		render(<GifGridItem title={title} url={url} />);
		// screen.debug(); // show what is rendered in console
		const { src, alt } = screen.getByRole('img');

		// expect(screen.getByRole('img').src).toBe(url);
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});
});