import {useEffect, useState} from "react";
import {FVideo} from "../types/video";
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../config/firebase";

export const useCollection = (collectionName: string) => {
    const [documents, setDocuments] = useState<FVideo[]>([]);

    useEffect(() => {
        const ref = collection(db, collectionName)

        const unSubscribe = onSnapshot(ref, snapshot => {
            let result: FVideo[] = []
            snapshot.docs.forEach(doc => {
                result.push({id: doc.id, ...doc.data()} as FVideo)
            })

            setDocuments(result)
        })

        return () => unSubscribe()
    }, []);

    return  {documents}
}
