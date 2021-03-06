import {createContext, Dispatch, FC, ReactNode, SetStateAction} from "react";
import {useAuth} from "../hooks/useAuth";
import {User} from "firebase/auth";

interface AuthType {
    user: User | null;
    error: Error | null;
    setError: Dispatch<SetStateAction<Error | null>>;
    loading: boolean;
    signUpOrSignInWithEmail: (email: string, password: string) => void;
    signUserOut: () => void
}


export const AuthContext = createContext<AuthType>({
    user: null,
    error: null,
    setError: () => {},
    loading: false,
    signUpOrSignInWithEmail: () => {},
    signUserOut: () => {}
})

type Props = {
    children?: ReactNode
};

const AuthContextProvider: FC<Props> = ({children}) => {
    const {user, error, setError, loading, signUpOrSignInWithEmail, signUserOut} = useAuth();

    return <AuthContext.Provider value={{
        user, error, setError, loading, signUpOrSignInWithEmail, signUserOut
    }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider