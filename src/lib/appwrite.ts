import { Client, Account, ID } from 'node-appwrite';
import { getClient } from './appwrite-client';

export function appWriteSignUp(name: string, email: string, password: string) {
  const client = getClient();
  const account = new Account(client);
}

export async function appWriteSignIn(email: string, password: string) {
  const client : Client = getClient();
  const account = new Account(client);

  const promise = account.createEmailPasswordSession(
    'cjoak@foxmail.com',
    '12345678',
  );

  let data = null;
  let success = null;

  promise.then(
    function (response) {
      success = true;
      data = response;
      console.log('success:'); // Success
    },
    function (error) {
      success = false;
      data = error;
      console.log('failed:'); // Failure
    },
  );

  return { success, data };
}
