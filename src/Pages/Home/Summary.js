import React from 'react';
import background from '../../images/Banner/blue.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faMoneyBillTrendUp, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
const Summary = () => {
    return (
        <section style={{
            background: `url(${background})`
        }} className='my-20 px-12'>

            <div className='text-center mt-[100px]'>
                <h3 className='text-4xl text-white'>MILLIONS BUSINESS TRUST US</h3>
                <h2 className='text-xl text-white'>TRY TO UNDERSTAND USERS EXPECTATION</h2>
            </div>
            <div className=' my-10 mt-[100px]'>
                <div className='flex justify-center items-center'>
                    <div className="stats shadow">

                        <div className="stat">
                            <div className="stat-figure text-primary">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> */}
                                <FontAwesomeIcon className='w-12 h-12' icon={faPeopleGroup} />
                            </div>
                            <div className="stat-title">Customers</div>
                            <div className="stat-value text-primary">Served 100+</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-primary">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg> */}
                                <FontAwesomeIcon className='w-10 h-10' icon={faGear} />
                            </div>
                            <div className="stat-title">Tools</div>
                            <div className="stat-value text-primary">50+</div>
                            <div className="stat-desc">51% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> */}
                                <FontAwesomeIcon className='w-10 h-10' icon={faMoneyBillTrendUp} />
                            </div>
                            <div className="stat-title"> Annual revenue</div>
                            <div className="stat-value text-secondary">120M+</div>
                            <div className="stat-desc">21% more than last month</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <div className="avatar online">
                                    <div className="w-16 rounded-full">
                                        <img src="https://api.lorem.space/image/face?w=128&h=128" />
                                    </div>
                                </div>
                            </div>
                            <div className="stat-value">33K+</div>
                            <div className="stat-title">Reviews</div>
                            <div className="stat-desc text-secondary">31 Reviews remaining</div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-center mt-4 my-20'>
                    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Request for Quote</h2>
                            <p>Have any Question about us or get a product request?</p>
                            <p>Don't hesitate to contact us</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Contact Us</button>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;