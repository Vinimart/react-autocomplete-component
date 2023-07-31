import { highlightSubstring } from '../../../utils';
import style from './highlight.module.css';

export interface HighlighProps {
  inputValue: string;
  text: string;
}

export default function Highligh({ inputValue, text }: HighlighProps) {
  const highlightedText = highlightSubstring(
    text,
    inputValue,
    style["highlight"]
  );
  return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
}
