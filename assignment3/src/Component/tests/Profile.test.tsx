import { render, fireEvent } from '@testing-library/react';
import Profile from '../profile/Profile';

describe("renders", () => {
    it("root-level-render", () => {
        const { queryByTitle } = render(<Profile />);
        const div = queryByTitle('profile');
        expect(div).toBeTruthy();
    })
    it("avatar-box-render", () => {
        const { queryByTitle } = render(<Profile />);
        const div = queryByTitle('avatar-box');
        expect(div).toBeTruthy();
    }
    )
    it("avatar-render", () => {
        const { queryByTitle } = render(<Profile />);
        const avatar = queryByTitle('avatar') as HTMLImageElement;
        expect(avatar).toBeTruthy();
    })
})