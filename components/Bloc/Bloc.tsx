interface BlocProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  maxWidth?: string;
  classNameTxt?: string;
}

export function Bloc({
  text,
  backgroundColor = "#f5f5f5",
  textColor = "#000000",
  maxWidth,
  classNameTxt = "",
}: BlocProps) {
  return (
    <div
      className="p-6"
      style={{
        backgroundColor,
      }}
    >
      <div
        className="mx-auto"
        style={{
          maxWidth: maxWidth,
          color: textColor,
        }}
      >
        <p className={`text-base leading-relaxed ${classNameTxt}`}>{text}</p>
      </div>
    </div>
  );
}
