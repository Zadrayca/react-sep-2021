import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCarById} from "../../Store";

const Form = () => {

    const {carForUpdate} = useSelector(state => state['carReducer']);

    const {handleSubmit, register, reset, setValue} = useForm();

    const dispatch = useDispatch();

    const submit = (data) => {
        console.log(data);
        if (carForUpdate) {
            dispatch(updateCarById({id: carForUpdate.id, car: data}))
            reset();
        } else {
            dispatch(createCar({data:data}))
            reset();
        }
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model);
            setValue('price', carForUpdate.price);
            setValue('year', carForUpdate.year);
        }
    }, [carForUpdate, setValue]);

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model: <input type="text" {...register('model', { pattern: /^[A-Za-z]+$/i, required: true })}/></label>
                <label>Price: <input type="number" {...register('price', { min: 1, max: 10000000 })}/></label>
                <label>Year: <input type="number" {...register('year', { min: 1990, max: 2022 })}/></label>
                <button value={'save'}>Save</button>
            </form>
        </div>
    );
};

export {Form};