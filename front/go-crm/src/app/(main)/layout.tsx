'use client'
import { Metadata } from 'next';
import Layout from '@/layout/layout';
import { useRecoilState, useRecoilValue } from 'recoil';
import { agentsState, currentUserState, selectedAgentState } from '@/store/global';
import { getAgents } from '@/service/admin';
import { useRouter } from 'next/navigation';

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    //init appp
    const [agents, setAgents] = useRecoilState(agentsState)
    const currentUser = useRecoilValue(currentUserState)
    const router = useRouter()
    const [selectedAgent, setSelectedAgentState] = useRecoilState(selectedAgentState)
    if (!currentUser) {
        router.push('/auth/login')
        return
    }
    setAgents(getAgents())
    const curUserAgent = agents.find(a => a.id === currentUser.agentId)
    if (curUserAgent) setSelectedAgentState(curUserAgent)

    return <Layout>{children}</Layout>;
}