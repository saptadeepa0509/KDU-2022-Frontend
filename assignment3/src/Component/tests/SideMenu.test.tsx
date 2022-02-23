import { render, screen } from "@testing-library/react";
import SideMenu from "../SideMenu";
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Icon } from "@mui/material";
describe("Testing Side menu:", () => {
    test("Rendering Text", () => {
        const {getByText}= render(<SideMenu text="Testing with notification icon" Icon={NotificationsNoneIcon}/>);
        expect(getByText("Testing with notification icon")).toBeInTheDocument();
    })    
})