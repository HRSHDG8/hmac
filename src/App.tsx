import React from 'react';
import {ThemeProvider} from "./context/ThemeProvider";
import {StarField} from "./components/StarField";
import {Portfolio} from "./components/Portfolio";

function App() {
    return (
        <ThemeProvider>
            <StarField>
                <Portfolio/>
            </StarField>
        </ThemeProvider>
    );
}

export default App;
