import {Box, Slide, Typography, Unstable_Grid2 as Grid} from "@mui/material";
import {FC} from "react";
import {Glass} from "../../Glass";
import {Center} from '../../Center'

const Item = (props: any) => <Glass><Center {...props}/></Glass>

export const PhaseTwo: FC = () => (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1000}>
        <Box sx={{flexGrow: 1, width: '100%'}}>
            <Grid container spacing={2}>
                <Grid xs={12} sm={12} lg={4} md={4} xl={4}>
                    <Grid container spacing={2}>

                        <Grid xs={12}>
                            <Item>
                                <Typography variant={'h5'}>
                                    Harsh Maheshwari
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid xs={4}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid xs={8}>
                            <Item>xs=8</Item>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid xs={12} sm={12} lg={8} md={8} xl={8}>
                    <Grid container spacing={2}>

                        <Grid xs={8}>
                            <Item>xs=8</Item>
                        </Grid>
                        <Grid xs={4}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid xs={4}>
                            <Item>xs=4</Item>
                        </Grid>
                        <Grid xs={8}>
                            <Item>xs=8</Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </Slide>
)