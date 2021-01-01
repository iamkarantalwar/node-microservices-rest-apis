export interface ICrudRepositoy<T> {

    store(data: T) : Promise<T>,

}