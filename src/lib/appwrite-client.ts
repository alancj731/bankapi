import { Client, Account } from 'node-appwrite';
let adminClient: Client | null = null;
let adminAccount: Account | null = null;
let sessionClient: Client | null = null;

export function getSessionAccount(token: string) {
  if (!sessionClient) {
    sessionClient = createClient(false, token);
  } else {
    sessionClient.setSession(token);
  }

  return new Account(sessionClient);
}

export function getSessionClient(token: string) {
  if (!sessionClient) {
    sessionClient = createClient(false, token);
  }
  else sessionClient.setSession(token);

  return sessionClient;
}

export function getAdminAccount() {
  if (!adminAccount) {
    if (!adminClient) {
      adminClient = createClient();
    }
    adminAccount = new Account(adminClient);
  }
  return adminAccount;
}

export function getAdminClient() {
  if (!adminClient) {
    adminClient = createClient();
  }
  return adminClient;
}

// to do, use .env file
function createClient(
  admin: boolean = true,
  session: string = '',
) {
  if (admin) {
    return new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('66b6e878001cc22c0638')
      .setKey('0f6f8ecf3980cb733c4266b42db60bf07f0f1ceac55279e691079c5b11e3bcc162ddf1d4e248e50f4a912fe39878b039048ce490ea0bc5a59840eb1b41c347fe33f8a1e38ebd003b55f3bb634329e77a273b51a2140b2597acc55a3729e509fdd9165d0d561eb29a9b8663e2109aec071b59730d0e336c549c6871f85a57f8fb');
  }
  else {
    return new Client()
      .setEndpoint('https://cloud.appwrite.io/v1')
      .setProject('66b6e878001cc22c0638')
      .setSession(session);
  }
}
