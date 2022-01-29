/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { SettingFrame } from 'components/atoms';
import OptSet from 'components/molecules/OptSet';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

function ProductOption() {
  const [optSets, setOptSets] = useState([]);

  const handleAdd = (e) => {
    const { name: elName, tagName } = e.target;

    if (tagName !== 'button' && tagName !== 'BUTTON') return;

    const [name, id] = elName.split('_');

    if (name === 'optSetAddBtn') {
      const newOptSet = {
        id: Date.now() - 1,
        image: '',
        options: [{
          id: Date.now(),
          optName: '',
          productPrice: 0,
          productSale: 0,
          productStock: 0,
          isTax: false,
          optAdditions: [],
        }],
      };

      setOptSets([...optSets, newOptSet]);
    } else if (name === 'optAddBtn') {
      const newOption = {
        id: Date.now(),
        optName: '',
        productPrice: 0,
        productSale: 0,
        productStock: 0,
        isTax: false,
        optAdditions: [],
      };

      const nextState = optSets.map((optSet) => {
        if (optSet.id === Number(id)) {
          optSet.options = [...optSet.options, newOption];
        }
        return optSet;
      });

      setOptSets(nextState);
    } else if (name === 'additionOptAddBtn') {
      const newOptAddition = {
        id: Date.now(),
        additionOptName: '',
        additionOptPrice: '',
      };

      const nextState = optSets.map((optSet) => {
        optSet.options = optSet.options.map((option) => {
          if (option.id === Number(id)) {
            option.optAdditions = [...option.optAdditions, newOptAddition];
          }
          return option;
        });

        return optSet;
      });

      setOptSets(nextState);
    }
  };

  const handleDelete = (e) => {
    const { name: elName, tagName } = e.target;

    if (tagName !== 'button' && tagName !== 'BUTTON') return;

    const [name, id] = elName.split('_');

    if (name === 'optSetDelBtn') {
      const nextState = optSets.filter((optSet) => optSet.id !== Number(id));

      setOptSets(nextState);
    } else if (name === 'optDelBtn') {
      const nextState = optSets.map((optSet) => {
        const { options } = optSet;
        optSet.options = options.filter((option) => option.id !== Number(id));

        return optSet;
      });

      setOptSets(nextState);
    } else if (name === 'additionOptDelBtn') {
      const nextState = optSets.map((optSet) => {
        const { options } = optSet;
        optSet.options = options.map(
          (option) => {
            const { optAdditions } = option;
            option.optAdditions = optAdditions.filter(
              (optAddition) => optAddition.id !== Number(id),
            );

            return option;
          },
        );

        return optSet;
      });

      setOptSets(nextState);
    }
  };

  const handleChange = (e) => {
    const { name: inputName, value } = e.target;
    const [name, strId] = inputName.split('_');
    const id = Number(strId);

    const nextState = optSets.map((optSet) => {
      const { options } = optSet;
      optSet.options = options.map(
        (option) => {
          const { optAdditions } = option;

          if (option.id === id) {
            option[name] = value;

            return option;
          }

          option.optAdditions = optAdditions.map((optAddition) => {
            if (optAddition.id === id) {
              optAddition[name] = value;
            }
            return optAddition;
          });

          return option;
        },
      );

      return optSet;
    });

    setOptSets(nextState);
  };

  const Clickhandler = (e) => {
    handleAdd(e);
    handleDelete(e);
  };

  if (optSets.length === 0) {
    return (
      <SettingFrame
        title="상품옵션"
        isBackground
        isButton
        onClick={Clickhandler}
        onChange={handleChange}
      >
        <div>옵션세트를 추가하여 구성해주세요.</div>

      </SettingFrame>
    );
  }

  return (
    <SettingFrame
      title="상품옵션"
      isBackground
      isButton
      onClick={Clickhandler}
      onChange={handleChange}
    >
      {optSets.map((optSet) => <OptSet key={optSet.id} optSet={optSet} />)}
    </SettingFrame>
  );
}

// ProductOption.propTypes = {};

export default ProductOption;
