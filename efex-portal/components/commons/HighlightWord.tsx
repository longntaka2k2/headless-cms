import { Fragment, ReactNode } from "react";

type Range = {
  start: number;
  end: number;
};
type Props = {
  text: string;
  wIndex: number | Range[];
  className?: string;
};

const Highlight = ({
  word,
  className,
}: {
  word: string;
  className?: string;
}) => <span className={className}>{word}</span>;

export default function HighlightWord({ text, wIndex, className }: Props) {
  const result: ReactNode[] = [];
  if (text) {
    const words = text.split(/\s/);
    if (typeof wIndex == "number") {
      words.forEach((x, idx) => {
        result.push(
          idx == wIndex ? (
            <Highlight word={x} key={idx} className={className} />
          ) : (
            <Fragment key={idx}>{x}</Fragment>
          )
        );
        if (idx + 1 !== words.length)
          result.push(<Fragment key={idx}> </Fragment>);
      });
    } else {
      words.forEach((x, idx) => {
        wIndex.forEach((wx) => {
          if (wx.start <= idx && idx <= wx.end) {
            result.push(<Highlight word={x} key={idx} className={className} />);
          }
        });
        if (idx + 1 !== words.length)
          result.push(<Fragment key={idx}> </Fragment>);
      });
    }
  }
  return result;
}
