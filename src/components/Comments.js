import {useEffect, useState} from "react";


export default function Comments(props) {

    let [comments, setComments] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            })

    }, []);

    let result = comments.filter(comment => comment.postId >= props.id && comment.postId <= props.id + 9);

    return (
        <div>
            <div className={'botMax'}>{result.map(value =>
                <div className={'botMini'} key={value.id}>
                    Comments id: {value.id}<br/>
                    title: {value.name}<br/>
                </div>
            )}
            </div>
        </div>

    )
}