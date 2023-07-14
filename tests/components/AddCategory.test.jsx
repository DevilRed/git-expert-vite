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

	it('onNewCategory prop should be run if input values changes', () => {
		const inputValue = "Naruto";
		render(<AddCategory onNewCategory={() => {}} />);
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input( input, { target: { value: inputValue }});
		fireEvent.submit( form );
		// input value should be clean up
		expect( input.value ).toBe('');
	});
})