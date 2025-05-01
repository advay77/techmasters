import TeamHeroSection from '@/components/teams/hero'
import TeamGrid from '@/components/teams/team-members'
import React from 'react'

const page = () => {
  return (
    <div>
      <TeamHeroSection/>
      <TeamGrid/>
    </div>
  )
}

export default page