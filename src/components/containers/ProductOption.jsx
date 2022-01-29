import { SettingFrame } from 'components/atoms';
import OptSet from 'components/molecules/OptSet';
import React from 'react';
import useProductState from 'utils/hooks/productState';

function ProductOption() {
  const { optSets, Clickhandler, handleChange } = useProductState();

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

export default ProductOption;
