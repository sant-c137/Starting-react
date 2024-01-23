import './App.css'
import { TwitterFollowCard } from './TwitterfollowCard.jsx'

export function App () {
    return (
        <section className = "App" >
            <TwitterFollowCard userName = "midudev" name ="Miguel Angel"/> 
            <TwitterFollowCard userName = "elonmusk" name ="Elon Musk"/> 
        </section>
        
    )
}