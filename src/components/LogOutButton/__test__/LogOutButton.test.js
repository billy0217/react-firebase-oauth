import React from "react";
import { render, screen } from "@testing-library/react";
import LogOutButton from "../LogOutButton";


test('button renders with Loigin with Google', () => {
	render(<LogOutButton />);
	const addAdultBtn = screen.getByRole('button',{
		name: /logout button/i
	})

	expect(addAdultBtn.textContent).toBe('Log Out');
});