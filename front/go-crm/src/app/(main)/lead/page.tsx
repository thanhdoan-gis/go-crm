'use client'
import { getLeads } from "@/service/lead";
import { Lead } from "@/model/lead";
import { DataTable, DataTableSelectionSingleChangeEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useRouter } from 'next/navigation'
import { currentUserState, isAdminState, selectedAgentState } from '@/store/global'
import { useRecoilValue } from "recoil";

function LeadPage() {
  const selectedAgent = useRecoilValue(selectedAgentState)
  const currentUser = useRecoilValue(currentUserState)
  const router = useRouter()
  if (!currentUser || !selectedAgent) return
  const leads: Lead[] = getLeads(selectedAgent.id)
  const listItems = leads
  function onSelectionChanged(event: DataTableSelectionSingleChangeEvent<Lead[]>) {
    router.push(`/lead/${event.value.id}`)
  }
  return (
    <>
      <DataTable
        value={listItems}
        stripedRows
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: '50rem' }}
        selectionMode='single'
        onSelectionChange={(e) => onSelectionChanged(e)}
      >
        <Column field="name" sortable filter filterPlaceholder="Search" header="Name"></Column>
        <Column field="phone" sortable filter filterPlaceholder="Search" header="Phone"></Column>
        <Column field="email" sortable filter filterPlaceholder="Search" header="Email"></Column>
        <Column field="agentId" header="Agent"></Column>
      </DataTable>
    </>

  );
}

export default LeadPage;