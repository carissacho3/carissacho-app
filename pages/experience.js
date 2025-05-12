import React from "react";
import styles from "@/styles/Experience.module.css";
const Experiences = () => {
  return (
    <>
      <div className={styles.title}>
        <h1>Experience</h1>
        <p>Get to know my skills</p>
      </div>
      <hr></hr>

      <div className={styles.exp1}>
        <p className={styles.position}>
          Low Code Application Developer (Co-Op)/Part-time,{" "}
          <span className={styles.workplace}>
            Ministry of Public and Business Service Delivery and Procurement
          </span>
        </p>
        <p> January 2, 2024- May 2, 2025 </p>
        <ol className={styles.ol}>
          <li>
            Spearheaded the development of custom applications using Power
            Automate, Dataverse, Power Apps,C#, React, Java, that directly
            improves internal workflows by automating tasks that previously
            required manual intervention, leading to significant time savings.
          </li>
          <li>
            Collaborated with the UI/UX team to redesign and enhance multiple
            web interfaces, focusing on accessibility, usability, and visual
            appeal, resulting in improved user satisfaction.
          </li>
          <li>
            Utilized WAVE and Lighthouse testing tools to ensure that
            applications met accessibility standards, particularly in areas like
            color contrast, screen reader support, and keyboard navigation.
          </li>
          <li>
            Engaged in problem-solving sessions to address both technical and
            functional challenges.{" "}
          </li>
          <li>
            Worked closely with cross-functional teams to integrate low-code
            solutions into larger enterprise systems, which helped modernize
            legacy systems and enhance data management across ministries.
          </li>
        </ol>
      </div>

      <div className={styles.exp2}>
        <p className={styles.position}>
          Cashier & Cash Office (Supervisor),{" "}
          <span className={styles.workplace}>No Frills</span>
        </p>
        <p>September 19,2019 - July 21, 2023</p>
        <ol className={styles.ol}>
          <li>
            Led the daily financial reconciliation process, balancing cash
            registers, processing store deposits, and ensuring that all
            financial records were accurate and compliant with company policies.
            This responsibility helped maintain the store’s financial integrity
            and minimized discrepancies.
          </li>
          <li>
            Acted as a key point of contact between the cash office and store
            management, facilitating clear communication and swift resolution of
            any financial issues. By efficiently managing this process, you
            contributed to smoother store operations and reduced wait times for
            cash register replenishment.
          </li>
          <li>
            Implemented improvements in cash handling procedures, ensuring that
            paperwork was filed systematically and deposits were completed
            efficiently, which helped reduce errors and improved the speed of
            daily financial reporting.
          </li>
          <li>
            Resolved customer issues with empathy and efficiency, often handling
            escalations for irate or dissatisfied customers. By listening to
            concerns and offering quick solutions, you contributed to a positive
            shopping experience and strengthened customer loyalty.
          </li>
          <li>
            Assisted in training new cashiers, ensuring they were familiar with
            company policies, cash handling procedures, and customer service
            standards. This helped new staff integrate quickly into the team and
            maintain high service levels.
          </li>
          <li>
            Proactively ensured that the register area was well-stocked with
            supplies, preventing delays during busy hours and contributing to a
            seamless checkout experience for customers
          </li>
        </ol>
      </div>
      <br></br>
    </>
  );
};

export default Experiences;
