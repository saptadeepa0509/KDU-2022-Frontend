import RightBar from '../RightBar';
import { render, fireEvent } from '@testing-library/react';

describe("renders",()=>{
    it("root-level-render",()=>{
        const { queryByTitle } = render(<RightBar />);
        const div = queryByTitle('rightBar');
        expect(div).toBeTruthy();
    }
)}
)

