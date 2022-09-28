import {Typography} from "@mui/material";
import {defaultErrorHandler, EquationEvaluate, EquationOptions} from 'react-equation'
import {defaultFunctions, defaultVariables} from 'equation-resolver'
import {useState} from "react";
import {Margin, IntField, withSVGTheme} from './index'

export const RxSignalStrength = withSVGTheme(() => {
    const [pt, setPt] = useState(100)
    const [gr, setGr] = useState(100000)
    const [gt, setGt] = useState(1000)
    const [lambda, setLambda] = useState(2400000000)
    const [d, setD] = useState(384400000)

    return <>
        <Margin>
            <EquationOptions
                variables={defaultVariables}
                functions={defaultFunctions}
                errorHandler={defaultErrorHandler}
            >
                <Typography variant={'h5'} style={{paddingBottom: 20}}> RxSignal</Typography>
                <EquationEvaluate
                    value='(Pt*Gr*Gt*λ^2)/((4*π)^2*d^2)'
                    variables={{
                        Pt: {type: 'number', value: pt},
                        Gr: {type: 'number', value: gr},
                        Gt: {type: 'number', value: gt},
                        'λ': {type: 'number', value: lambda},
                        d: {type: 'number', value: d}
                    }}
                />
            </EquationOptions>
        </Margin>
        <Margin style={{paddingTop: 20}}>
            <IntField
                value={pt}
                onChange={setPt}
                label="Pt (in watts)"
            />
        </Margin>
        <Margin>
            <IntField
                value={gr}
                onChange={e => setGr} label="Gr"
            />
        </Margin>
        <Margin>
            <IntField
                value={gt}
                onChange={setGt} label="Gt"
            />
        </Margin>
        <Margin>
            <IntField
                value={lambda}
                onChange={setLambda} label="λ (in Hz)"
            />
        </Margin>
        <Margin>
            <IntField
                value={d}
                onChange={setD} label="d (in meter)"
            />
        </Margin>
    </>
})