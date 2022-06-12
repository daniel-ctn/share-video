import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    User,
    signOut,
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail
} from "firebase/auth";
import {useEffect, useState} from "react";
import {auth} from "../config/firebase";

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const signUpOrSignInWithEmail = (email: string, password: string) => {
        setError(null)
        setLoading(true)

        // check if user is existed
        fetchSignInMethodsForEmail(auth, email).then(res => {
            if (res.length === 0) {
                return createUserWithEmailAndPassword(auth, email, password).then(res => {
                    setLoading(false)
                }).catch(err => {
                    setError(err)
                    setLoading(false)
                })
            }
            if (res.length > 0) {
                return signInWithEmailAndPassword(auth, email, password).then(res => {
                    setLoading(false)
                }).catch(err => {
                    setError(err)
                    setLoading(false)
                })
            }
        })
    }

    const signUserOut = () => {
        setError(null)
        setLoading(true)

        signOut(auth).then(res => {
            setLoading(false)
        }).catch(err => {
            setError(err)
            setLoading(false)
        })
    }

    useEffect(() => {
        const listener = onAuthStateChanged(
            auth, async (user) => {
                setUser(user)
            },
            (error) => setError(error)
        );

        return () => listener(); // unsubscribe listener

    }, [auth]);

    return {user, error, setError, loading, signUpOrSignInWithEmail, signUserOut}
}