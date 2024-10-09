import {
    setDoc,
    doc,
    where,
    collection,
    query,
    getDocs,
    limit,
    orderBy,
} from "firebase/firestore";

import { map } from "lodash";
import { db } from "../helpers/firebase";


export class Firebase {

    async getNovedades() {
        const q = query(
            collection(db, "novedades"),
            orderBy("fecha", "desc"),
            limit(15)
        );

        const querySnapshot = await getDocs(q);
        return map(querySnapshot.docs, (doc) => doc.data());
    }

}