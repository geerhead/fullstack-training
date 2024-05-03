import Button from "./Button.jsx";
import {useNavigate} from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();
    return (
        <Button type="back" onClick={(e)=>{
            e.preventDefault()
            navigate(-1)
        }}> &larr;</Button>
    );
}

export default BackButton;