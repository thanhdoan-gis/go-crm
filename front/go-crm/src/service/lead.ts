import leadsPromise from '@/service/mock-data/lead'
import { IRequestFilter, IResponse } from './model'
import { Lead } from '@/model/lead'
import { User } from '@/model'
export async function getLeads(agentId:string, filter?: IRequestFilter) {
  const leads = await leadsPromise
  return leads.filter(l => l.agentId === agentId)
}
export async function getLead(id: string) {
  const leads = await leadsPromise
  return leads.find(l => l.id === id)
}

