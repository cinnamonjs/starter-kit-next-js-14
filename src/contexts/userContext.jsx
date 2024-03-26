const { useContext, createContext } = require("react");

// create context for store global variables can't be lost when re-rendering
const User = createContext({});

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("");

  return (
    <User.Provider value={{ username, setUsername }}>{children}</User.Provider>
  );
};

export const useUserContext = useContext(User);
