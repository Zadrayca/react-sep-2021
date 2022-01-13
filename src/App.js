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
    </div>
  );
}

export default App;