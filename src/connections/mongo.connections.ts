import mongoose from 'mongoose'

export default class MongoConnection {
  public static async connect() {
    try {
      await mongoose.connect(String(process.env.MONGODB_URI))
      console.log('MongoDB connected')
    } catch (error) {
      console.log(error)
    }
  }
}
