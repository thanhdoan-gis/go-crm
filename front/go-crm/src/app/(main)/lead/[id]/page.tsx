'use client'
import { Lead } from "@/model";
import { getLead } from "@/service/lead";
import { useRouter } from 'next/navigation'
import { Button } from "primereact/button";
import { useEffect, useState } from "react";

export default function LeadDetailPage
  ({ params }: { params: { id: string } }) {
  const [lead, setLead] = useState<Lead | null>(null)
  const router = useRouter()
  useEffect(() => {
    const getLeadOnView = async () => {
      const lead = await getLead(params.id)
      if (lead) {
        setLead(lead)
      }
    }
    getLeadOnView()
  }, [params.id])
  if (!!lead) {
    return (<>
      <Button onClick={(e) => {
        router.back()
      }} icon="pi pi-chevron-left" className="mb-3" />
      <br></br>
      <label className="font-bold">Name</label>
      <div className="my-2">{lead.name}</div>
      <label className="font-bold">Email</label>

      <div className="my-2">
        <span className="mr-3">{lead.email}</span>
        <Button onClick={(e) => {
          window.location.href = `mailto:${lead.email}`;
          e.preventDefault();
        }} icon="pi pi-envelope" outlined />
      </div>

      <label className="font-bold">Phone</label>
      <div className="my-2">
        <span className="mr-3">{lead.phone}</span>
        <Button onClick={(e) => {
          window.location.href = `tel://${lead.phone}`;
          e.preventDefault();
        }} icon="pi pi-phone" outlined />
      </div>

      <label className="font-bold">Status</label>
      <div className="my-2"><span className="mr-2">Unknown</span></div>
    </>)
  }
}