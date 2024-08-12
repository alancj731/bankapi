import { Client, Account, ID } from 'node-appwrite';
import { getAccount } from './appwrite-client';

export interface AuthResponse {
  success: boolean;
  data: {};
}

export async function appWriteSignUp(
  name: string,
  email: string,
  password: string,
) {
  // const client = getClient();
  // const account = new Account(client);
  const account = getAccount();

  try {
    const response = await account.create(ID.unique(), email, password, name);
    console.log('Sign up succeeded', response);
    return { success: true, data: response.targets[0].userId }; // Adjust based on the response structure
  } catch (error) {
    console.error('Sign up failed', error);
    return { success: false, data: error.message }; // Extract and return the error message
  }
}

export async function appWriteSignIn(email: string, password: string) {
  // const client: Client = getClient();
  // const account = new Account(client);
  const account = getAccount();

  try {
    const response = await account.createEmailPasswordSession(email, password);
    console.log('Sign in succeeded', response);
    return { success: true, data: response.secret };
  } catch (error) {
    console.error('Sign in failed', error);
    return { success: false, data: error.message }; // Extract and return the error message
  }
}
