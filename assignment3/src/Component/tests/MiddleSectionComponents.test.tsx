import { render, fireEvent } from '@testing-library/react';
import MiddleSectionComponents from '../MiddleSectionComponents';

describe("renders",()=>{
    it("root-level-render",()=>{
        const { queryByTitle } = render(<MiddleSectionComponents />);
        const div = queryByTitle('middleSection');
        expect(div).toBeTruthy();
    }
    )
}
)