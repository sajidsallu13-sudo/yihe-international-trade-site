export default function Home() {
  return (
    <main style={{fontFamily:'Arial, sans-serif'}}>
      <section style={{backgroundColor:'#003f87', color:'white', padding:'60px 40px', textAlign:'center'}}>
        <h1 style={{fontSize:48, margin:'0 0 20px 0'}}>YIHE International Trade Services</h1>
        <p style={{fontSize:24, margin:'0 0 30px 0'}}>Your trusted partner for importing from China to the world</p>
        <a href="/contact" style={{display:'inline-block', padding:'12px 30px', backgroundColor:'#0070f3', color:'white', textDecoration:'none', borderRadius:4, fontSize:18, fontWeight:'bold'}}>
          Get Started
        </a>
      </section>

      <section style={{padding:'60px 40px', maxWidth:1200, margin:'0 auto'}}>
        <h2 style={{textAlign:'center', fontSize:36, marginBottom:40}}>Why Choose YIHE?</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))', gap:30}}>
          <div style={{padding:20, border:'1px solid #ddd', borderRadius:8, textAlign:'center'}}>
            <h3>🏭 Verified Suppliers</h3>
            <p>Access 500+ audited manufacturers with quality certifications.</p>
          </div>
          <div style={{padding:20, border:'1px solid #ddd', borderRadius:8, textAlign:'center'}}>
            <h3>✅ Quality Assurance</h3>
            <p>Third-party inspections ensure products meet specifications.</p>
          </div>
          <div style={{padding:20, border:'1px solid #ddd', borderRadius:8, textAlign:'center'}}>
            <h3>🚚 Full Logistics</h3>
            <p>Shipping, customs, and delivery coordination included.</p>
          </div>
          <div style={{padding:20, border:'1px solid #ddd', borderRadius:8, textAlign:'center'}}>
            <h3>💰 Transparent Pricing</h3>
            <p>No hidden fees. Clear breakdown of all costs upfront.</p>
          </div>
          <div style={{padding:20, border:'1px solid #ddd', borderRadius:8, textAlign:'center'}}>
            <h3>📋 Compliance Expert</h3>
            <p>CE, FCC, RoHS handled by compliance specialists.</p>
          </div>
          <div style={{padding:20, border:'1px solid #ddd', borderRadius:8, textAlign:'center'}}>
            <h3>🌍 Global Reach</h3>
            <p>Shipping to 150+ countries with established relationships.</p>
          </div>
        </div>
      </section>

      <section style={{backgroundColor:'#f5f5f5', padding:'60px 40px'}}>
        <div style={{maxWidth:1200, margin:'0 auto'}}>
          <h2 style={{fontSize:36, marginBottom:40}}>Our Services</h2>
          <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:30}}>
            <div>
              <h3>Supplier Sourcing</h3>
              <p>Find the right supplier with our verified network and vetting process.</p>
            </div>
            <div>
              <h3>Product Sampling</h3>
              <p>Get samples before committing to full production runs.</p>
            </div>
            <div>
              <h3>Quality Inspections</h3>
              <p>Third-party QC at every stage of production.</p>
            </div>
            <div>
              <h3>Shipping & Logistics</h3>
              <p>Sea freight, air freight, or express delivery options.</p>
            </div>
            <div>
              <h3>Customs & Compliance</h3>
              <p>Documentation and regulatory compliance for all markets.</p>
            </div>
            <div>
              <h3>Consulting</h3>
              <p>Expert advice on sourcing and supply chain optimization.</p>
            </div>
          </div>
          <p style={{textAlign:'center', marginTop:40}}>
            <a href="/services" style={{color:'#0070f3', textDecoration:'none', fontSize:18, fontWeight:'bold'}}>
              View All Services →
            </a>
          </p>
        </div>
      </section>

      <section style={{padding:'60px 40px', maxWidth:1200, margin:'0 auto'}}>
        <h2 style={{fontSize:36, marginBottom:40, textAlign:'center'}}>How It Works</h2>
        <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:20}}>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:40, color:'#0070f3', marginBottom:10}}>1</div>
            <h3>Consultation</h3>
            <p>Discuss your product and needs.</p>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:40, color:'#0070f3', marginBottom:10}}>2</div>
            <h3>Supplier Match</h3>
            <p>Find verified suppliers.</p>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:40, color:'#0070f3', marginBottom:10}}>3</div>
            <h3>Sampling</h3>
            <p>Test and approve samples.</p>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:40, color:'#0070f3', marginBottom:10}}>4</div>
            <h3>Production</h3>
            <p>Manage production with QC.</p>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:40, color:'#0070f3', marginBottom:10}}>5</div>
            <h3>Shipping</h3>
            <p>Handle customs and logistics.</p>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:40, color:'#0070f3', marginBottom:10}}>6</div>
            <h3>Delivery</h3>
            <p>On time, on budget, perfect condition.</p>
          </div>
        </div>
      </section>

      <section style={{backgroundColor:'#003f87', color:'white', padding:'60px 40px', textAlign:'center'}}>
        <h2 style={{fontSize:36, marginBottom:20}}>Ready to Start Importing?</h2>
        <p style={{fontSize:18, marginBottom:30}}>Let's discuss your needs and create a customized solution.</p>
        <a href="/contact" style={{display:'inline-block', padding:'12px 30px', backgroundColor:'#0070f3', color:'white', textDecoration:'none', borderRadius:4, fontSize:18, fontWeight:'bold'}}>
          Contact Us
        </a>
        <p style={{marginTop:30, fontSize:14}}>Or explore our blog for more tips on international trade.</p>
        <a href="/blog" style={{color:'#fff', textDecoration:'none', fontSize:16}}>
          Read Our Blog →
        </a>
      </section>

      <section style={{padding:'40px', backgroundColor:'#f5f5f5', textAlign:'center', fontSize:14}}>
        <p>📧 Email: mohd.yihe@gmail.com | 🌍 Based in China, serving worldwide</p>
      </section>
    </main>
  )
}
