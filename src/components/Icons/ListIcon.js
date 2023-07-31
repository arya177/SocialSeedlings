const ListIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="40"  // Adjust the width to make the icon smaller
      height="40" // Adjust the height to make the icon smaller
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ transform: "translateY(-6px)" }}
    >
      <line x1="6" y1="12" x2="26" y2="12" />
      <line x1="6" y1="16" x2="26" y2="16" />
      <line x1="6" y1="20" x2="26" y2="20" />
      <line x1="6" y1="24" x2="26" y2="24" />
    </svg>
  );
};

export default ListIcon;
