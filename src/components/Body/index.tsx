import {Center} from "../Center";
import {Block} from "../Block";
import {Nav} from "../Nav";

export const Body = () => {
    return <Center>
        <Nav/>
        <Block id={'intro'}>
            <div>
                Hi
            </div>
        </Block>

        <Block id={'about'}>
            <div>
                Hi
            </div>
        </Block>
    </Center>

}