export interface ITodoItem {
  id: number,
  userId: number | null,
  title: string,
  completed: boolean,
  imageUrl?: string,
}
