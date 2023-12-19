import 'dotenv/config'
import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import minimist from 'minimist'; 

import { Transaction } from './src/modules/transactions/transactions.model';

mongoose.connect(String(process.env.MONGODB_URI), {});

// Function to generate a random transaction document
const generateRandomTransaction = () => {
  return {
    timestamp: faker.date.past(),
    symbol: faker.finance.currencyCode(),
    price: parseFloat(faker.finance.amount()),
    quantity: faker.number.int({ min: 1, max: 1000 }),
  };
};

// Function to populate the transactions collection
const populateTransactions = async (numberOfDocuments: number): Promise<void> => {
  const transactions = Array.from({ length: numberOfDocuments }, generateRandomTransaction);
  await Transaction.insertMany(transactions);
};

// Parse command-line arguments using minimist
const args = minimist(process.argv.slice(2));

// Specify the number of documents to generate (default to 1000 if not provided)
const numberOfDocumentsToGenerate = args._[0] || 1000;

populateTransactions(numberOfDocumentsToGenerate as number)
  .then(() => {
    console.log(`Successfully generated and inserted ${numberOfDocumentsToGenerate} documents.`);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    mongoose.disconnect();
  });
