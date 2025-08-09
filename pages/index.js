export default function Home() {
  const data = {
    siteSettings: {
      heroTitle: "האתר המרכזי של שון — HUB",
      heroSubtitle:
        "מכאן מתנתבים לכל מה שקשור אליי: חנות, מידע ללקוחות ושותפים מסחריים, ולוח הופעות.",
      heroVideo: "https://www.youtube.com/embed/HSLNOrMdv8s?rel=0",
      storeUrl: "",
      social: {
        youtube: "https://www.youtube.com/@TheShonShow",
        instagram: "https://www.instagram.com/shonmizrachi/",
        tiktok: "https://www.tiktok.com/@shonmizrachi"
      },
      contact: {
        phoneDisplay: "053-9451224",
        phoneTel: "+972539451224",
        email: "theshonshow@gmail.com"
      }
    },
    press: [
      {
        title: "כתבה עליי ב-mako",
        url: "https://www.mako.co.il/nexter-news/Article-0d20f1695ef5891026.htm?fbclid=IwY2xjawMEHn1leHRuA2FlbQIxMQABHo_f7Vm4NuUu-1PXvseDZBeJnnzPHODSoaIbm161LQvY4unD8Q53qnjUcgp6_aem_aFHmmCETaEsxGb3oOfp0Rg"
      }
    ],
    events: [],
    gallery: new Array(8).fill({
      image:
        "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?q=80&w=1200&auto=format&fit=crop"
    })
  };

  const s = data.siteSettings;

  return (
    <main dir="rtl" style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif", background:"#0a0a0a", color:"#f5f5f5" }}>
      {/* Splash */}
      <div id="splash" style={{position:"fixed", inset:0, zIndex:50, display:"flex", alignItems:"center", justifyContent:"center", background:"linear-gradient(to bottom,#111,#0a0a0a)"}}>
        <div style={{position:"absolute", inset:0, opacity:.2, pointerEvents:"none", background:"url(https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1920&auto=format&fit=crop) center/cover"}} />
        <div style={{position:"relative", zIndex:10, width:"min(640px,92%)", borderRadius:24, padding:24, textAlign:"center", background:"rgba(23,23,23,.7)", backdropFilter:"blur(10px)", boxShadow:"inset 0 0 0 1px rgba(255,255,255,.06)"}}>
          <h1 style={{fontSize:"clamp(24px,3vw,32px)", fontWeight:800}}>ברוכים הבאים ל <span style={{color:"#fff"}}>The Shon Show</span></h1>
          <p style={{marginTop:8, color:"#bbb"}}>HUB רשמי — חנות, הופעות ושיתופי פעולה.</p>
          <button onClick={()=>{document.getElementById('splash').style.display='none';}}
                  style={{marginTop:16, display:"inline-flex", alignItems:"center", gap:8, padding:"12px 16px", borderRadius:999, fontWeight:700, background:"#FEBF00", color:"#111"}}>
            להיכנס לאתר <span style={{display:"inline-block", transform:"rotate(180deg)"}}>➜</span>
          </button>
          <button aria-label="סגור מסך פתיחה" onClick={()=>{document.getElementById('splash').style.display='none';}}
                  style={{position:"absolute", top:12, left:12, padding:"6px 10px", borderRadius:999, background:"rgba(255,255,255,.12)"}}>✕</button>
        </div>
      </div>

      {/* Header */}
      <header style={{position:"sticky", top:0, zIndex:40, background:"rgba(10,10,10,.7)", backdropFilter:"blur(6px)", borderBottom:"1px solid rgba(255,255,255,.06)"}}>
        <div style={{maxWidth:1200, margin:"0 auto", padding:"12px 16px", display:"flex", alignItems:"center", justifyContent:"space-between"}}>
          <a href="#top" style={{display:"flex", alignItems:"center", gap:12, textDecoration:"none", color:"#fff"}}>
            <div style={{width:32, height:32, borderRadius:999, background:"#fff", color:"#111", display:"grid", placeItems:"center", fontWeight:900}}>S</div>
            <span style={{fontWeight:600}}>The Shon Show</span>
          </a>
          <nav style={{display:"none", gap:24}} id="main-nav">
            <a href="#" title="החנות תיפתח בקרוב" style={{textDecoration:"none", color:"#fff"}}>חנות 🛍️</a>
            <a href="#brands" style={{textDecoration:"none", color:"#fff"}}>ללקוחות/מותגים</a>
            <a href="#events" style={{textDecoration:"none", color:"#fff"}}>לוח הופעות</a>
            <a href="#contact" style={{textDecoration:"none", color:"#fff"}}>יצירת קשר</a>
          </nav>
          <div><a href="#contact" style={{display:"inline-flex", padding:"8px 12px", borderRadius:999, background:"#FEBF00", color:"#111", fontWeight:700, textDecoration:"none"}}>צור קשר</a></div>
        </div>
      </header>

      {/* Hero */}
      <section id="top" style={{position:"relative"}}>
        <div style={{position:"absolute", inset:0, pointerEvents:"none", background:"radial-gradient(ellipse at top, rgba(217,70,239,0.12), rgba(14,165,233,0.06), transparent)"}} />
        <div style={{maxWidth:1200, margin:"0 auto", padding:"56px 16px", display:"grid", gridTemplateColumns:"1fr", gap:24, alignItems:"center"}}>
          <div>
            <h2 style={{fontSize:"clamp(32px,4vw,48px)", fontWeight:900, lineHeight:1.1}}>{s.heroTitle}</h2>
            <p style={{marginTop:12, color:"#bbb"}}>{s.heroSubtitle}</p>
            <div style={{marginTop:16, display:"flex", flexWrap:"wrap", gap:12}}>
              <a href="#" title="החנות תיפתח בקרוב" style={{display:"inline-flex", padding:"12px 16px", borderRadius:999, fontWeight:700, background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.12)", color:"#fff", textDecoration:"none"}}>לחנות 🛍️</a>
              <a href="#brands" style={{display:"inline-flex", padding:"12px 16px", borderRadius:999, fontWeight:700, background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.12)", color:"#fff", textDecoration:"none"}}>ללקוחות/מותגים 📣</a>
              <a href="#events" style={{display:"inline-flex", padding:"12px 16px", borderRadius:999, fontWeight:700, background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.12)", color:"#fff", textDecoration:"none"}}>לוח הופעות 📅</a>
            </div>
          </div>
          <div>
            <div style={{position:"relative", paddingTop:"56.25%", borderRadius:16, overflow:"hidden", boxShadow:"0 0 0 1px rgba(255,255,255,.1) inset"}}>
              <iframe src={s.heroVideo} title="Featured Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen style={{position:"absolute", inset:0, width:"100%", height:"100%"}} />
            </div>
          </div>
        </div>
      </section>

      {/* Press */}
      <section id="brands" style={{padding:"48px 0", borderTop:"1px solid rgba(255,255,255,.06)"}}>
        <div style={{maxWidth:1200, margin:"0 auto", padding:"0 16px"}}>
          <h2 style={{fontSize:"clamp(24px,3vw,36px)", fontWeight:900}}>מידע ללקוחות ושותפים</h2>
          <p style={{marginTop:8, color:"#bbb"}}>תקשורת, קייסים ושיתופי פעולה.</p>
          <div style={{display:"grid", gridTemplateColumns:"1fr", gap:16, marginTop:16}}>
            {data.press.map((p,i)=>(
              <a key={i} href={p.url} target="_blank" className="card" style={{textDecoration:"none", color:"#fff", border:"1px solid rgba(255,255,255,.12)", background:"rgba(255,255,255,.04)", borderRadius:20, overflow:"hidden"}}>
                <div style={{position:"relative", paddingTop:"56.25%", background:"url(https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop) center/cover"}} />
                <div style={{padding:16}}>
                  <h3 style={{fontWeight:800}}>כתבה עליי ב-mako</h3>
                  <p style={{marginTop:6, color:"#ccc"}}>לקריאה ↗</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Events (ריק כרגע) */}
      <section id="events" style={{padding:"48px 0", borderTop:"1px solid rgba(255,255,255,.06)"}}>
        <div style={{maxWidth:1200, margin:"0 auto", padding:"0 16px"}}>
          <h2 style={{fontSize:"clamp(24px,3vw,36px)", fontWeight:900}}>לוח הופעות ואירועים</h2>
          <p style={{marginTop:8, color:"#bbb"}}>אין כרגע אירועים פתוחים לקהל. עקבו כאן לעדכונים.</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{padding:"48px 0", borderTop:"1px solid rgba(255,255,255,.06)"}}>
        <div style={{maxWidth:1200, margin:"0 auto", padding:"0 16px", display:"grid", gridTemplateColumns:"1fr", gap:24}}>
          <div>
            <h2 style={{fontSize:"clamp(24px,3vw,36px)", fontWeight:900}}>בואו נדבר</h2>
            <p style={{marginTop:8, color:"#bbb"}}>להזמנת הופעות ואירועים, שיתופי פעולה או שאלות — מוזמנים לפנות.</p>
            <div style={{marginTop:16, display:"flex", gap:12, flexWrap:"wrap"}}>
              <a href={`tel:${s.contact.phoneTel}`} style={{display:"inline-flex", padding:"12px 16px", borderRadius:999, fontWeight:700, background:"#FEBF00", color:"#111", textDecoration:"none"}}>הזמנת הופעות ואירועים ☎ {s.contact.phoneDisplay}</a>
              <a href={`mailto:${s.contact.email}`} style={{display:"inline-flex", padding:"12px 16px", borderRadius:999, fontWeight:700, background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.12)", color:"#fff", textDecoration:"none"}}>✉ {s.contact.email}</a>
            </div>
          </div>
          <form style={{background:"rgba(23,23,23,.7)", borderRadius:16, padding:24, boxShadow:"inset 0 0 0 1px rgba(255,255,255,.06)"}}>
            <div style={{display:"grid", gridTemplateColumns:"1fr", gap:12}}>
              <div>
                <label style={{fontSize:14, color:"#bbb"}}>שם מלא</label>
                <input style={{width:"100%", marginTop:6, padding:"10px 12px", borderRadius:12, background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.12)", color:"#fff"}} placeholder="שם" />
              </div>
              <div>
                <label style={{fontSize:14, color:"#bbb"}}>אימייל</label>
                <input type="email" style={{width:"100%", marginTop:6, padding:"10px 12px", borderRadius:12, background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.12)", color:"#fff"}} placeholder="you@email.com" />
              </div>
              <div>
                <label style={{fontSize:14, color:"#bbb"}}>איך אפשר לעזור?</label>
                <textarea style={{width:"100%", marginTop:6, padding:"10px 12px", minHeight:120, borderRadius:12, background:"rgba(255,255,255,.06)", border:"1px solid rgba(255,255,255,.12)", color:"#fff"}} placeholder="ספרו בכמה מילים על הבקשה" />
              </div>
            </div>
            <button type="button" style={{marginTop:12, width:"100%", display:"inline-flex", justifyContent:"center", padding:"12px 16px", borderRadius:12, background:"#FEBF00", color:"#111", fontWeight:700}}>שליחה</button>
          </form>
        </div>
      </section>

      <footer style={{borderTop:"1px solid rgba(255,255,255,.06)", padding:"24px 0"}}>
        <div style={{maxWidth:1200, margin:"0 auto", padding:"0 16px", display:"flex", gap:16, alignItems:"center", justifyContent:"space-between", flexWrap:"wrap"}}>
          <div style={{color:"#aaa"}}>© {new Date().getFullYear()} The Shon Show — כל הזכויות שמורות</div>
          <div style={{display:"flex", gap:16, opacity:.9}}>
            <a href={s.social.youtube} target="_blank" rel="noreferrer">YouTube</a>
            <a href={s.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={s.social.tiktok} target="_blank" rel="noreferrer">TikTok</a>
          </div>
        </div>
      </footer>

      <script
        dangerouslySetInnerHTML={{ __html: `setTimeout(function(){ var s=document.getElementById('splash'); if(s) s.style.display='none'; }, 2200);` }}
      />
    </main>
  );
}
