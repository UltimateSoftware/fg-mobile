import {AsyncStorage} from "react-native";

/*
    Use this DataManager to persist non-encrypted data between application
    launches. Use for non-sensitive information.
 */

// Storage Keys
export const CHAPTER = "chapter"
export const CHAPTER_PENDING_APPROVAL = "chapter-pending-approval"

export const SIGNED_IN_MEMBER = "signed-in-member";
export const SIGNED_IN_MEMBER_ID = "signed-in-member-id";
export const MEMBER_PENDING_APPROVAL = "member-pending-approval"

export class DataManager {

    static async setItemForKey(key, item) {
        try {
            return await AsyncStorage.setItem(key, JSON.stringify(item));
        } catch (error) {
            console.log("[ERROR - DataManager]: ", error.message);
        }
    }

    static async getItemWithKey(key) {
        try {
            const retrievedItem =  await AsyncStorage.getItem(key, null);
            return JSON.parse(retrievedItem);
        } catch (error) {
            console.log("[ERROR - DataManager]: ", error.message);
        }
    }

    static async removeItemWithKey(key) {
        try {
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log("[ERROR - DataManager]: ", error.message);
        }
    }


}
