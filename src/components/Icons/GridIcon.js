const GridIcon = () => {
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
    >
      <rect x="2" y="2" width="10" height="10" />
      <rect x="2" y="14" width="10" height="10" />
      <rect x="14" y="14" width="10" height="10" />
      <rect x="14" y="2" width="10" height="10" />
    </svg>
  );
};

export default GridIcon;
