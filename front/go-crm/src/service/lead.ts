import leads from '@/service/mock-data/lead'
import { IRequestFilter, IResponse } from './model'
import { Lead } from '@/model/lead'
import { User } from '@/model'

export function getLeads(agentId:string, filter?: IRequestFilter) {
  return leads.filter(l => l.agentId === agentId)
}
export function getLead(id: string) {
  return leads.find(l => l.id === id)
}

