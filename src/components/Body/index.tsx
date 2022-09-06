import {Delay} from "../Delay";
import {Typed} from "../Typed";
import {Center} from "../Center";
import {useState} from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {IconButton, Slide} from "@mui/material";

export const Body = ()=> {
    const [seeMore, setSeeMore] = useState(false)
    return <Center style={{height: '80vh'}}>
            <>
                <Slide direction="left" in={!seeMore}  unmountOnExit timeout={100} mountOnEnter>
                    <div>
                    <Typed text={["Hi There!","This is Harsh Maheshwari"]}/>
                    </div>
                </Slide>
                {!seeMore && <><Delay time= {5000}>
            <IconButton onClick={()=>setSeeMore(true)}>
            <ArrowCircleRightIcon  />
            </IconButton>
                </Delay></>
                    }
            </>
        <Slide direction="right" in={seeMore} mountOnEnter  unmountOnExit timeout={1000}>
            <div>
                Hey
            </div>
        </Slide>
    </Center>

}