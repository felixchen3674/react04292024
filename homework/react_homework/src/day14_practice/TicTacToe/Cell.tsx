interface CellType {
  index: number;
  onClick: () => void;
  children: React.ReactNode;
}

export default function Cell(props: CellType) {
  const { index, onClick, children } = props;
  return (
    <div id={`${index}`} onClick={onClick}>
      {children}
    </div>
  );
}
