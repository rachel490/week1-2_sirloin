import { SettingFrame, SettingFrameItem } from 'components/atoms';
import ToggleBtn from 'components/atoms/ToggleBtn';
import React, { useState } from 'react';

function OtherOptions() {
  const [optionsStatus, setOptionsStatus] = useState({ thanksCard: false });

  function onCheckedChange() {
    setOptionsStatus({ thanksCard: !optionsStatus.thanksCard });
  }

  return (
    <SettingFrame title="상품 혜택 허용 설정">
      <SettingFrameItem title="마일리지 적립">
        <ToggleBtn
          checked={optionsStatus.thanksCard}
          onChange={() => onCheckedChange()}
        />
      </SettingFrameItem>
    </SettingFrame>
  );
}

export default OtherOptions;
