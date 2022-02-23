import Post from '../Post';
import { render, fireEvent } from '@testing-library/react';

interface Ipost {
    displayName: string,
    username: string,
    verified: boolean,
    text: string,
    image: string,
    avatar: string,
}

let userDetails : Ipost = {
    displayName: 'John Doe',
    username: 'jdoe',
    verified: true,
    text: 'This is a post',
    image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    avatar: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',

}




it("checkPostRender", () => {
    const { queryByTitle } = render(<Post {...userDetails} />);
    const div = queryByTitle('post');
    expect(div).toBeTruthy();
})

describe("Render",()=>{
    it("name",() => {
        const { queryByText } = render(<Post {...userDetails} />);
        const div = queryByText('John Doe');
    })

    it("username",() => {
        const { queryByTitle } = render(<Post {...userDetails} />);
        const username = queryByTitle('handle');
        expect(username?.innerHTML).toBe('@jdoe');
        
    })

    it("text",() => {
        const { queryByTitle } = render(<Post {...userDetails} />);
        const text = queryByTitle('content');
        expect(text?.innerHTML).toBe('This is a post');
    })

    it("avatar",() => {
        const { queryByTitle } = render(<Post {...userDetails} />);
        const avatar = queryByTitle('avatar');
        expect(avatar).toBeTruthy();
    })  
})