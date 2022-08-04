import React from 'react'
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';
import { useFetch } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import "./Skills.scss"
const Skills = () => {
  const query = '*[_type == "experiences"]';
  const skillsQuery = '*[_type == "skills"]';
  const experiences = useFetch(query)
  const skills = useFetch(skillsQuery)
  return (
    <div>Skills</div>
  )
}

export default Skills