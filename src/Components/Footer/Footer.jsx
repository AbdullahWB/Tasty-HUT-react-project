import React from 'react';

const Footer = () => {
    return (
        <div className='flex w-full h-[558px] bg-primary bg-opacity-5 lg:pt-[120px] lg:px-[150px]'>
            <div className="text-option w-[50%] h-full grid grid-cols-3 gap-[70px]">
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
            <div className="text-and-sh w-[50%] h-full">
                <h1 className='text-2xl font-bold mb-5'>Subscribe to our newsletter</h1>
                <p className='text-xl mb-5'>There are many variations of passages of available, <br /> but the majority have suffered</p>
                <form>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Email address" className="input input-bordered bg-transparent h-[64px] w-[330px]" />
                            <button className="btn btn-primary px-6 py-4 w-[146px] h-[64px] text-black font-bold">
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