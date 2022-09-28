import React, {useEffect, useRef, useState} from 'react'
import {Button, Paper, styled} from "@mui/material";

const Content = styled(Paper)({
    width: '100vw',
    height: '100vh',
    borderRadius: '0px',
    overflowY: 'auto',
})
export const BPC = () => {
    const ref = useRef<HTMLCanvasElement>()
    const [img, setImage] = useState();
    const [d, setD] = useState('')
    const [{width, height}, setDims] = useState({width: 0, height: 0})
    const [_2D, set2D] = useState();
    useEffect(() => {
        if (img) {
            const im = new Image();
            im.src = img
            // @ts-ignore
            setD(im.outerHTML)
            console.log(im.width)
            im.addEventListener('load', function (data) {
                console.log("data:: ", this)
                //@ts-ignore
                const cnv: HTMLCanvasElement = document.getElementById('canvas')
                const ctx = cnv.getContext('2d')
                // @ts-ignore
                ctx.drawImage(im, 0, 0)
                // @ts-ignore
                const imgData = ctx.getImageData(0, 0, width, height).data;
                // @ts-ignore
                set2D(imgData)
            })
        }
    }, [ref, ref.current, img, width, height])

    useEffect(() => {
        if (_2D) {
            // @ts-ignore
            console.log(_2D)
            // @ts-ignore

            //@ts-ignore
            const cnv: HTMLCanvasElement = document.getElementById('canvas')
            const ctx = cnv.getContext('2d')
            // @ts-ignore
            ctx.drawImage(new Image(_2D, width, height), 0, 0)
        }
    }, [_2D])
    return <Content>
        <Button
            variant="contained"
            component="label"
            onChange={e => {
                //@ts-ignore
                console.log(e.target.files[0])
                var reader = new FileReader();
                //Read the contents of Image File.
                //@ts-ignore
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = function (e) {
                    //Initiate the JavaScript Image object.
                    var image = new Image();

                    //Set the Base64 string return from FileReader as source.
                    // @ts-ignore
                    image.src = e.target.result;

                    //Validate the File Height and Width.
                    image.onload = function () {
                        // @ts-ignore
                        var height = this.height;
                        // @ts-ignore
                        var width = this.width;
                        if (height > 200 || width > 200) {

                            //show width and height to user
                            setDims({width, height})
                            return false;
                        }
                        alert("Uploaded image has valid Height and Width.");
                        return true;
                    };

                }
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
        {JSON.stringify({width, height})}
        <div dangerouslySetInnerHTML={{__html: d}}/>

        {/* @ts-ignore*/}
        <canvas id={'canvas'} width={width} height={height}/>
    </Content>
}