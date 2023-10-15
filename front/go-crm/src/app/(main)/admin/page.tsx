'use client'
import { getAgents } from "@/service/admin";
import { Agent } from "@/model/agent";
import { DataTable, DataTableSelectionSingleChangeEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";

function AdminPage
  () {
  const [listItems, setListItems] = useState<Agent[]>([])
  const router = useRouter()

  function onSelectionChanged(event: DataTableSelectionSingleChangeEvent<Agent[]>) {
    router.push(`/agent/${event.value.id}`)
  }
  const getAgentsOnView = async () => {
    const agents: Agent[] = await getAgents()
    setListItems(agents)
  }
  useEffect(() => {
    getAgentsOnView();
  }, []);
  
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
        <Column field="name" sortable header="Name"></Column>
        <Column field="phone" header="Phone"></Column>
        <Column field="id" header="id"></Column>
      </DataTable>
    </>

  );
}

export default AdminPage;