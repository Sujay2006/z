'use client'
import { useCall, useCallStateHooks } from '@stream-io/video-react-sdk'
import React from 'react'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const EndCallButton = ({setIScallEnd}: {setIScallEnd:(value: boolean)=>void}) => {
    const call = useCall();
    const {useLocalParticipant} = useCallStateHooks();
    const LocalParticipant =useLocalParticipant();
    const router = useRouter();

    const isMeetingOwner = LocalParticipant && call?.state.createdBy && LocalParticipant.userId === call.state.createdBy.id;

    if(!isMeetingOwner) return null;
  return (
    <Button onClick={async () => {
        await call.endCall();
        router.push('/');
        setIScallEnd(true)
    }} className='bg-red-500'>
        End Call For EveryOne
    </Button>
  )
}

export default EndCallButton
