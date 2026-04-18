"use client";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import {T} from "../data"
import { Cursor } from "../components/Cursor";
const ease=[0.22,1,0.36,1];
const fadeUp={hidden:{opacity:0,y:36},visible:{opacity:1,y:0,transition:{duration:0.75,ease}}};
const stag=(d=0)=>({hidden:{},visible:{transition:{staggerChildren:0.1,delayChildren:d}}});
function useRev(m="-70px"){const r=useRef(null);const v=useInView(r,{once:true,margin:m});return [r,v];}

const SERVICES_LIST=["Web Development","Mobile App","UI/UX Design","SEO Strategy","Full Package"];
const BUDGETS=["< $2k","$4k – $12k","$15k – $50k"];
const TIMELINES=["ASAP (< 1 month)","1 – 3 months","3 – 6 months","6+ months / Ongoing","Flexible"];
const STEPS=[{id:1,l:"Project Type"},{id:2,l:"Details"},{id:3,l:"About You"},{id:4,l:"Timeline"}];





/* ── MULTI-STEP FORM ── */
function MultiStepForm(){
  const [step,setStep]=useState(1);
  const [done,setDone]=useState(false);
  const [focus,setFocus]=useState(null);
  const [data,setData]=useState({services:[],desc:"",budget:"",name:"",email:"",company:"",timeline:"",extra:""});
  const upd=(k,v)=>setData(d=>({...d,[k]:v}));
  const toggleSvc=(id)=>upd("services",data.services.includes(id)?data.services.filter(s=>s!==id):[...data.services,id]);
  const canNext=()=>{
    if(step===1) return data.services.length>0;
    if(step===2) return data.desc.length>10&&data.budget;
    if(step===3) return data.name&&data.email.includes("@");
    if(step===4) return data.timeline;
    return true;
  };
  const progress=(step/4)*100;

  return(
    <div style={{
      background: T.inkSoft,
      border: `1px solid ${T.cream}10`,
      width: "100%",
      borderRadius: "4px"
    }}>
      {/* Progress */}
      <div style={{borderBottom:`1px solid ${T.cream}08`}}>
        <div style={{height:2,background:`${T.cream}08`}}>
          <motion.div style={{height:"100%",background:T.amber}} animate={{width:`${progress}%`}} transition={{duration:0.5,ease}}/>
        </div>
        <div style={{
          padding: "clamp(12px, 2vh, 16px) clamp(20px, 4vw, 32px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "clamp(8px, 2vw, 16px)",
          flexWrap: "wrap"
        }}>
          <div style={{
            display: "flex",
            gap: "clamp(12px, 3vw, 20px)",
            flexWrap: "wrap"
          }}>
            {STEPS.map(s=>(
              <div key={s.id} style={{display:"flex",alignItems:"center",gap:"clamp(4px, 1vw, 8px)"}}>
                <div style={{
                  width: "clamp(18px, 4vw, 20px)",
                  height: "clamp(18px, 4vw, 20px)",
                  border: `1px solid ${step>s.id?T.amber:step===s.id?T.amber:`${T.cream}15`}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: step>s.id?T.amber:"transparent",
                  transition: "all 0.3s",
                  flexShrink: 0
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "clamp(8px, 1.8vw, 9px)",
                    color: step>s.id?T.ink:step===s.id?T.amber:`${T.cream}25`,
                    fontWeight: 700
                  }}>
                    {step>s.id?"✓":s.id}
                  </span>
                </div>
                <span style={{
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(9px, 2vw, 10px)",
                  color: step>=s.id?`${T.cream}65`:`${T.cream}25`,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  display: "none",
                  whiteSpace: "nowrap"
                }} className="sm:block">{s.l}</span>
              </div>
            ))}
          </div>
          <span style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "clamp(9px, 2vw, 10px)",
            color: `${T.cream}25`,
            letterSpacing: "0.18em",
            whiteSpace: "nowrap"
          }}>{step}/4</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {done?(
          <motion.div key="done" initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} style={{
            padding: "clamp(40px, 8vh, 80px) clamp(20px, 4vw, 32px)",
            textAlign: "center",
            width: "100%"
          }}>
            <motion.div initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",delay:0.2}}
              style={{
                width: "clamp(48px, 8vw, 64px)",
                height: "clamp(48px, 8vw, 64px)",
                border: `1px solid ${T.amber}50`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto clamp(16px, 3vh, 20px)",
                color: T.amber,
                fontSize: "clamp(20px, 4vw, 24px)"
              }}>
              ✓
            </motion.div>
            
            <h3 style={{
              fontFamily: "Georgia,serif",
              fontSize: "clamp(1.6rem, 5vw, 2rem)",
              fontWeight: 900,
              color: T.cream,
              marginBottom: "clamp(4px, 1vh, 8px)",
              wordBreak: "break-word"
            }}>
              Message Received.
            </h3>
            
            <p style={{
              fontFamily: "'Syne',sans-serif",
              color: `${T.cream}40`,
              fontSize: "clamp(12px, 2.2vw, 13px)",
              marginBottom: "clamp(2px, 0.5vh, 4px)",
              wordBreak: "break-word"
            }}>
              Thanks, <span style={{color:T.cream}}>{data.name}</span>. We'll be at
            </p>
            
            <p style={{
              fontFamily: "'JetBrains Mono',monospace",
              color: T.amber,
              fontSize: "clamp(12px, 2.2vw, 13px)",
              marginBottom: "clamp(16px, 3vh, 20px)",
              wordBreak: "break-word"
            }}>
              {data.email}
            </p>
            
            <p style={{
              fontFamily: "'Syne',sans-serif",
              color: `${T.cream}28`,
              fontSize: "clamp(11px, 2vw, 12px)",
              lineHeight: 1.65
            }}>
              Expected reply within 24 business hours.
            </p>
          </motion.div>
        ):(
          <motion.div
            key={step}
            initial={{opacity:0,x:20}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:-20}}
            transition={{duration:0.35,ease}}
            style={{
              padding: "clamp(24px, 4vh, 36px) clamp(20px, 4vw, 32px)",
              width: "100%"
            }}>

            {step===1&&(
              <div style={{ width: "100%" }}>
                <h3 style={{
                  fontFamily: "Georgia,serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.3rem, 4vw, 1.6rem)",
                  color: T.cream,
                  marginBottom: "clamp(4px, 1vh, 6px)",
                  letterSpacing: "-0.02em",
                  wordBreak: "break-word"
                }}>
                  What do you need built?
                </h3>
                
                <p style={{
                  fontFamily: "'Syne',sans-serif",
                  color: `${T.cream}35`,
                  fontSize: "clamp(12px, 2.2vw, 13px)",
                  marginBottom: "clamp(20px, 4vh, 28px)"
                }}>
                  Select all that apply.
                </p>
                
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(140px, 100%), 1fr))",
                  gap: "clamp(8px, 2vw, 10px)",
                  width: "100%"
                }}>
                  {SERVICES_LIST.map(svc=>{
                    const sel=data.services.includes(svc);
                    return(
                      <button key={svc} onClick={()=>toggleSvc(svc)} data-h
                        style={{
                          padding: "clamp(12px, 2vh, 16px) clamp(12px, 2vw, 18px)",
                          border: `1px solid ${sel?T.amber:`${T.cream}12`}`,
                          background: sel?`${T.amber}12`:"transparent",
                          color: sel?T.amber:`${T.cream}45`,
                          fontFamily: "'Syne',sans-serif",
                          fontSize: "clamp(11px, 2vw, 12px)",
                          fontWeight: 600,
                          cursor: "none",
                          textAlign: "left",
                          transition: "all 0.2s",
                          letterSpacing: "0.04em",
                          width: "100%",
                          whiteSpace: "nowrap"
                        }}>
                        {svc} {sel&&<span style={{color:T.amber,fontSize:"clamp(9px, 1.8vw, 10px)"}}>✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step===2&&(
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(20px, 4vh, 28px)",
                width: "100%"
              }}>
                <div>
                  <h3 style={{
                    fontFamily: "Georgia,serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.3rem, 4vw, 1.6rem)",
                    color: T.cream,
                    marginBottom: "clamp(4px, 1vh, 6px)",
                    letterSpacing: "-0.02em",
                    wordBreak: "break-word"
                  }}>
                    Tell us about your project.
                  </h3>
                  
                  <p style={{
                    fontFamily: "'Syne',sans-serif",
                    color: `${T.cream}35`,
                    fontSize: "clamp(12px, 2.2vw, 13px)"
                  }}>
                    The more detail, the better proposal we can give you.
                  </p>
                </div>
                
                <div style={{ width: "100%" }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "clamp(8px, 1.8vw, 9px)",
                    color: `${T.cream}35`,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    marginBottom: "clamp(6px, 1.5vh, 8px)"
                  }}>
                    Project Description *
                  </div>
                  
                  <textarea
                    value={data.desc}
                    onChange={e=>upd("desc",e.target.value)}
                    onFocus={()=>setFocus("desc")}
                    onBlur={()=>setFocus(null)}
                    placeholder="What are you building? Who is it for? What problem does it solve?"
                    rows={4}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: `1px solid ${focus==="desc"?T.amber:`${T.cream}15`}`,
                      padding: "clamp(8px, 1.5vh, 12px) 0",
                      fontFamily: "'Syne',sans-serif",
                      color: T.cream,
                      fontSize: "clamp(13px, 2.2vw, 14px)",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.3s",
                      boxSizing: "border-box"
                    }}/>
                </div>
                
                <div style={{ width: "100%" }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "clamp(8px, 1.8vw, 9px)",
                    color: `${T.cream}35`,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    marginBottom: "clamp(8px, 2vh, 12px)"
                  }}>
                    Budget Range *
                  </div>
                  
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100px, 100%), 1fr))",
                    gap: "clamp(6px, 1.5vw, 8px)",
                    width: "100%"
                  }}>
                    {BUDGETS.map(b=>(
                      <button key={b} onClick={()=>upd("budget",b)} data-h
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: "clamp(9px, 2vw, 10px)",
                          padding: "clamp(8px, 1.5vh, 12px) clamp(6px, 1vw, 8px)",
                          border: `1px solid ${data.budget===b?T.amber:`${T.cream}12`}`,
                          background: data.budget===b?`${T.amber}15`:"transparent",
                          color: data.budget===b?T.amber:`${T.cream}35`,
                          cursor: "none",
                          transition: "all 0.2s",
                          letterSpacing: "0.08em",
                          width: "100%",
                          textAlign: "center",
                          whiteSpace: "nowrap"
                        }}>
                        {b}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step===3&&(
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(20px, 4vh, 28px)",
                width: "100%"
              }}>
                <div>
                  <h3 style={{
                    fontFamily: "Georgia,serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.3rem, 4vw, 1.6rem)",
                    color: T.cream,
                    marginBottom: "clamp(4px, 1vh, 6px)",
                    letterSpacing: "-0.02em",
                    wordBreak: "break-word"
                  }}>
                    Who are we talking to?
                  </h3>
                  
                  <p style={{
                    fontFamily: "'Syne',sans-serif",
                    color: `${T.cream}35`,
                    fontSize: "clamp(12px, 2.2vw, 13px)"
                  }}>
                    Basic details so we can reach you.
                  </p>
                </div>
                
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
                  gap: "clamp(16px, 3vw, 24px)",
                  width: "100%"
                }}>
                  {[{k:"name", l:"Your Name *", pl:"Alex Johnson"},
                    {k:"email", l:"Email Address *", pl:"alex@company.com"}
                  ].map(f=>(
                    <div key={f.k} style={{ width: "100%" }}>
                      <div style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: "clamp(8px, 1.8vw, 9px)",
                        color: `${T.cream}35`,
                        letterSpacing: "0.24em",
                        textTransform: "uppercase",
                        marginBottom: "clamp(4px, 1vh, 6px)"
                      }}>
                        {f.l}
                      </div>
                      
                      <input
                        value={data[f.k]}
                        onChange={e=>upd(f.k,e.target.value)}
                        onFocus={()=>setFocus(f.k)}
                        onBlur={()=>setFocus(null)}
                        placeholder={f.pl}
                        style={{
                          width: "100%",
                          background: "transparent",
                          border: "none",
                          borderBottom: `1px solid ${focus===f.k?T.amber:`${T.cream}15`}`,
                          padding: "clamp(8px, 1.5vh, 12px) 0",
                          fontFamily: "'Syne',sans-serif",
                          color: T.cream,
                          fontSize: "clamp(13px, 2.2vw, 14px)",
                          outline: "none",
                          transition: "border-color 0.3s",
                          boxSizing: "border-box"
                        }}/>
                    </div>
                  ))}
                </div>
                
                <div style={{ width: "100%" }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "clamp(8px, 1.8vw, 9px)",
                    color: `${T.cream}35`,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    marginBottom: "clamp(4px, 1vh, 6px)"
                  }}>
                    Company / Startup (optional)
                  </div>
                  
                  <input
                    value={data.company}
                    onChange={e=>upd("company",e.target.value)}
                    onFocus={()=>setFocus("company")}
                    onBlur={()=>setFocus(null)}
                    placeholder="Acme Corp"
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: `1px solid ${focus==="company"?T.amber:`${T.cream}15`}`,
                      padding: "clamp(8px, 1.5vh, 12px) 0",
                      fontFamily: "'Syne',sans-serif",
                      color: T.cream,
                      fontSize: "clamp(13px, 2.2vw, 14px)",
                      outline: "none",
                      transition: "border-color 0.3s",
                      boxSizing: "border-box"
                    }}/>
                </div>
              </div>
            )}

            {step===4&&(
              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: "clamp(20px, 4vh, 28px)",
                width: "100%"
              }}>
                <div>
                  <h3 style={{
                    fontFamily: "Georgia,serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.3rem, 4vw, 1.6rem)",
                    color: T.cream,
                    marginBottom: "clamp(4px, 1vh, 6px)",
                    letterSpacing: "-0.02em",
                    wordBreak: "break-word"
                  }}>
                    What's your timeline?
                  </h3>
                  
                  <p style={{
                    fontFamily: "'Syne',sans-serif",
                    color: `${T.cream}35`,
                    fontSize: "clamp(12px, 2.2vw, 13px)"
                  }}>
                    Helps us confirm availability.
                  </p>
                </div>
                
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(140px, 100%), 1fr))",
                  gap: "clamp(6px, 1.5vw, 8px)",
                  width: "100%"
                }}>
                  {TIMELINES.map(t=>(
                    <button key={t} onClick={()=>upd("timeline",t)} data-h
                      style={{
                        fontFamily: "'Syne',sans-serif",
                        fontSize: "clamp(11px, 2vw, 12px)",
                        fontWeight: 600,
                        padding: "clamp(12px, 2vh, 16px) clamp(12px, 2vw, 16px)",
                        border: `1px solid ${data.timeline===t?T.amber:`${T.cream}12`}`,
                        background: data.timeline===t?`${T.amber}12`:"transparent",
                        color: data.timeline===t?T.amber:`${T.cream}40`,
                        cursor: "none",
                        textAlign: "left",
                        transition: "all 0.2s",
                        letterSpacing: "0.04em",
                        width: "100%",
                        whiteSpace: "nowrap"
                      }}>
                      {t}
                    </button>
                  ))}
                </div>
                
                <div style={{ width: "100%" }}>
                  <div style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "clamp(8px, 1.8vw, 9px)",
                    color: `${T.cream}35`,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    marginBottom: "clamp(4px, 1vh, 6px)"
                  }}>
                    Anything else? (optional)
                  </div>
                  
                  <textarea
                    value={data.extra}
                    onChange={e=>upd("extra",e.target.value)}
                    onFocus={()=>setFocus("extra")}
                    onBlur={()=>setFocus(null)}
                    placeholder="Links to inspiration, competitors, or other context..."
                    rows={3}
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: `1px solid ${focus==="extra"?T.amber:`${T.cream}15`}`,
                      padding: "clamp(8px, 1.5vh, 12px) 0",
                      fontFamily: "'Syne',sans-serif",
                      color: T.cream,
                      fontSize: "clamp(13px, 2.2vw, 14px)",
                      outline: "none",
                      resize: "vertical",
                      transition: "border-color 0.3s",
                      boxSizing: "border-box"
                    }}/>
                </div>
              </div>
            )}

            {/* Nav buttons */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "clamp(24px, 5vh, 36px)",
              paddingTop: "clamp(20px, 3vh, 28px)",
              borderTop: `1px solid ${T.cream}08`,
              gap: "clamp(12px, 3vw, 24px)",
              flexWrap: "wrap"
            }}>
              <button
                onClick={()=>step>1&&setStep(s=>s-1)}
                data-h
                style={{
                  opacity: step===1?0:1,
                  pointerEvents: step===1?"none":"auto",
                  fontFamily: "'Syne',sans-serif",
                  fontSize: "clamp(11px, 2vw, 12px)",
                  color: `${T.cream}35`,
                  background: "none",
                  border: "none",
                  cursor: "none",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  transition: "color 0.2s",
                  padding: "8px 0"
                }}
                onMouseEnter={e=>e.currentTarget.style.color=`${T.cream}65`}
                onMouseLeave={e=>e.currentTarget.style.color=`${T.cream}35`}>
                ← Back
              </button>
              
              <button
                onClick={()=>canNext()&&(step<4?setStep(s=>s+1):setDone(true))}
                data-h
                style={{
                  background: canNext()?T.amber:`${T.cream}10`,
                  color: canNext()?T.ink:`${T.cream}20`,
                  fontFamily: "'Syne',sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(10px, 2vw, 11px)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  padding: "clamp(12px, 2vh, 16px) clamp(20px, 4vw, 32px)",
                  border: "none",
                  cursor: "none",
                  transition: "all 0.3s",
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(8px, 2vw, 12px)",
                  whiteSpace: "nowrap"
                }}
                onMouseEnter={e=>{if(canNext())e.currentTarget.style.background=T.cream;}}
                onMouseLeave={e=>{if(canNext())e.currentTarget.style.background=T.amber;}}>
                {step===4?"Send Brief ":"Continue "}<span style={{fontSize:"clamp(14px, 3vw, 16px)"}}>→</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── CONTACT INFO SIDEBAR ── */
function ContactSidebar(){
  const [r,v]=useRev();
  return(
    <motion.div
      ref={r}
      variants={stag(0.2)}
      initial="hidden"
      animate={v?"visible":"hidden"}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "clamp(16px, 3vh, 24px)",
        width: "100%"
      }}>
      
      {/* Direct contact */}
      <motion.div variants={fadeUp} style={{
        border: `1px solid ${T.cream}10`,
        padding: "clamp(20px, 3vh, 28px) clamp(16px, 3vw, 28px)",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "clamp(8px, 1.8vw, 9px)",
          color: `${T.cream}30`,
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          marginBottom: "clamp(16px, 3vh, 20px)"
        }}>
          Get In Touch Directly
        </div>
        
        {[{l:"Email", v:"info@codeveraa.studio"},
          {l:"Based In", v:"Dubai · Brasil · Turkey"},
          {l:"Phone", v:"+971 55 263 5229"}
        ].map(item=>(
          <div key={item.l} style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "clamp(8px, 2vw, 16px)",
            padding: "clamp(8px, 1.5vh, 12px) 0",
            borderBottom: `1px solid ${T.cream}08`,
            flexWrap: "wrap"
          }}>
            <span style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "clamp(8px, 1.8vw, 9px)",
              color: `${T.cream}25`,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              paddingTop: 1,
              flexShrink: 0
            }}>
              {item.l}
            </span>
            
            <span style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(11px, 2vw, 12px)",
              color: `${T.cream}55`,
              textAlign: "right",
              wordBreak: "break-word",
              flex: 1
            }}>
              {item.v}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Response times */}
      <motion.div variants={fadeUp} style={{
        border: `1px solid ${T.cream}10`,
        padding: "clamp(20px, 3vh, 28px) clamp(16px, 3vw, 28px)",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "clamp(8px, 1.8vw, 9px)",
          color: `${T.cream}30`,
          letterSpacing: "0.26em",
          textTransform: "uppercase",
          marginBottom: "clamp(16px, 3vh, 20px)"
        }}>
          What to Expect
        </div>
        
        {[{l:"First response", t:"< 24 hours", c:"#4ade80"},
          {l:"Discovery call", t:"Within 48 hrs", c:T.amber},
          {l:"Full proposal", t:"3 – 5 days", c:"#60a5fa"}
        ].map(item=>(
          <div key={item.l} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "clamp(8px, 2vw, 16px)",
            padding: "clamp(8px, 1.5vh, 12px) 0",
            borderBottom: `1px solid ${T.cream}08`,
            flexWrap: "wrap"
          }}>
            <span style={{
              fontFamily: "'Syne',sans-serif",
              fontSize: "clamp(11px, 2vw, 12px)",
              color: `${T.cream}45`,
              wordBreak: "break-word"
            }}>
              {item.l}
            </span>
            
            <span style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "clamp(10px, 2vw, 11px)",
              color: item.c,
              fontWeight: 700,
              whiteSpace: "nowrap"
            }}>
              {item.t}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Availability */}
      <motion.div variants={fadeUp} style={{
        border: `1px solid ${T.cream}10`,
        padding: "clamp(20px, 3vh, 28px) clamp(16px, 3vw, 28px)",
        width: "100%",
        boxSizing: "border-box"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(8px, 2vw, 12px)",
          marginBottom: "clamp(8px, 2vh, 12px)",
          flexWrap: "wrap"
        }}>
          <span style={{
            width: "clamp(6px, 1.5vw, 8px)",
            height: "clamp(6px, 1.5vw, 8px)",
            borderRadius: "50%",
            background: "#4ade80",
            boxShadow: "0 0 0 3px rgba(74,222,128,0.2)",
            flexShrink: 0
          }}/>
          
          <span style={{
            fontFamily: "'Syne',sans-serif",
            fontSize: "clamp(11px, 2vw, 12px)",
            fontWeight: 700,
            color: `${T.cream}65`,
            wordBreak: "break-word"
          }}>
            Currently accepting new clients
          </span>
        </div>
        
        <p style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: "clamp(11px, 2vw, 12px)",
          color: `${T.cream}30`,
          lineHeight: 1.65,
          marginBottom: "clamp(16px, 3vh, 20px)",
          wordBreak: "break-word"
        }}>
          We take 3–4 new projects per quarter. Next available slot: <span style={{color:`${T.cream}50`}}>Q3 2024</span>
        </p>
        
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "clamp(6px, 1.5vw, 10px)",
          width: "100%"
        }}>
          {["Dribbble","LinkedIn","GitHub","Twitter"].map(s=>(
            <a key={s} href="#" data-h
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "clamp(8px, 1.8vw, 9px)",
                padding: "clamp(4px, 1vh, 6px) clamp(8px, 2vw, 12px)",
                border: `1px solid ${T.cream}12`,
                color: `${T.cream}25`,
                textDecoration: "none",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                transition: "all 0.25s",
                whiteSpace: "nowrap"
              }}
              onMouseEnter={e=>{
                e.target.style.borderColor=`${T.amber}60`;
                e.target.style.color=T.amber;
              }}
              onMouseLeave={e=>{
                e.target.style.borderColor=`${T.cream}12`;
                e.target.style.color=`${T.cream}25`;
              }}>
              {s}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── PAGE ── */
export default function ContactPage(){
  const [r,v]=useRev();
  return(
    <div style={{fontFamily:"'Syne','DM Sans',system-ui,sans-serif",background:T.cream,minHeight:"100vh",cursor:"none"}}>
      <Cursor/>
      <Navbar />

      {/* Hero */}
      <section style={{background:T.cream,padding:"160px 24px 80px",position:"relative",overflow:"hidden"}}>
<motion.div 
        initial={{scale:0.7, opacity:0}} 
        animate={{scale:1, opacity:1}} 
        transition={{duration:1.8, ease}}
        style={{
          position: "absolute",
          top: "clamp(-25%, -15vw, -15%)",
          right: "clamp(-20%, -15vw, -10%)",
          width: "min(680px, 80vw)",
          height: "min(680px, 80vw)",
          borderRadius: "50%",
          border: `1px solid ${T.sand}50`,
          pointerEvents: "none"
        }} 
      />
      <motion.div 
        initial={{scale:0.7, opacity:0}} 
        animate={{scale:1, opacity:1}} 
        transition={{duration:1.8, delay:0.15, ease}}
        style={{
          position: "absolute",
          top: "clamp(-15%, -10vw, -7%)",
          right: "clamp(-10%, -8vw, -4%)",
          width: "min(480px, 60vw)",
          height: "min(480px, 60vw)",
          borderRadius: "50%",
          border: `1px solid ${T.sand}30`,
          pointerEvents: "none"
        }} 
      />
      
      {/* Vertical accent line - responsive height and position */}
      <motion.div 
        initial={{scaleY:0}} 
        animate={{scaleY:1}} 
        transition={{duration:1.2, delay:0.4, ease}} 
        style={{
          transformOrigin: "top",
          position: "absolute",
          top: 0,
          right: "clamp(5%, 10%, 13%)",
          width: 1,
          height: "clamp(20vh, 35vh, 44vh)",
          background: `linear-gradient(to bottom, ${T.amber}90, transparent)`
        }} 
      />

        {/* <motion.div initial={{scaleY:0}} animate={{scaleY:1}} transition={{duration:1.2,delay:0.4,ease:"easeOut"}} style={{transformOrigin:"top",position:"absolute",top:0,right:"13%",width:1,height:"44vh",background:`linear-gradient(to bottom,${T.amber}80,transparent)`}}/> */}
        <div ref={r} style={{maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1}}>
          <motion.div initial={{opacity:0,x:-20}} animate={v?{opacity:1,x:0}:{}} transition={{duration:0.8,delay:0.1}} style={{display:"flex",alignItems:"center",gap:16,marginBottom:28}}>
            <span style={{width:48,height:1,background:T.amber,display:"block"}}/>
            <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:11,color:T.amber,letterSpacing:"0.28em",textTransform:"uppercase"}}>Let's Talk</span>
          </motion.div>
          <motion.h1 initial={{opacity:0,y:40}} animate={v?{opacity:1,y:0}:{}} transition={{duration:1,delay:0.2,ease}}
            style={{fontFamily:"Georgia,'Playfair Display',serif",fontSize:"clamp(3rem,8vw,8rem)",fontWeight:900,lineHeight:0.9,letterSpacing:"-0.03em",color:T.ink,marginBottom:28,maxWidth:900}}>
            Start Your<br/><span style={{fontStyle:"italic",color:T.amber}}>Next Chapter.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={v?{opacity:1,y:0}:{}} transition={{duration:0.8,delay:0.45}}
            style={{fontFamily:"'Syne',sans-serif",color:`${T.cream}45`,fontSize:17,maxWidth:440,lineHeight:1.75}}>
            Tell us about your project. We reply within 24 hours with an honest assessment, rough timeline, and a few ideas.
          </motion.p>
        </div>
      </section>

      {/* Main grid */}
      <section style={{background:T.ink,padding:"20px 24px 120px"}}>
       <div style={{
  maxWidth: 1200,
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
  gap: "clamp(24px, 4vw, 48px)",
  alignItems: "start",
  width: "100%"
}}>
  <MultiStepForm/>
  <ContactSidebar/>
</div>
      </section>

      {/* Map / Location band */}
     <section style={{
  background: T.inkSoft,
  borderTop: `1px solid ${T.cream}08`,
  padding: "clamp(48px, 8vh, 72px) clamp(16px, 5vw, 24px)",
  width: "100%"
}}>
  <div style={{
    maxWidth: 1200,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)", // Fixed 4 columns on desktop
    gap: 2, // Original gap preserved
    background: `${T.cream}05`,
    width: "100%"
  }} className="offices-grid">
    {[
      {city:"Dubai", addr:"Business Bay, Dubai UAE", tz:"GMT+4", flag:"🇦"},
      {city:"Istanbul", addr:"Maltepe, Istanbul TR", tz:"GMT+3", flag:"🇹"},
      {city:"São Paulo", addr:"Pinheiros, São Paulo BR", tz:"GMT-3", flag:"🇧"},
      {city:"Remote", addr:"Serving clients worldwide", tz:"Your timezone", flag:"🇧"}
    ].map(office => (
      <div key={office.city} style={{
        background: T.inkSoft,
        padding: "32px 28px", // Original padding preserved
        width: "100%",
        boxSizing: "border-box"
      }}>
        <div style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 18, // Original size preserved
          marginBottom: 12
        }}>
          {office.flag}
        </div>
        
        <h3 style={{
          fontFamily: "Georgia,serif",
          fontWeight: 900,
          fontSize: 22, // Original size preserved
          color: T.cream,
          marginBottom: 6,
          wordBreak: "break-word"
        }}>
          {office.city}
        </h3>
        
        <p style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: 12, // Original size preserved
          color: `${T.cream}40`,
          marginBottom: 8,
          lineHeight: 1.6,
          wordBreak: "break-word"
        }}>
          {office.addr}
        </p>
        
        <span style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: 10, // Original size preserved
          color: `${T.amber}80`,
          letterSpacing: "0.18em",
          display: "block"
        }}>
          {office.tz}
        </span>
      </div>
    ))}
  </div>

  {/* Responsive breakpoints that don't affect desktop */}
  <style>{`
    @media (max-width: 1024px) {
      .offices-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 16px !important;
      }
      .offices-grid > div {
          padding: 28px 24px !important;
        }
      }
      @media (max-width: 640px) {
        .offices-grid {
          grid-template-columns: 1fr !important;
          gap: 12px !important;
        }
        .offices-grid > div {
          padding: 24px 20px !important;
        }
      }
    `}</style>
</section>

      <Footer/>
    </div>
  );
}