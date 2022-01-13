import {useEffect, useState} from "react";


export default function Rokets() {

    let [rokets, setRokets] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setRokets(value);
            })

    }, []);
    let result = rokets.filter(roket => roket.launch_year !== "2020");

    let count = 0;

    return (
        <div>
            {
                result.map(value =>
                <div className={'bigBox'} key={count+=1}>
                    <div className={'miniBox'}>
                        <div><h2>{value.mission_name}</h2></div>
                        <div>{value.launch_year}</div>
                    </div>
                    <div className={'miniBox'}>
                        <img src={value.links.mission_patch_small} alt="mission_patch_small"/>
                    </div>

                </div>
                )
            }
        </div>
    )


}