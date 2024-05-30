import React, { useRef, useState } from 'react';
const Visual = () => {
    return (
        <>
            <section id="visual">
                <ul className="main-banner">
                    <li></li>
                </ul>
                <p className="btn-wrap">
                    <button className="btn prev">
                        <i className="xi-long-arrow-left"></i>
                    </button>
                    <button className="btn next">
                        <i className="xi-long-arrow-right"></i>
                    </button>
                </p>
                <ul className="paging">
                    <li className="on"></li>
                    <li></li>
                    <li></li>
                    <i className="xi-pause"></i>
                </ul>
            </section>
        </>
    );
};

export default Visual;
