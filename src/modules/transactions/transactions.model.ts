import mongoose, { Document, Schema } from 'mongoose';

interface ITransaction extends Document {
  timestamp: Date;
  symbol: string;
  price: number;
  quantity: number;
}

const transactionSchema = new Schema<ITransaction>(
  {
    timestamp: { type: Date, required: true },
    symbol: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { collection: 'transactions' }
);

const Transaction = mongoose.model<ITransaction>('transactions', transactionSchema);

export { Transaction, ITransaction };
