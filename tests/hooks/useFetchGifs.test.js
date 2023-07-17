import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";
import { describe, expect, it } from "vitest";

describe('useFetchGifs', () => {
	it('should return the initial state', () => {
		const { result } = renderHook(() => useFetchGifs('Naruto'));
		const { data, loading } = result.current;
		expect(data.length).toBe(0);
		expect(loading).toBeTruthy();
	});
	it('should return the initial state', async () => {
		const { result } = renderHook(() => useFetchGifs('Naruto'));

		await waitFor(
			() => expect( result.current.data.length ).toBeGreaterThan(0),
			{ timeout: 2000 }
		);
		const { data, loading } = result.current;
		expect( data.length ).toBeGreaterThan(0);
		expect( loading ).toBeFalsy();
	});
})