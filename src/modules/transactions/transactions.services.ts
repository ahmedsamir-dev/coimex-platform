import { SymbolStatisticsDTO } from '@/modules/transactions/transactions.dtos'
import { Transaction } from '@/modules/transactions/transactions.model'

export default class TransactionsService {

  getSymbolStatistics = async (dto: SymbolStatisticsDTO) => {
    const statistics = await Transaction.aggregate([
      { "$match": { "symbol": dto.symbol } },
      {
        "$group": {
          "_id" : "$symbol",
          "totalTransactions": { "$sum": 1 },
          "totalTransactionVolume": { "$sum": { "$multiply": ['$price', '$quantity'] } },
          "averageTransactionPrice": { "$avg": "$price" }
        },
      },
      {
        "$project": {
          "_id": 0,
          "symbol": '$_id',
          "totalTransactions": 1,
          "totalTransactionVolume": { "$round": ['$totalTransactionVolume', 2] },
          "averageTransactionPrice": { "$round": ['$averageTransactionPrice', 2] },
        },
      },
    ])

    if (statistics.length === 0) {
      return [{
        symbol: dto.symbol,
        totalTransactions: 0,
        totalTransactionVolume: 0,
        averageTransactionPrice: 0,
      }];
    }


    return statistics 
  }

  getAllSymbolsStatistics = async () => {
    const statistics = await Transaction.aggregate([
      {
        "$group": {
          "_id" : "$symbol",
          "totalTransactions": { "$sum": 1 },
          "totalTransactionVolume": { "$sum": { "$multiply": ['$price', '$quantity'] } },
          "averageTransactionPrice": { "$avg": "$price" }
        },
      },
      {
        "$project": {
          "_id": 0,
          "symbol": '$_id',
          "totalTransactions": 1,
          "totalTransactionVolume": { "$round": ['$totalTransactionVolume', 2] },
          "averageTransactionPrice": { "$round": ['$averageTransactionPrice', 2] },
        },
      },
    ])

    return statistics
  }
}
