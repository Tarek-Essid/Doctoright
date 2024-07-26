import React, { useState } from 'react';
import './Statisticas.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Statisticas = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="box">
      {/* HEADERS */}
      <h4 className="el-h">Find Your Doctor</h4>
      <h4 className="el-h">Book Your Appointment</h4>
      <h4 className="el-h">Access Your Health Records</h4>
      <h4 className="el-h">Read Our Latest Blog Posts</h4>

      {/* NUMBERS */}
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}>
        <h1 className="num-1">
          {counterOn && <CountUp start={0} end={1} duration={12} />}M
        </h1>
        <h1 className="num-2">
          {counterOn && <CountUp start={0} end={98} duration={5} />}
        </h1>
        <h1 className="num-3">
          {counterOn && <CountUp start={0} end={1246} duration={5} />}
        </h1>
        <h1 className="num-4">
          {counterOn && <CountUp start={0} end={980} duration={5} />}
        </h1>
      </ScrollTrigger>

      {/* PARAGRAPHS */}

      <p className="para-1">
        Find the perfect doctor based on your healthcare needs and preferences.
      </p>
      <p className="para-2">
        Book a consultation or appointment with your chosen doctor quickly and
        easily.
      </p>
      <p className="para-3">
        Access your medical records securely and conveniently anytime, anywhere.
      </p>
      <p className="para-4">
        Stay up-to-date with the latest healthcare news and advice from our
        experts.
      </p>
    </div>
  );
};

export default Statisticas;
