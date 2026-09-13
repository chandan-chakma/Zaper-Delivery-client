import React, { useState } from 'react';

const Mytabs = () => {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div>
            <div role="tablist" className="tabs tabs-box">
                <button
                    className={`ml-3  text-black tab ${activeTab === "overview" ? "bg-primary" : ""}`}
                    onClick={() => setActiveTab("overview")}
                >
                    Stroy
                </button>

                <button
                    className={`ml-3 text-black tab ${activeTab === "details" ? "bg-primary" : ""}`}
                    onClick={() => setActiveTab("details")}
                >
                    Missionn
                </button>

                <button
                    className={`ml-3 text-black tab ${activeTab === "reviews" ? "bg-primary" : ""}`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Success
                </button>
                <button
                    className={`ml-3 text-black tab ${activeTab === "reviews" ? "bg-primary" : ""}`}
                    onClick={() => setActiveTab("reviews")}
                >
                    Teams & Others
                </button>
            </div>

            <div className="my-5">
                {activeTab === "overview" &&
                    <div className='space-y-5 '>
                        <p className='text-[#606060]'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
                        <p className='text-[#606060]'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
                        <p className='text-[#606060]'>We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.</p>
                </div>
                }
                {activeTab === "details" && <div>Details content</div>}
                {activeTab === "reviews" && <div>Reviews content</div>}
            </div>
        </div>
    );
};

export default Mytabs;