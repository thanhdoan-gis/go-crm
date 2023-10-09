export interface IRequestFilter {
  searchText: string
  sort: SORT_DIRECTION
  page: number
  itemPerPage: number
}
type SORT_DIRECTION = 'asc' | 'desc'
export class RequestFilter implements IRequestFilter {
  searchText = ''
  sort: SORT_DIRECTION = 'asc'
  page = 1
  itemPerPage = 20
}
export interface IResponse {
  items: any[]
  page: number
  itemPerPage: number
  totalItem: number
  totalPage: number
}