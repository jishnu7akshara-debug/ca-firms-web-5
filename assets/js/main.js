var S=[
["chart","Income Tax Returns","ITR filing for individuals, firms and companies with tax planning.","tax"],
["receipt","TDS / TCS Compliance","Deduction, payment, quarterly returns and Form 16/16A.","tax"],
["globe","NRI Taxation","Repatriation, DTAA benefits and foreign income advice.","tax"],
["tag","GST Registration &amp; Returns","Registration, GSTR-1/3B, annual returns and reconciliation.","gst"],
["search","GST Audit &amp; Notices","Departmental audits, notice replies and refund claims.","gst"],
["building","Company Incorporation","Pvt Ltd, LLP, OPC, Section 8 and startup registrations.","cs"],
["file","ROC &amp; Secretarial","Annual filings, board minutes, statutory registers and DIN/KYC.","cs"],
["scale","FEMA &amp; RBI Compliance","FDI/ODI reporting, FC-GPR and foreign investment filings.","cs"],
["check","Statutory &amp; Internal Audit","Independent audits, risk review and control assessments.","aud"],
["book","Accounting &amp; Bookkeeping","Monthly books, MIS, payroll and financial statements.","aud"],
["rocket","Startup Advisory","Valuation, fundraising support, ESOPs and due diligence.","adv"],
["briefcase","Business &amp; Tax Planning","Structuring, cash-flow and succession planning.","adv"]];
var g=document.getElementById('svcs');
g.innerHTML=S.map(function(s){return '<div class="card svc" data-c="'+s[3]+'"><div class="ic-box"><svg class="ic" aria-hidden="true"><use href="#i-'+s[0]+'"/></svg></div><h3>'+s[1]+'</h3><p>'+s[2]+'</p></div>'}).join('');
document.getElementById('tabs').onclick=function(e){var b=e.target.closest('.tab');if(!b)return;
 document.querySelectorAll('.tab').forEach(function(t){t.classList.toggle('on',t===b)});
 g.querySelectorAll('.svc').forEach(function(c){c.classList.toggle('hide',b.dataset.c!=='all'&&c.dataset.c!==b.dataset.c)})};
function calc(){var a=+document.getElementById('amt').value||0,r=+document.getElementById('rate').value,m=document.getElementById('mode').value,n,t;
 if(m==='add'){n=a;t=a*(1+r/100)}else{t=a;n=a/(1+r/100)}
 var f=function(x){return '₹'+x.toLocaleString('en-IN',{maximumFractionDigits:2,minimumFractionDigits:2})};
 document.getElementById('rn').textContent=f(n);document.getElementById('rg').textContent=f(t-n);document.getElementById('rt').textContent=f(t)}
['amt','rate','mode'].forEach(function(i){document.getElementById(i).oninput=calc});calc();
var mb=document.getElementById('mb'),nv=document.getElementById('nav');
mb.onclick=function(){var o=nv.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
nv.onclick=function(){nv.classList.remove('open');mb.setAttribute('aria-expanded',false)};
document.addEventListener('keydown',function(e){if(e.key==='Escape'){nv.classList.remove('open');mb.setAttribute('aria-expanded',false)}});
function wire(form,out,req,msg){document.getElementById(form).onsubmit=function(e){e.preventDefault();var o=document.getElementById(out),bad=[];
 req.forEach(function(r){var el=document.getElementById(r[0]),v=el.value.trim(),inv=!v||(el.type==='email'&&!/^\S+@\S+\.\S+$/.test(v))||(el.type==='tel'&&v.replace(/\D/g,'').length<10);el.classList.toggle('bad',inv);el.setAttribute('aria-invalid',inv);if(inv)bad.push(r[1])});
 o.style.display='block';if(bad.length){o.classList.add('err');o.textContent='Please enter '+bad.join(' and ')+'.';return}
 o.classList.remove('err');o.textContent=msg(document.getElementById(req[0][0]).value.trim().split(' ')[0]);this.reset()}}
wire('quick','qok',[['q-name','your name'],['q-phone','a valid phone number']],function(n){return '\u2713 Thank you, '+n+'. We will call you within one business day.'});
wire('cf','cok',[['c-name','your name'],['c-email','a valid email']],function(n){return '\u2713 Thank you, '+n+'. We will get back to you within one business day.'});
var V=['home','about','services','industries','process','tools','due-dates','insights','team','faq','contact'];
var T={about:['About Us','Who we are and what we stand for.'],services:['Our Services','Complete tax, audit, legal and advisory support.'],industries:['Industries','Sector-specific expertise for your business.'],process:['Our Process','A simple, transparent way of working.'],tools:['Tools','Free calculators and reasons to choose us.'],'due-dates':['Due Dates','Stay ahead of statutory deadlines.'],insights:['Insights','Guides and updates from our experts.'],team:['Our Team','Qualified CAs and CSs by your side.'],faq:['FAQ','Answers to common questions.'],contact:['Contact Us','Book a consultation with our team.']};
function route(){var h=location.hash.slice(1);if(V.indexOf(h)<0)h=(h==='calendar')?'due-dates':'home';
 document.querySelectorAll('section[data-v]').forEach(function(s){s.classList.toggle('on',s.dataset.v.split(' ').indexOf(h)>-1)});
 document.querySelectorAll('nav a').forEach(function(a){a.classList.toggle('cur',a.getAttribute('href')==='#'+h)});
 var bt=document.getElementById('bt');if(bt&&T[h]){bt.textContent=T[h][0];document.getElementById('bs').textContent=T[h][1]}
 document.title=(T[h]?T[h][0]+' \u2014 ':'')+'Mehta & Associates \u2014 Chartered Accountants, CS & Tax Advisors';
 window.scrollTo(0,0)}
window.addEventListener('hashchange',route);route();
