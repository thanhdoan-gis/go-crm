import agentsPromise from '@/service/mock-data/agent'
import { IRequestFilter, IResponse } from './model'
export async function getAgents(filter?: IRequestFilter) {
  return await agentsPromise
}
export async function getLead(id: string) {
  const agents = await agentsPromise
  return agents.find(a => a.id === id)
}

