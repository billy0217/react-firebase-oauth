import React from "react";
import { render, screen } from "@testing-library/react";
import LoginButton from "../LoginButton";


test('button renders with Loigin with Google', () => {
	render(<LoginButton />);
	const addAdultBtn = screen.getByRole('button',{
		name: /login button/i
	})

	expect(addAdultBtn.textContent).toBe('Login with Google');
});