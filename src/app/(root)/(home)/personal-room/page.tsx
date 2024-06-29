"use client"
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useUser } from '@clerk/nextjs';
import { title } from 'process';
import React from 'react'
import { useGetCallById } from '../../../../../hooks/useGetCallById';
import { useStreamVideoClient } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';

const Table = ({ title, discription}: {title: string; discription: string }) =>(
  <div className="flex flex-col item-start gap-2 xl:flex-row">
    <h1 className='text-base font-medium text-sky-1 lg:text-xl xl:min-w-32'>{title}:</h1>
    <h1 className='truncate text-sm font-bold max-sm:max-w-[320px] lg:text-xl'>{discription}</h1>
  </div>
)

const PersonalRoom = () => {
  const { user } = useUser();
  const meetingId = user?.id
  const {toast} = useToast()
  const client = useStreamVideoClient();
  const router = useRouter()
  const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`

  const {call} = useGetCallById(meetingId!);
const startRoom = async ()=>{
  if(!client || !user) return;


  if(!call){
    const newCall = client.call('default', meetingId!)

    await newCall.getOrCreate({
      data:{
        starts_at: new Date().toISOString(),
        custom: {
          description : 'Personal Meeting'
        }
      }
    })
  }
  router.push(`/meeting/${meetingId}?personal=true`)
    
  }

  return (
    <section className='flex flex-col text-white gap-10 size-full'>
      <h1 className='text-3xl font-bold'>
        PersonalRoom
      </h1>
      <div className="flex w-full flex-col gap-8 xl:max-[900px]:">
        <Table title='Topic' discription={`${user?.username}'s Meeting Room`}/>
        <Table title='Meeting' discription={meetingId!}/>
        <Table title='Meeting Link' discription={meetingLink}/>
      </div>
      <div className="flex gap-5">
        <Button className='bg-blue-1' onClick={startRoom}>
          Start Room
        </Button>
        <Button className='bg-dark-3' onClick={()=>{
          navigator.clipboard.writeText(meetingLink);
          toast({
            title: 'Link Copied'
          })
        }}>
          Copy Invitation
        </Button>

      </div>
    </section>
  )
}

export default PersonalRoom
