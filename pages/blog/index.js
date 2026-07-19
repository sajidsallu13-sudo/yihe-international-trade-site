export default function Blog(){
  return (
    <main style={{padding:40, fontFamily:'Arial, sans-serif', maxWidth:900, margin:'0 auto'}}>
      <h1>Blog</h1>
      <p style={{fontSize:18, color:'#666'}}>Tips, insights, and guides on importing from China and international trade.</p>

      <div style={{marginTop:50}}>
        <div style={{borderBottom:'1px solid #ddd', paddingBottom:30, marginBottom:30}}>
          <h2 style={{margin:'0 0 10px 0'}}>
            <a href="/blog/sourcing-electronics" style={{color:'#0070f3', textDecoration:'none'}}>How to Source Electronics from China</a>
          </h2>
          <p style={{color:'#666', margin:'5px 0 15px 0'}}>Published on July 16, 2024</p>
          <p>
            A comprehensive guide to sourcing electronics from China, including supplier vetting, quality checks, and logistics considerations.
            Learn our proven process for finding reliable manufacturers and ensuring product quality.
          </p>
          <a href="/blog/sourcing-electronics" style={{color:'#0070f3', textDecoration:'none', fontWeight:'bold'}}>Read More →</a>
        </div>

        <div style={{borderBottom:'1px solid #ddd', paddingBottom:30, marginBottom:30}}>
          <h2 style={{margin:'0 0 10px 0'}}>
            <a href="/blog/export-compliance" style={{color:'#0070f3', textDecoration:'none'}}>Export Compliance: What Every Seller Should Know</a>
          </h2>
          <p style={{color:'#666', margin:'5px 0 15px 0'}}>Published on June 28, 2024</p>
          <p>
            Understanding export regulations is crucial for successful international trade. This guide covers key certifications (CE, FCC, RoHS),
            documentation requirements, and common compliance mistakes to avoid.
          </p>
          <a href="/blog/export-compliance" style={{color:'#0070f3', textDecoration:'none', fontWeight:'bold'}}>Read More →</a>
        </div>

        <div style={{paddingBottom:30}}>
          <h2 style={{margin:'0 0 10px 0'}}>
            <a href="/blog/freight-costs" style={{color:'#0070f3', textDecoration:'none'}}>Understanding Freight Costs: Air vs Sea Shipping</a>
          </h2>
          <p style={{color:'#666', margin:'5px 0 15px 0'}}>Published on May 15, 2024</p>
          <p>
            Choosing between air and sea freight impacts both your budget and delivery timeline. Learn the pros, cons, and cost comparisons
            to make the right decision for your shipment.
          </p>
          <a href="/blog/freight-costs" style={{color:'#0070f3', textDecoration:'none', fontWeight:'bold'}}>Read More →</a>
        </div>
      </div>

      <div style={{marginTop:50, padding:20, backgroundColor:'#f5f5f5', borderRadius:8, textAlign:'center'}}>
        <h3>Have a topic you'd like us to cover?</h3>
        <p>Email us at mohd.yihe@gmail.com with your suggestions!</p>
      </div>
    </main>
  )
}
