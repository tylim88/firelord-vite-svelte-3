import type { PageServerLoad } from "./$types";
import { getFirelord, getFirestore, type MetaTypeCreator } from "firelordjs";
import * as firebase from "firebase/app";

type OutputType = {};

const app = firebase.getApp('app')
const firestore = getFirestore(app)

export type Users = MetaTypeCreator<{
    name: string;
},
    'users'
>

const users = getFirelord<Users>(firestore, 'users')

// @ts-ignore
export const load: PageServerLoad<OutputType> = async (event) => {
    const user = users.doc('foobar');
    return {};
}