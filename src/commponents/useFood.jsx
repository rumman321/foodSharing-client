import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useFood = (search,sort) => {
    const [foods,setFoods]=useState([])
    const [loading,setLoading]=useState(true)


    useEffect(()=>{
        
        axios.get(`${import.meta.env.VITE_API_URL}/foods?search=${search}&sort=${sort}`)
        .then(res=>{
            setLoading(false)
            setFoods(res.data)
        })
        
    },[search,sort])
    return {foods,loading}
};

export default useFood;