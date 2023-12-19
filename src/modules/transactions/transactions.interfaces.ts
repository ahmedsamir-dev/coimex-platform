import { SymbolStatisticsDTO } from '@/modules/transactions/transactions.dtos'

export interface ITransactionsService {
  getSymbolStatistics(dto: SymbolStatisticsDTO): Promise<any>
  getAllSymbolsStatistics(): Promise<any>
}
