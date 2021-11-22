export interface HogeDomProps {
  title: string;
  text: string;
}

export interface HogeProps {
  title: string;
  text?: string;
}

export const HogeDom = ({ title, text }: HogeDomProps) => (
  <>
    <p>Hoge Component</p>
    <p>{title}</p>
    <p>{text}</p>
  </>
);

export const Hoge = ({ title, text = '' }: HogeProps) => (
  <>
    <HogeDom title={title} text={text} />
  </>
);
