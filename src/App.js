import css from "./App.module.css"

import {Cars, Form} from "./Components";

function App() {


    return (
        <div className={css.bigBox}>
            <div><Form/></div>
            <div><Cars/></div>
        </div>
    );
}

export default App;