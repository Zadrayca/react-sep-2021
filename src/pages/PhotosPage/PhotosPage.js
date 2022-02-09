import React from 'react';

import {Photos} from "../../components/Photos/Photos";
import css from "../AlbumsPage/AlbumsPage.module.css";

const PhotosPage = () => {
    return (
        <div className={css.details}>
            <Photos/>
        </div>
    );
};

export {PhotosPage};
