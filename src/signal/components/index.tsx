import {styled, TextField} from "@mui/material";
import {ComponentType, Dispatch, FC, SetStateAction, useEffect, useRef} from "react";
import {useTheme} from "../../context/ThemeProvider";

export {UpperBound} from './UpperBound'
export {PacketErrorRate} from './PacketErrorRate'
export {RxSignalStrength} from './RxSignalStrength'

export const Margin = styled('div')({
    margin: 10
})

const NumberField = (parser: (string: string, radix?: number) => number): FC<{ value: number, onChange: Dispatch<SetStateAction<number>>, label: string }> => ({
                                                                                                                                                                   onChange,
                                                                                                                                                                   value,
                                                                                                                                                                   label
                                                                                                                                                               }) => {
    const setNumberValue = (val: string, setter: Dispatch<SetStateAction<number>>) => {
        try {
            const num = parser(val?.trim())
            if (isNaN(num)) {
                setter(0)
            } else {
                setter(num)
            }
        } catch (e) {

        }
    }
    return <TextField value={value} onChange={e => setNumberValue(e.target.value, onChange)} label={label}
                      variant="outlined"
                      autoComplete={'off'}/>
}

export function withSVGTheme<T>(Wrapped: ComponentType<T>): FC<T> {
    return (props: T) => {

        const {isLight} = useTheme()
        const ref = useRef<HTMLDivElement>()
        useEffect(() => {
            if (ref?.current) {
                const app = ref.current
                const svgs = app?.querySelectorAll('svg')
                svgs.forEach(svg => svg.setAttribute('fill', isLight ? 'black' : 'white'))
            }
        }, [isLight, ref])
        // @ts-ignore
        return <div ref={ref}>
            {/* @ts-ignore*/}
            <Wrapped {...props}/>
        </div>

    }
}

export const Spaced = styled('div')({
    paddingTop: 5,
    paddingBottom: 5
})

export const IntField = NumberField(parseInt)
export const FloatField = NumberField(parseFloat)