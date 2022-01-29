/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { useState } from 'react';

const OPT_SET_ADD_BTN = 'optSetAddBtn';
const OPT_ADD_BTN = 'optAddBtn';
const ADDITION_OPT_ADD_BTN = 'additionOptAddBtn';
const OPT_SET_DEL_BTN = 'optSetDelBtn';
const OPT_DEL_BTN = 'optDelBtn';
const ADDITION_OPT_DEL_BTN = 'additionOptDelBtn';
const newOptSet = () => ({
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
});
const newOption = () => ({
  id: Date.now(),
  optName: '',
  productPrice: 0,
  productSale: 0,
  productStock: 0,
  isTax: false,
  optAdditions: [],
});
const newOptAddition = () => ({
  id: Date.now(),
  additionOptName: '',
  additionOptPrice: '',
});

const useProductState = () => {
  const [optSets, setOptSets] = useState([]);

  const handleAdd = ({ name, id }) => {
    switch (name) {
      case OPT_SET_ADD_BTN: {
        const nextState = [...optSets, newOptSet()];
        setOptSets(nextState);
        break;
      }
      case OPT_ADD_BTN: {
        const nextState = optSets.map((optSet) => {
          if (optSet.id === id) {
            optSet.options = [...optSet.options, newOption()];
          }
          return optSet;
        });

        setOptSets(nextState);
        break;
      }
      case ADDITION_OPT_ADD_BTN: {
        const nextState = optSets.map((optSet) => {
          optSet.options = optSet.options.map((option) => {
            if (option.id === id) {
              option.optAdditions = [...option.optAdditions, newOptAddition()];
            }
            return option;
          });

          return optSet;
        });

        setOptSets(nextState);
        break;
      }
      default:
    }
  };

  const handleDelete = ({ name, id }) => {
    switch (name) {
      case OPT_SET_DEL_BTN: {
        const nextState = optSets.filter((optSet) => optSet.id !== id);

        setOptSets(nextState);
        break;
      }
      case OPT_DEL_BTN: {
        const nextState = optSets.map((optSet) => {
          const { options } = optSet;
          optSet.options = options.filter((option) => option.id !== id);

          return optSet;
        });

        setOptSets(nextState);
        break;
      }
      case ADDITION_OPT_DEL_BTN: {
        const nextState = optSets.map((optSet) => {
          const { options } = optSet;
          optSet.options = options.map(
            (option) => {
              const { optAdditions } = option;
              option.optAdditions = optAdditions.filter(
                (optAddition) => optAddition.id !== id,
              );

              return option;
            },
          );

          return optSet;
        });

        setOptSets(nextState);
        break;
      }
      default:
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
    const { name: elName, tagName } = e.target;

    if (tagName !== 'button' && tagName !== 'BUTTON') return;

    const [name, strId] = elName.split('_');
    const id = Number(strId);

    handleAdd({ name, id });
    handleDelete({ name, id });
  };

  return { optSets, Clickhandler, handleChange };
};

export default useProductState;
