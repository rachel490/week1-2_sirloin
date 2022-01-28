import { SettingFrame, SettingFrameItem } from 'components/atoms';
import ToggleBtn from 'components/atoms/ToggleBtn';
import React, { useState } from 'react';

function MileageStatus() {
  const [mileageStatus, setMileageStatus] = useState({ mileageStatus: true });

  function onCheckedChange() {
    setMileageStatus({ mileageStatus: !mileageStatus.mileageStatus });
  }

  return (
    <SettingFrame title="상품 혜택 허용 설정">
      <SettingFrameItem title="마일리지 적립">
        <ToggleBtn
          checked={mileageStatus.mileageStatus}
          onChange={() => onCheckedChange()}
        />
      </SettingFrameItem>
    </SettingFrame>
  );
}

export default MileageStatus;
