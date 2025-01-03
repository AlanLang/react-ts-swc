import { observer } from 'mobx-react';
import { ScoreItem } from './type';

export const ScoreItemView = ({ value }: { value: ScoreItem }) => {
  return (
    <div>
      <span style={{ marginRight: 12 }}>姓名：{value.name}</span>
      <span style={{ marginRight: 12 }}>等分：{value.score}</span>
    </div>
  );
};

export const ScoreItemViewWithObserver = observer(ScoreItemView)