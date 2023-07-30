import { memo } from 'react';

import { Input } from '../../molecules';
import style from './autocomplete.module.css';

function Autocomplete() {
  return (
    <div className={style["autocomplete"]}>
      <Input />
    </div>
  );
}

export default memo(Autocomplete);
