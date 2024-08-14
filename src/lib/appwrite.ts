import { ID } from 'node-appwrite';
import { getAdminAccount } from './appwrite-client';


export interface AuthResponse {
  success: boolean;
  data: {};
}

export async function appWriteSignUp(
  name: string,
  email: string,
  password: string,
) {
  const account = getAdminAccount();

  try {
    const newUserAccount = await account.create(ID.unique(), email, password, name);
    return { success: true, data: newUserAccount }; // Adjust based on the response structure
  } catch (error) {
    console.error('Sign up failed', error);
    return { success: false, data: error.message }; // Extract and return the error message
  }
}

export async function appWriteSignIn(email: string, password: string) {
  const account = getAdminAccount();

  try {
    const response = await account.createEmailPasswordSession(email, password);
    return { success: true, data: response };
  } catch (error) {
    console.error('Sign in failed', error);
    return { success: false, data: error.message };
  }
}
