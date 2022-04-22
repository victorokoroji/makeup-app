import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MakeUpCard = ({
  foundation, className, dataAos,
}) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <NavLink to={`/makeup/${foundation.name.toLowerCase()}`} state={{ foundations: foundation }}>
      <div className={className} data-aos={dataAos}>
        <div className="img-card">
          <img src={foundation.api_featured_image} alt="makeup" />
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
        <div className="card-name">
          <h3>{foundation.brand}</h3>
          <p>{foundation.name}</p>
        </div>
      </div>
    </NavLink>
  );
};

MakeUpCard.propTypes = {
  foundation: propTypes.objectOf(
    propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.bool, propTypes.array]),
  ).isRequired,
  className: propTypes.string,
  dataAos: propTypes.string.isRequired,
};

MakeUpCard.defaultProps = {
  className: null,
};

export default MakeUpCard;
