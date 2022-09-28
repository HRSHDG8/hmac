import {Button} from "@mui/material";
import React, {useState} from "react";

export const BitPlane = () => {

    const [img, setImage] = useState();

    return <div>
        <Button
            variant="contained"
            component="label"
            onChange={e => {
                //@ts-ignore
                setImage(URL.createObjectURL(e.target.files[0]))
            }}
        >
            Upload File
            <input
                type="file"
                accept=".jpg, .jpeg"
                hidden
            />
        </Button>
        {img && <img src={img}/>}
    </div>
}