import { Link } from "react-router-dom";
import { Button } from "@mui/material";
const LinkButton=({link,children}) => {
    return(
        <Link to={link}>
            <Button color="inherit" variant='contained'>{children}</Button>
        </Link>
    );
};
 export default LinkButton;