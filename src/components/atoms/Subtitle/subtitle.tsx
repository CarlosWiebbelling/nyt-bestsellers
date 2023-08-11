import type { SubtitleProps } from './types';

import './index.css';

const Title = (props: SubtitleProps) => {
  const { text } = props;

  return (
    <h3 className="c__subtitle">{text}</h3>
  );
}

export default Title;
