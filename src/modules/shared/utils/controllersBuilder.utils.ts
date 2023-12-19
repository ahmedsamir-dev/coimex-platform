import IController from '@/shared/interfaces/controller.interface'
import TransactionsController from '@/modules/transactions/transactions.controllers'
import TransactionsService from '@/modules/transactions/transactions.services'


export const controllers: IController[] = [
  new TransactionsController(new TransactionsService()),
]
