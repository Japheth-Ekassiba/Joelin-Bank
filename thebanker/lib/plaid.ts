 
import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
      'PLAID_CLIENT_NAME': process.env.PLAID_CLIENT_NAME,

    }
  }
})

export const plaidClient = new PlaidApi(configuration);
