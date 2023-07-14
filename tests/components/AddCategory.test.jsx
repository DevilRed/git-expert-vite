import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";
import { describe, expect, it, vi } from "vitest";

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
		const onNewCategoryFn = vi.fn();// mock with vitest

		render(<AddCategory onNewCategory={onNewCategoryFn} />);
		const input = screen.getByRole('textbox');
		const form = screen.getByRole('form');

		fireEvent.input( input, { target: { value: inputValue }});
		fireEvent.submit( form );
		// input value should be clean up
		expect( input.value ).toBe('');

		expect( onNewCategoryFn ).toHaveBeenCalled();
		expect( onNewCategoryFn ).toHaveBeenCalledTimes(1);
		expect( onNewCategoryFn ).toHaveBeenCalledWith( inputValue );
	});

	it('onNewCategory should not been called if input is empty', () => {
		const onNewCategoryFn = vi.fn();// mock with vitest
		render(<AddCategory onNewCategory={onNewCategoryFn} />);

		const form = screen.getByRole('form');
		fireEvent.submit( form );
		expect( onNewCategoryFn ).toHaveBeenCalledTimes(0);
		expect( onNewCategoryFn ).not.toHaveBeenCalled();
	});
})