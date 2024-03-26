// re-use component with parameter input
// children is inside component
// ex. <Button> <p>abcd</p> <Button>; <p>abcd</p> is children of <Button>

export const Button = ({ onClick, type, disabled, children }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="px-2 py-1 capitalize transition duration-150 border border-white rounded-lg hover:bg-white/15 active:scale-95"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
