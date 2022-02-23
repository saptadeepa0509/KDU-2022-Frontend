import { render, fireEvent } from '@testing-library/react';
import MiddleSection from '../MiddleSection';

describe("renders",()=>{
    it("root-level-render",()=>{
        const { queryByTitle } = render(<MiddleSection />);
        const div = queryByTitle('middleSection');
        expect(div).toBeTruthy();
    },)
})
