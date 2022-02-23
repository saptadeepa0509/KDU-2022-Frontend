import RightBar from '../RightBar';
import { render, fireEvent } from '@testing-library/react';

describe("renders",()=>{
    it("root-level-render",()=>{
        const { queryByTitle } = render(<RightBar />);
        const div = queryByTitle('rightBar');
        expect(div).toBeTruthy();
    })

    it("content-render",()=>{
        const { queryByTitle } = render(<RightBar />);
        const content = queryByTitle('content');
        expect(content).toBeTruthy();
    })

    it("show-more",()=>{
        const { queryByTitle } = render(<RightBar />);
        const showMore = queryByTitle('show-more');
        expect(showMore).toBeTruthy();
    })

    it("show-more-text",()=>{
        const { queryByTitle } = render(<RightBar />);
        const showMoreText = queryByTitle('show-more');
        expect(showMoreText?.innerHTML).toBe('Show more');
    })

    it("input",()=>{
        const { queryByTitle } = render(<RightBar />);
        const input = queryByTitle('input');
        expect(input).toBeTruthy();
    })
})