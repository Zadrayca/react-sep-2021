import './App.css';

import Main from "./components/Main";
import {MyPosts} from "./components/Posts";
import {propsArr, MyUsers} from "./components/Users";
import {MyComments} from "./components/Comments";

function App() {
    MyPosts();
    MyUsers();
    MyComments();

    return (
    <div>
        <div key={propsArr.id}>
            {
                propsArr.map(value => <Main key={value.id} id={value.id} bot={value.bot}/>)
            }
        </div>
        {/*<Main id={1} bot={1}/>*/}
        {/*<Main id={2} bot={11}/>*/}
        {/*<Main id={3} bot={21}/>*/}
        {/*<Main id={4} bot={31}/>*/}
        {/*<Main id={5} bot={41}/>*/}
        {/*<Main id={6} bot={51}/>*/}
        {/*<Main id={7} bot={61}/>*/}
        {/*<Main id={8} bot={71}/>*/}
        {/*<Main id={9} bot={81}/>*/}
        {/*<Main id={10} bot={91}/>*/}
    </div>
  );
}

export default App;