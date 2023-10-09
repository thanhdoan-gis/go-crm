import agents from '@/service/mock-data/agent'
import { IRequestFilter, IResponse } from './model'
export function getAgents(filter?: IRequestFilter) {
  return agents
}
export function getLead(id: string) {
  return agents.find(a => a.id === id)
}

