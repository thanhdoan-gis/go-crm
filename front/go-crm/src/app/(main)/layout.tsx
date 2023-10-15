'use client'
import { Metadata } from 'next';
import Layout from '@/layout/layout';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { agentsState, currentUserState, selectedAgentState } from '@/store/global';
import { getAgents } from '@/service/admin';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  // init appp
  const currentUser = useRecoilValue(currentUserState)
  const setAgents = useSetRecoilState(agentsState)
  const setSelectedAgent = useSetRecoilState(selectedAgentState)
  const router = useRouter()

  useEffect(() => {
    const init = async () => {
      if (!currentUser) return
      const agents = await getAgents()
      setAgents(agents)
      const curUserAgent = agents.find(a => a.id === currentUser.agentId)
      if (curUserAgent) {
        setSelectedAgent(curUserAgent)
      }
    }

    init()
  }, [currentUser, setAgents, setSelectedAgent])

  return <Layout>{children}</Layout>;
}