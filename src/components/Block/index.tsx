import React, {FC, ReactElement} from "react";

const style = {
    height: "calc(100vh - 20px)",
    width: 'calc(100vw - 60px)',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
};

export const Block: FC<{ id: number | string, children: ReactElement }> = ({id, children}) => {
    const uid = `card${id}`;
    return (
        <div id={uid} style={style}>
            {children}
        </div>
    );
};

