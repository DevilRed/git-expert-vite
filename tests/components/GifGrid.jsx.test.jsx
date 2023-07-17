import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GifGrid } from "../../src/components/GifGrid";

describe('GifGrid', () => {
	const category = 'One Punch';
	it('should show loading on first render while fetching data', () => {
		render(<GifGrid category={ category } />);
		expect(screen.getByText('loading...'));
		expect(screen.getByText(category));
	});
})