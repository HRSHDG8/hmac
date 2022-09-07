import {IconButton, Slide} from "@mui/material";
import {Typed} from "../../Typed";
import {Delay} from "../../Delay";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import {Dispatch, FC, SetStateAction} from "react";

export const PhaseOne: FC<{ seeMore: boolean, setSeeMore: Dispatch<SetStateAction<boolean>> }> = ({
                                                                                                      seeMore,
                                                                                                      setSeeMore
                                                                                                  }) => {
    return <>
        <Slide direction="left" in={!seeMore} unmountOnExit timeout={100} mountOnEnter>
            <div>
                <Typed text={["Hi There!", "This is Harsh Maheshwari"]}/>
            </div>
        </Slide>
        {!seeMore && <><Delay time={5000}>
            <IconButton onClick={() => setSeeMore(true)}>
                <ArrowCircleRightIcon/>
            </IconButton>
        </Delay></>
        }
    </>
}