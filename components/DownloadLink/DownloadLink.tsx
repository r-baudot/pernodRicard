interface DownloadLinkProps {
  text: string;
  file: string;
  className?: string;
}

export function DownloadLink({
  text,
  file,
  className = "",
}: DownloadLinkProps) {
  return (
    <a
      href={file}
      download
      className={`inline-flex items-center gap-2 font-medium transition-opacity hover:opacity-80 ${className}`}
      style={{ color: "#2D8EFB" }}
    >
      <span>{text}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M8 3V11M8 11L5 8M8 11L11 8M8 13V13.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
