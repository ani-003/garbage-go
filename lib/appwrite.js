import { Platform } from "react-native";
import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const Config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.swachh.gargo',
    projectId: '6762ce6e000b983f8e16',
    databaseId: '6762d0df003604dc2ae5',
    userCollectionId: '6762d119002617093aef',
    imageCollectionId: '6762d15c000f08af1406',
    storageId: '67644f87003a58587f4c',

}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(Config.endpoint)
    .setProject(Config.projectId)
    .setPlatform(Config.platform)



const account = new Account(client);
const avatars = new Avatars(client);

const databases = new Databases(client);

export const createUser = async (email, password, username) => {

    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username,

        )

        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        await signIn(email, password);

        const newUser = await databases.createDocument(
            Config.databaseId,
            Config.userCollectionId,
            ID.unique(),{
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }

        )

        return newUser;

    } catch (error) {
        console.log(error)
        throw new Error(error)

    }
}


export async function signIn(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        console.log(session)
        return session;
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}




