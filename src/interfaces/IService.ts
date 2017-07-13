export interface IService<T> {
  find(): Promise<T[]>
  findOne(): Promise<T>
  create(): Promise<T>
  destroy(): Promise<T>
}