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

/*
 * Cloudflare Web Analytics.
 * Visit ?analytics=off once per browser to exclude your own traffic.
 * Visit ?analytics=on to resume measurement.
 */
(() => {
  const optOutKey = 'designedscale.analytics.optOut';
  const url = new URL(window.location.href);
  const selection = url.searchParams.get('analytics');
  if (selection === 'off' || selection === 'on') {
    try {
      localStorage.setItem(optOutKey, selection === 'off' ? '1' : '0');
    } catch {
      // Storage may be unavailable; keep the site working.
    }
    url.searchParams.delete('analytics');
    window.history.replaceState(null, '', url.pathname + url.search + url.hash);
  }

  try {
    if (localStorage.getItem(optOutKey) === '1') return;
  } catch {
    // If storage is unavailable, analytics remains enabled.
  }

  const beacon = document.createElement('script');
  beacon.type = 'module';
  beacon.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  beacon.setAttribute('data-cf-beacon', '{"token":"b3d0a5a038f64e6d99b6f5950b8c9e3d"}');
  document.head.appendChild(beacon);
})();
