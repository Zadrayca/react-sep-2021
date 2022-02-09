import React from "react";

import css from "./Photo.module.css"

const Photo = ({photo}) => {

    const {albumId, id, title, thumbnailUrl} = photo;

    return (
        <div className={css.photoBox}>
            <div>
                <div>Id: {id}</div>
                <div>AlbumId: {albumId}</div>
                <div>Title: {title}</div>
            </div>
            <div><img src={thumbnailUrl} alt="photo"/></div>
        </div>
    );
};

export {Photo};
