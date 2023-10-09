/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import Link from 'next/link';
import { AppMenuItem } from '../types/types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { agentsState, currentUserState, isAdminState, selectedAgentState } from '@/store/global'
import { Dropdown } from 'primereact/dropdown';
import { getAgents } from '@/service/admin';
const AppMenu = () => {
  const { layoutConfig } = useContext(LayoutContext);
  const userContext = useRecoilValue(currentUserState)
  const [selectedAgent, setSelectedAgent] = useRecoilState(selectedAgentState)
  const agents = useRecoilValue(agentsState)
  const isAdmin = useRecoilValue(isAdminState)
  const model: AppMenuItem[] = [
    {
      label: 'Home',
      items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
    },
    {
      label: 'Management',
      items: [
        { label: 'Leads', icon: 'pi pi-fw pi-id-card', to: '/lead' },
        { label: 'Admin', icon: 'pi pi-fw pi-check-square', to: '/admin', visible: isAdmin },
      ]
    },
  ];

  return (
    <MenuProvider>
      {isAdmin ?
        <Dropdown value={selectedAgent}
          options={agents}
          optionLabel="name"
          placeholder="Select an Agent"
          className="w-full md:w-14rem"
          onChange={(e) => {
            debugger
            setSelectedAgent(e.value)
          }} /> : ''}
      <ul className="layout-menu">
        {model.map((item, i) => {
          return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> : <li className="menu-separator"></li>;
        })}
      </ul>
    </MenuProvider>
  );
};

export default AppMenu;
