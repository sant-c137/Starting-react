import { Children } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterfollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Duran',
        isFollowing: true 
    },
    {
        userName: 'sant',
        name: 'Santiago Montaño',
        isFollowing: false 
    },
    {
        userName: 'prueba',
        name: 'Pepito Perez',
        isFollowing: true 
    },
]

export function App () {
    return (
        <section className = "App" >
            {
                users.map(user => {
                    const { name, userName, isFollowing} = user
                    return (
                        <TwitterFollowCard
                            key = {userName}
                            userName = {userName}
                            initialIsFollowing = {isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                    )
                })
            }

        </section>
        
    )
}