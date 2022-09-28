import {FloatField, IntField, Margin, Spaced, withSVGTheme} from "./index";
import {useState} from "react";
import {defaultErrorHandler, Equation, EquationOptions} from "react-equation";
import {defaultFunctions, defaultVariables} from "equation-resolver";
import {createTheme, Paper, ThemeProvider as MuiThemeProvider, Typography} from "@mui/material";
import {Line} from 'react-chartjs-2'
import {
    CategoryScale,
    Chart as ChartJS,
    ChartData,
    Filler,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);
const light = createTheme({
    palette: {
        mode: 'light',
    },
})

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Reducing biterror rate with no of retries',
        },
    },
};
export const PacketErrorRate = withSVGTheme(() => {
    const [ber, setBer] = useState(0.0001)
    const [l, setL] = useState(1024)
    const [mMax, setMMax] = useState(5)

    // @ts-ignore
    const base = [...Array(mMax + 1).keys()]
    const bitError = base.map(e => Math.pow(1 - Math.pow(1 - ber, l * 8), e + 1))

    const chartData: ChartData = {
        labels: base,
        datasets: [{
            label: 'bit error rate with retries',
            data: bitError
        }]
    }
    return <>
        <Margin>
            <EquationOptions
                variables={defaultVariables}
                functions={{...defaultFunctions}}
                errorHandler={defaultErrorHandler}
            >
                <Typography variant={'h5'} style={{paddingBottom: 20}}> Packet error rate</Typography>
                <Equation value='PER = 1 - (1 - BER)^L'/>
                <Spaced>
                    {`PER = 1 - (1 - ${ber})`}<sup>{l * 8}  </sup>
                </Spaced>
                <Spaced>
                    {`PER = 1 - (${1 - ber})`}<sup>{l * 8}  </sup>
                </Spaced>
                <Spaced>
                    {`PER = 1 - (${Math.pow(1 - ber, l * 8)})`}
                </Spaced>
                <Spaced>
                    {`PER = ${1 - Math.pow(1 - ber, l * 8)}`}
                </Spaced>
            </EquationOptions>
        </Margin>
        <Margin style={{paddingTop: 20}}>
            <FloatField value={ber} onChange={setBer} label="BER (Bit error probability)"/>
        </Margin>
        <Margin>
            <FloatField value={l} onChange={setL} label="L (total length)"/>
        </Margin>
        <Margin>
            <EquationOptions
                variables={defaultVariables}
                functions={{...defaultFunctions}}
                errorHandler={defaultErrorHandler}
            >
                <Typography variant={'h5'} style={{paddingBottom: 20}}> Improvement on retries</Typography>
                <Equation value=' PER^(Mmax+1)'/>
                <Spaced>
                    {`${Math.pow(1 - Math.pow(1 - ber, l * 8), mMax + 1)}`}
                </Spaced>
                <Spaced>
                    {`${((Math.pow(1 - Math.pow(1 - ber, l * 8), mMax + 1)*100).toFixed(4))} %`}
                </Spaced>
            </EquationOptions>
        </Margin>
        <Margin style={{paddingTop: 20}}>
            <IntField value={mMax} onChange={setMMax} label="Mmax (No of retries)"/>
        </Margin>
        <Margin style={{maxWidth: 600}}>
            <MuiThemeProvider theme={light}>
                <Paper>
                {/* @ts-ignore */}
                <Line options={options} data={chartData} type={'line'}/>
                </Paper>
            </MuiThemeProvider>
        </Margin>
    </>
})