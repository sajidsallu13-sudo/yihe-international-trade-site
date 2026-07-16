import {useState} from 'react'
export default function Contact(){
  const [status,setStatus]=useState(null)
  async function submit(e){
    e.preventDefault();
    const form = new FormData(e.target);
    const body = { name: form.get('name'), email: form.get('email'), message: form.get('message') };
    const api = (process.env.NEXT_PUBLIC_API_URL||'')+'/api/contact';
    const res = await fetch(api, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});
    const j = await res.json();
    setStatus(j.success ? 'Message sent' : 'Error');
  }
  return (
    <main style={{padding:40,fontFamily:'Arial'}}>
      <h1>Contact</h1>
      <form onSubmit={submit} style={{maxWidth:500}}>
        <div><label>Name<br/><input name="name" required/></label></div>
        <div><label>Email<br/><input name="email" type="email" required/></label></div>
        <div><label>Message<br/><textarea name="message" rows={6} required/></label></div>
        <div><button type="submit">Send</button></div>
      </form>
      {status && <p>{status}</p>}
    </main>
  )
}
