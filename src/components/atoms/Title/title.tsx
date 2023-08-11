import type { TitleProps } from './types';

import './index.css';

const Title = (props: TitleProps) => {
  const { text } = props;

  return (
    <h1 className="c__title">{text}</h1>
  );
}

export default Title;
