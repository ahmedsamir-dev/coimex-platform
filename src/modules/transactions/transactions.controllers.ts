import { Router, Request, Response, NextFunction } from 'express'
import IController from '@/shared/interfaces/controller.interface'
import HttpException from '@/shared/errors/errors.httpException'
import { ITransactionsService } from '@/modules/transactions/transactions.interfaces'

class TransactionsController implements IController {
  public readonly path = '/transactions'
  public readonly router = Router()

  private transactionsService: ITransactionsService
  constructor(transactionsService: ITransactionsService) {
    this.transactionsService = transactionsService
    this.intializeRoutes()
  }

  private intializeRoutes(): void {
    this.router.get(`${this.path}/symbol-statistics`, this.getAllSymbolsStatistics)
    this.router.get(`${this.path}/symbol-statistics/:symbol`, this.getSymbolStatistics)
  }

  private getAllSymbolsStatistics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const statistics = await this.transactionsService.getAllSymbolsStatistics()
  
      res.status(200).json({
        statistics
      })

    } catch(error) {
      next(new HttpException("Internal Server Error", 500))
    }
  }

  private getSymbolStatistics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   try {
    const statistics = await this.transactionsService.getSymbolStatistics({ symbol: req.params.symbol })

    res.status(200).json({
      statistics
    })

   } catch (error) {
     next(new HttpException("Internal Server Error", 500))
   }
  }

}

export default TransactionsController
