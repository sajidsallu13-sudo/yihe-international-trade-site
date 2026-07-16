import {useState} from 'react'
export default function Register(){
  const [status,setStatus]=useState(null)
  async function submit(e){
    e.preventDefault();
    const fd = new FormData(e.target);
    const body = {
      company_name: fd.get('company_name'),
      contact_name: fd.get('contact_name'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      country: fd.get('country')
    };
    const api = (process.env.NEXT_PUBLIC_API_URL||'') + '/api/supplier/register';
    const res = await fetch(api, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body)});
    const j = await res.json();
    setStatus(j.success ? 'Registered — we will contact you' : 'Error registering');
  }
  return (
    <main style={{padding:40,fontFamily:'Arial'}}>
      <h1>Supplier Registration</h1>
      <form onSubmit={submit} style={{maxWidth:600}}>
        <div><label>Company name<br/><input name="company_name" required/></label></div>
        <div><label>Contact name<br/><input name="contact_name"/></label></div>
        <div><label>Email<br/><input name="email" type="email" required/></label></div>
        <div><label>Phone<br/><input name="phone"/></label></div>
        <div><label>Country<br/><input name="country"/></label></div>
        <div><button type="submit">Register</button></div>
      </form>
      {status && <p>{status}</p>}
    </main>
  )
}
