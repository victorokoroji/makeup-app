import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import MakeUpCard from './MakeUpCard';
import Input from './Input';
import { getAllFoundations } from '../redux/makeups/makeups';
import loader from '../assets/images/loading.gif';

const MakeupCards = () => {
  const dispatch = useDispatch();
  const allFoundations = useSelector((state) => state.makeups, shallowEqual);
  const foundations = allFoundations.slice(2, 72);
  const [internalState, setInternalState] = useState(foundations);
  const [inputStateValue, setInputStateValue] = useState('');

  const filterByNameOrBrand = (value) => {
    let filteredFoundations = foundations.filter(
      (foundation) => foundation.name.toLowerCase().includes(value.toLowerCase())
|| foundation.brand.toLowerCase().includes(value.toLowerCase()),
    );
    filteredFoundations = filteredFoundations.length === 0 ? [false] : filteredFoundations;
    setInternalState(filteredFoundations);
  };

  const handleInputChange = (event) => {
    setInputStateValue(() => {
      filterByNameOrBrand(event.target.value);
    });
  };

  useEffect(() => {
    dispatch(getAllFoundations());
  }, []);

  let isEven = true;
  let isOdd = false;

  return (
    <section className="all-makeups">
      <div className="intro-action">
        <Input
          type="search"
          name="search"
          className="search"
          placeholder="Search here"
          value={inputStateValue}
          onChange={handleInputChange}
        />
      </div>
      <h2>YOUR FOUNDATIONS</h2>

      {(foundations.length === 0 || allFoundations === undefined) ? (
        <div className="not-found">
          <img src={loader} alt="loader" />
        </div>
      ) : (
        <div className="cards">
          {(internalState.length === 0 ? foundations : internalState).map((foundation, index) => {
            if (foundation === false) {
              return (
                <div key={uuidv4()} className="not-found">
                  <p>No match found </p>
                </div>
              );
            }

            if (index % 2 === 0 && isEven) {
              isEven = !isEven;
              return (
                <MakeUpCard
                  key={uuidv4()}
                  className="card even"
                  dataAos="flip-left"
                  foundation={foundation}
                  id={foundation.id}
                />
              );
            }
            if (index % 2 === 0 && !isEven) {
              isEven = !isEven;
              return (
                <MakeUpCard
                  key={uuidv4()}
                  className="card odd"
                  dataAos="flip-right"
                  foundation={foundation}
                  id={foundation.id}
                />
              );
            }
            if (index % 2 === 1 && !isOdd) {
              isOdd = !isOdd;
              return (
                <MakeUpCard
                  key={uuidv4()}
                  className="card odd"
                  dataAos="flip-left"
                  foundation={foundation}
                  id={foundation.id}
                />
              );
            }
            if (index % 2 === 1 && isOdd) {
              isOdd = !isOdd;

              return (
                <MakeUpCard
                  key={uuidv4()}
                  className="card even"
                  dataAos="flip-right"
                  foundation={foundation}
                  id={foundation.id}
                />
              );
            }
            return false;
          })}
        </div>
      )}
    </section>
  );
};

export default MakeupCards;
