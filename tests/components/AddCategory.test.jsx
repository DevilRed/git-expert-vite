import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
import { describe, expect, it } from "vitest";

describe('AddCategory', () => {
	it('should changes its box value', () => {
		render(<AddCategory onNewCategory={() => {}} />);
		const input = screen.getByRole('textbox');// get input elem
		fireEvent.input( input, { target: { value: 'Goku' }});// fire event, simulating event as 2nd param

		// screen.debug();// to debug what's rendered in console
		expect(input.value).toBe('Goku');
	});
})