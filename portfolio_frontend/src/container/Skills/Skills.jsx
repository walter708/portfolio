import React from 'react'
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { useFetch } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor} from '../../client';

import "./Skills.scss"
const Skills = () => {
  const query = '*[_type == "experiences"]';
  const skillsQuery = '*[_type == "skills"]';
  const experiences = useFetch(query)
  const skills = useFetch(skillsQuery)
  return (
    <>
      <h2 className="head-text">Skills & Experiences</h2>
      <div className="app__skills-container">
        <motion.div className="app__skills-list">
            {skills.map((skill, index) => (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__skills-item app__flex"
                key={skill.name + index}
              >
                <div
                    className="app__flex"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <img src={urlFor(skill.icon)} alt={skill.name} />
                </div>
                <p className="p-text">{skill.name}</p>
              </motion.div>
              ))}
        </motion.div>
      
      
        <div className="app__skills-exp">
            {experiences.map((experience, index) => (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year + index}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work, index) => (
                    <div key={work.name + index}>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                      </motion.div>
                      <ReactTooltip
                        id={work.name}
                        effect="solid"
                        arrowColor="#fff"
                        eventOff="click"
                        className="skills-tooltip"
                      >
                        {work.desc}
                      </ReactTooltip>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
              ))}
        </div>
      </div>
    </>
  )
}
// :ch
export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);