import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

vi.mock("../../src/hooks/useFetchGifs");

describe('GifGrid', () => {
	const category = 'One Punch';
	useFetchGifs.mockReturnValue({
		data: [],
		loading: true
	});
	it('should show loading on first render while fetching data', () => {
		render(<GifGrid category={ category } />);
		expect(screen.getByText('loading...'));
		expect(screen.getByText(category));
	});

	it('should display items while fetching images using useFetchGifs', () => {
		const gifs = [
				{
					id: 'xyz',
					title: 'Bart',
					url: 'https://localhost/bart.jpg'
				},
				{
					id: '123',
					title: 'Lisa',
					url: 'https://localhost/lisa.jpg'
				}
			];
		useFetchGifs.mockReturnValue({
			data: gifs,
			loading: false
		});
		render(<GifGrid category={ category } />);
		expect(screen.getAllByRole('img').length).toBe(2);
	});
})