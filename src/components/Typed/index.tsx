import {FC, useMemo, useRef} from "react";
//@ts-ignore
import TypeWriterEffect from 'react-typewriter-effect';
import {useTheme} from "../../context/ThemeProvider";

export const Typed: FC<{ text: string | string[] }> = ({text}) => {

    const {isLight} = useTheme()
    const ref = useRef()
    const isString = useMemo(()=>typeof(text)==='string',[text])

    const props = {
        startDelay:100,
        cursorColor: isLight? "black" : "white",
        typeSpeed:100,
        textStyle:{
            fontSize: '1.5em',
        }
    }
    return <>
        <div ref={ref.current}/>
        {isString ? <TypeWriterEffect
            text={text}
            scrollArea={ref.current}
                {...props}
        /> : <TypeWriterEffect
            multiText={text}
            multiTextDelay={1000}
            scrollArea={ref.current}
            {...props}
        />
        }
    </>
}