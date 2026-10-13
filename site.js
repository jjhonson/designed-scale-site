document.querySelectorAll('.menu-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const nav=document.querySelector('.nav');
    if(!nav) return;
    const open=nav.style.display==='flex';
    nav.style.display=open?'none':'flex';
    if(!open){
      Object.assign(nav.style,{
        position:'absolute', top:'70px', left:'14px', right:'14px',
        flexDirection:'column', alignItems:'flex-start', gap:'12px',
        padding:'18px', background:'#F4F0E7', border:'1px solid #D5CFC2'
      });
    }
  });
});