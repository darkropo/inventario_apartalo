import React from "react";
import { FaCode, FaStar, FaStarHalfAlt } from 'react-icons/fa';

const skillsData = [
  { id: 1, name: 'Php' },
  { id: 2, name: 'JavaScript' },
  { id: 3, name: 'HTML/CSS' },
  { id: 4, name: 'Bootstrap' },
  { id: 5, name: 'Node.Js' },
  { id: 6, name: 'React.Js' },
  { id: 7, name: 'Express.js' },
  { id: 8, name: 'CakePhp' },
  { id: 9, name: 'Jquery' },
  { id: 10, name: 'Postman' },
  { id: 11, name: 'Cypress' },
  { id: 12, name: 'Git' },
  { id: 13, name: 'Scrum' },
  { id: 14, name: 'Jira' },

];

const initialRatings = [4.5, 4.5, 4.5, 3.5, 4, 3, 3, 4, 3.5, 4, 3.5, 4, 4, 3.5];

const PresetStarRating = () => {
  return (
    <div className="preset-star-rating">
      <div className="section sidesec">
        <h2>
          <FaCode /> Skills
        </h2>
        <table>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {skillsData.map(({ id, name }, index) => (
              <tr key={id}>
                <td>{name}</td>
                <td>
                  {[...Array(5)].map((_, i) => {
                    const ratingValue = i + 1;
                    const isReadOnly = initialRatings[index] !== 0;
                    let icon;

                    if (ratingValue <= initialRatings[index]) {
                      icon = <FaStar className="star-filled" />;
                    } else if (ratingValue - 0.5 <= initialRatings[index]) {
                      icon = <FaStarHalfAlt className="star-filled" />;
                    } else {
                      icon = <FaStar className="star-empty" />;
                    }

                    return (
                      <span
                        key={ratingValue}
                        className="star"
                        onClick={() => {
                          if (!isReadOnly) {
                            alert('You cannot change the rating!');
                          }
                        }}
                        role="button"
                        tabIndex={0}
                      >
                        {icon}
                      </span>
                    );
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PresetStarRating;
