import { Client, Account, ID } from 'node-appwrite';
import { getClient } from './appwrite-client';

export function appWriteSignUp(name: string, email: string, password: string) {
  const client = getClient();
  const account = new Account(client);
}

export async function appWriteSignIn(email: string, password: string) {
  // const client : Client = getClient();
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66b6e878001cc22c0638')
    .setKey(
      '0f6f8ecf3980cb733c4266b42db60bf07f0f1ceac55279e691079c5b11e3bcc162ddf1d4e248e50f4a912fe39878b039048ce490ea0bc5a59840eb1b41c347fe33f8a1e38ebd003b55f3bb634329e77a273b51a2140b2597acc55a3729e509fdd9165d0d561eb29a9b8663e2109aec071b59730d0e336c549c6871f85a57f8fb',
    );
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
