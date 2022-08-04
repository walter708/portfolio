import React from 'react';
import { motion } from 'framer-motion';
import { urlFor} from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { useFetch } from '../../constants';
import "./About.scss";

const About = () => {
  const query = '*[_type == "abouts"]';
  const abouts = useFetch(query)
  return (
    <>
    <h2 className="head-text">I Know that <span>Good Design</span> <br />means <span>Good Business</span></h2>
    {abouts && 
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{duration:0.5, type:'tween'}}
          className="app__profile-item"
          key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    
    }
   </>
  )
}

export default AppWrap ( 
  MotionWrap(About, 'app__about'), 
            'about',
             'app__whitebg')