import React from 'react';
import { Col, Row } from 'react-bootstrap';
import headerImg from '../../assets/img/header-img.svg'

const Hero = () => {
    return (
        <>
            <section className="banner" id="home">
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Rakib`} <span className='wrap'>web developer</span></h1>
                    <p>Hello! This is Rakib Sarowar, an accomplished front-end developer and creatice designer, driven by a deep-seated passion for coding and creating. With extensive expertise in both fields, I am adept at crafting dynamic and captivating web projects that engage and inspire. </p>
                    <button onClick={()=>console.log('connect')}>Let's connect</button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="" />
                </Col>

            </Row>
            </section>
        </>
    );
};

export default Hero;