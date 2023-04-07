import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Cart = ({ meal }) => {
    const { idMeal, strMeal, strMealThumb, strInstructions } = meal;
    return (
        <div>
            <div className="card card-side flex flex-col md:flex-row lg:flex-row w-full h-full bg-base-100 shadow-xl">
                <figure><img className='w-[230px] h-[300px]' src={strMealThumb} alt="Movie" /></figure>
                <div className="card-body w-[320px]">
                    <h2 className="card-title">{strMeal}</h2>
                    <p>{strInstructions.substring(0, 210)} ......</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;