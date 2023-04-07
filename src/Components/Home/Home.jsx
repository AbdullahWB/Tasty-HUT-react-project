import React from 'react';

const Home = () => {
    return (
        <div>
            <div className='w-full h-[650px] relative'>
                <img className='object-cover w-full h-auto lg:h-full' src="Rectangle3978.png" alt="Rectangle3978.png" />
                <div className='w-full h-full absolute top-0 left-0 bg-black bg-opacity-70 text-center flex justify-center items-center flex-col'>
                    <h1 className='lg:text-6xl text-white md:text-4xl text-2xl font-extrabold mb-6'>Taste Our Delicious <br /> Best Foods</h1>
                    <p className='text-[18px] text-white mb-6'>There are many variations of passages of Lorem Ipsum available, but the majority have <br /> suffered alteration in some form, by injected humou.</p>
                    <form>
                        <div className="form-control">
                            <div className="input-group justify-center">
                                <input type="text" placeholder="Search…" className="input input-bordered py-4 pr-[400px]" />
                                <button className="btn btn-primary px-9 py-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;