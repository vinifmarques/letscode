import React, { useState } from "react";
import Button from "./components/Button";

function App_lifecycle() {
    const [mountingCount, setMountingCount] = useState(0)
    const [unmountCount, setDismountgCount] = useState(0)
    const mountingScore = () => setMountingCount(mountingCount + 1)
    const dismountingScore = () => setDismountgCount(unmountCount +1)

    return (
        <>
            <h1>Hide and Seek</h1>
            <button onClick={}> Hide or Show</button>
            <p>Quantidade de vezes que foi montado: {mountingCount}</p>
            <p>Quantidade de vezes que foi desmontado: {unmountCount}</p>
        </>
    )
}

export default App_lifecycle