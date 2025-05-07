import React from "react";
import styles from "@/styles/AboutMe.module.css";
import Link from "next/link";
import { Card } from "react-bootstrap";

const AboutMe = () => {
  return (
    <>
      <div className={styles.cover}>
        <h1 className={styles.carissa}>Carissa Cho</h1>
        <hr className={styles.hr} />
      </div>

      <div className={styles.positioncard}>
        <Card className={styles.stylecard}>
          <Card.Body>
            <Card.Text>
              <br></br>
              I am a passionate and results-driven developer with a diploma in
              Computer Programming and Analysis from Seneca College, and
              hands-on experience as a Low Code Application Developer. My career
              path reflects a strong blend of technical expertise,
              problem-solving ability, and leadership, particularly in public
              sector environments. <br></br><br></br> As a Co-op Developer with the Ministry of
              Public and Business Service Delivery and Procurement, I developed
              custom applications using tools such as Power Automate, Power
              Apps, C#, React, and Java. My focus was on automating workflows,
              integrating systems, and modernizing legacy infrastructure to
              boost efficiency and improve data accuracy. I strive to deliver
              user-friendly, accessible solutions that meet both functional
              needs and government compliance standards. <br></br> <br></br> I take pride in my
              ability to collaborate effectively across teams, working closely
              with UI/UX designers, business analysts, and cross-functional
              stakeholders to deliver scalable and accessible applications. I
              also conducted accessibility testing using tools like WAVE and
              Lighthouse to ensure compliance with WCAG 2.1 standards. <br></br><br></br> Before
              transitioning into tech, I developed strong leadership,
              communication, and problem-solving skills as a Cash Office
              Supervisor at No Frills, where I was responsible for ensuring the
              integrity of daily financial operations. <br></br><br></br> With a solid foundation
              in programming languages, web and mobile development, and a
              commitment to continuous learning, I am eager to apply my skills
              and creativity to build innovative, impactful solutions.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default AboutMe;
