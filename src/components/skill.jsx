import React from 'react'

const Skill = ({ skill, percentage, timing }) => {
  // const fill = `
  //   @keyframes fillIn {
  //     from {
  //       width: 0%;
  //     }

  //     to {
  //       width: ${percentage}%
  //     }
  //   }
  // `
  return (
    <div className="skills__list__item flex-row">
      <div className="skills__list__item-name">{skill}</div>
      <div className="bar">
        <div style={{ width: `${percentage}%`}} className="bar__fill"></div>
        <span className="bar-percentage">{percentage}%</span>
      </div>
    </div>
  )
};

export default Skill;