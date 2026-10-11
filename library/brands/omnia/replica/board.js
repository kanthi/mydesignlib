// Fill the four business cards from one template
(function(){
  const tpl=document.getElementById('cardtpl');
  document.querySelectorAll('.card').forEach(c=>c.appendChild(tpl.content.cloneNode(true)));
  // Projective (perspective) mapping of the sign face onto its measured quad -> CSS matrix3d
  function solve(A,b){const n=b.length;for(let i=0;i<n;i++){let m=i;for(let r=i+1;r<n;r++)if(Math.abs(A[r][i])>Math.abs(A[m][i]))m=r;[A[i],A[m]]=[A[m],A[i]];[b[i],b[m]]=[b[m],b[i]];for(let r=i+1;r<n;r++){const f=A[r][i]/A[i][i];for(let c=i;c<n;c++)A[r][c]-=f*A[i][c];b[r]-=f*b[i];}}const x=new Array(n);for(let i=n-1;i>=0;i--){let s=b[i];for(let c=i+1;c<n;c++)s-=A[i][c]*x[c];x[i]=s/A[i][i];}return x;}
  function quad(el){
    const w=el.offsetWidth,h=el.offsetHeight;
    const dst=el.dataset.quad.trim().split(/\s+/).map(p=>p.split(',').map(Number));
    const src=[[0,0],[w,0],[w,h],[0,h]];const A=[],b=[];
    for(let i=0;i<4;i++){const [x,y]=src[i],[u,v]=dst[i];
      A.push([x,y,1,0,0,0,-u*x,-u*y]);b.push(u);A.push([0,0,0,x,y,1,-v*x,-v*y]);b.push(v);}
    const [a,b1,c,d,e,f,g,hh]=solve(A,b);
    el.style.transform=`matrix3d(${a},${d},0,${g},${b1},${e},0,${hh},0,0,1,0,${c},${f},0,1)`;
  }
  document.querySelectorAll('[data-quad]').forEach(quad);
  // responsive: scale the fixed 1024 board to fit
  const wrap=document.getElementById('wrap'),board=document.getElementById('board');
  function fit(){const k=Math.min(1,wrap.clientWidth/1024);board.style.transform=k<1?`scale(${k})`:'';}
  addEventListener('resize',fit);fit();
})();
