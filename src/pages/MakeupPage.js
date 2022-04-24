import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faGear } from '@fortawesome/free-solid-svg-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllFoundations } from '../redux/makeups/makeups';
import TableRow from '../components/TableRow';

const MakeupPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let makeupId;
  if (location.state.foundations) {
    makeupId = location.state.foundations.id;
    localStorage.setItem('makeupId', JSON.stringify(makeupId));
  } else {
    makeupId = JSON.parse(localStorage.getItem('makeupId'));
  }

  const dispatch = useDispatch();

  const allFoundations = useSelector((state) => state.makeups, shallowEqual);
  const foundations = allFoundations.slice(2, 72);
  const data = foundations.filter((foundation) => foundation.id === makeupId)[0];

  useEffect(() => {
    dispatch(getAllFoundations());
  }, []);

  return (
    <section className="makeup-section">
      <header>
        <button type="button" onClick={() => navigate(-1)} className="navigate">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2>{data && data.brand}</h2>
        <div className="icons">
          <FontAwesomeIcon icon={faGear} />
        </div>
      </header>
      <div className="foundation-section">
        <div className="foundation-intro">
          <img src={data && data.api_featured_image} alt="makeup" className="foundation-img" />
          <div className="intro-desc">
            <h2>{data && data.name}</h2>
            <p>{data && data.category}</p>
          </div>
        </div>
      </div>
      <section className="makeup-desc">
        <p>FOUNDATION BREAKDOWN</p>
        <table>
          {data && (
          <tbody>
            <TableRow name="Product Name" value={data.name} className="odd" />
            <TableRow name="Product Type" value={data.product_type} className="even" />
            <TableRow name="Brand" value={data.brand} className="odd" />
            <TableRow name="Category" value={data.category} className="even" />
            <TableRow
              name="Price"
              value={`${parseInt(data.price, 10) * 450} Naira`}
              className="odd"
            />
            <TableRow name="Visit website" value={data.website_link} className="even" />
          </tbody>
          )}
        </table>
      </section>
      <div className="base-text">
        <p>Data by Foundation brand</p>
        <p>Source: http://makeup-api.herokuapp.com/</p>
      </div>
      <div className="footer">
        <p>Created by Okoroji Victor Ebube at Microverse Inc., US.</p>
      </div>
    </section>
  );
};

export default MakeupPage;
