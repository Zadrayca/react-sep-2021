import Users from "./Users";
import Posts from "./Posts";
import Comments from "./Comments";

export default function Main(props) {
    return (
        <div className={'app'}>
            <div className={'topBlock'}>
                <div className={'top'}><Users id={props.id}/></div>
                <div className={'top'}><Posts id={props.id}/></div>
            </div>
            <div className={'bottomBlock'}>
                <div className={'bot'}><Comments id={props.bot}/></div>
            </div>
        </div>
    );
}

