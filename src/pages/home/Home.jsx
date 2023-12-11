import { Link } from "react-router-dom";
import "./Home.scss"
const Home = () => {
  return (
   <>
<div className="home">
<Link to="/aouth">Aouth page...</Link>
</div>
    {/* <section className="home-page">
    <div className="container-full">
      <div className="home">
      <aside className="home-left">
        <div className="home-left-content sidebar-content">
          left
        </div>
      </aside>
     <main> 
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
     </main>
     <aside className="home-right">
      <div className="home-right-content sidebar-content">
      right
      </div>
     </aside>
      </div>
     </div>
    </section> */}
   </>
  )
}

export default Home;