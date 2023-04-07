import React from 'react';

const Footer = () => {
    return (
        <div className='lg:flex md:justify-center md:flex-row w-full h-auto lg:h-[558px] bg-primary bg-opacity-5 pt-7 lg:pt-[120px] px-10 lg:px-[150px]'>
            <div className="text-option lg:w-[50%] h-full grid-cols-1 grid md:grid-cols-3 lg:grid-cols-3 gap-[70px]">
                <div>
                    <h3 className='text-2xl font-bold mb-5'>Section</h3>
                    <p className='text-xl'>Home</p>
                    <p className='text-xl'>Features</p>
                    <p className='text-xl'>Pricing</p>
                    <p className='text-xl'>FAQs</p>
                    <p className='text-xl'>About</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-5'>Section</h3>
                    <p className='text-xl'>UI/UX Design</p>
                    <p className='text-xl'>Product Design</p>
                    <p className='text-xl'>Back End Developer</p>
                    <p className='text-xl'>Front End Developer</p>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-5'>Resource</h3>
                    <p className='text-xl'>FAQ</p>
                    <p className='text-xl'>Privacy Policy</p>
                    <p className='text-xl'>Support</p>
                    <p className='text-xl'>Terms of Service</p>
                </div>
            </div>
            <div className="text-and-sh pt-10 lg:pt-0 lg:w-[50%] h-full">
                <h1 className='text-2xl font-bold mb-5'>Subscribe to our newsletter</h1>
                <p className='text-xl mb-5'>There are many variations of passages of available, <br /> but the majority have suffered</p>
                <form>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Email address" className="input input-bordered bg-transparent md:h-[64px] md:w-[330px] lg:h-[64px] lg:w-[330px]" />
                            <button className="btn btn-primary px-6 py-4 lg:w-[146px] md:w-[146px] lg:h-[64px] md:h-[64px] text-black font-bold">
                            Subscribe
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Footer;