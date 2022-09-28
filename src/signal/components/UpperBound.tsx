import {useState} from "react";
import {defaultErrorHandler, Equation, EquationOptions} from "react-equation";
import {defaultFunctions, defaultVariables} from "equation-resolver";
import {Typography} from "@mui/material";
import {IntField, Margin, Spaced, withSVGTheme} from './index'


export const UpperBound = withSVGTheme(() => {
    const [b, setB] = useState(30)
    const [snr, setSnr] = useState(30)

    const snrDbToSnr = (snr: number) => {
        return Math.pow(10, parseFloat((snr / 10) + ''))
    }

    const calc = () => {
        return b * Math.log2(1 + snrDbToSnr(snr))
    }

    return <>
        <Margin>
            <EquationOptions
                variables={defaultVariables}
                functions={{...defaultFunctions}}
                errorHandler={defaultErrorHandler}
            >
                <Typography variant={'h5'} style={{paddingBottom: 20}}> Channel Capacity C</Typography>
                <Spaced>
                    SNR (in dB) = {snr}
                </Spaced>
                <Spaced>
                    SNR dB to regular SNR
                </Spaced>
                <Spaced>
                    SNR in dB = 10*log<sub>10</sub>(SNR)
                </Spaced>
                <Spaced>
                    {snr} = 10*log<sub>10</sub>(SNR)
                </Spaced>
                <Spaced>
                    {parseFloat((snr / 10) + '')} = log<sub>10</sub>(SNR)
                </Spaced>
                <Spaced>
                    SNR = 10 <sup>{parseFloat((snr / 10) + '')}</sup>
                </Spaced>
                <Spaced>
                    SNR = {snrDbToSnr(snr)}
                </Spaced>
                <Spaced>
                    <Equation
                        value='B*log(1 + SNR)'
                    />
                    <span> = </span>
                    <Equation
                        value={`${b}*log(1 + ${snrDbToSnr(snr)})`}
                    />
                    <span> = {calc()}</span>
                </Spaced>
            </EquationOptions>
        </Margin>
        <Margin style={{paddingTop: 20}}>
            <IntField value={b} onChange={setB} label="B (in Mbps)"/>
        </Margin>
        <Margin>
            <IntField value={snr} onChange={setSnr} label="SNR (in dB)"/>
        </Margin>
    </>
})