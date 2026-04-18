import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { T } from "../data";

export  function Cursor() {
  const [p, setP] = useState({x:-100,y:-100});
  const [hl, setHl] = useState(false);
  useEffect(() => {
    const m = e => setP({x:e.clientX,y:e.clientY});
    const o = e => setHl(!!e.target.closest("a,button,[data-h]"));
    window.addEventListener("mousemove",m);
    window.addEventListener("mouseover",o);
    return () => { window.removeEventListener("mousemove",m); window.removeEventListener("mouseover",o); };
  },[]);
  return (<>
    <motion.div className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998]"
      style={{backgroundColor:T.amber}}
      animate={{x:p.x-4,y:p.y-4}} transition={{type:"spring",stiffness:1000,damping:50}} />
    <motion.div className="fixed top-0 left-0 rounded-full border pointer-events-none z-[9997]"
      animate={{x:p.x-(hl?34:18),y:p.y-(hl?34:18),width:hl?68:36,height:hl?68:36,borderColor:hl?"rgba(200,135,42,0.7)":"rgba(200,135,42,0.35)",backgroundColor:hl?"rgba(200,135,42,0.06)":"transparent"}}
      transition={{type:"spring",stiffness:220,damping:28}} />
  </>);
}