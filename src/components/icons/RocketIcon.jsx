export default function RocketIcon({ className = 'h-8 w-8' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 3c2.5 2.8 4 6.2 4 10.2 0 1.2-.2 2.4-.6 3.5L12 22l-3.4-5.3A10.8 10.8 0 018 13.2C8 9.2 9.5 5.8 12 3z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M9.5 17.5L7 20M14.5 17.5L17 20"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M6 14l-2 1.5M18 14l2 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
