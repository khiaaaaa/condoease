(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <header class="navbar">
    <h1>CondoEase</h1>

    <nav>
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">Residents</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <section class="hero">
    <div class="hero-content">
      <h2>Smart Condo Management</h2>

      <p>
        Simplify resident services, maintenance requests,
        and condo administration with CondoEase.
      </p>

      <button>Get Started</button>
    </div>
  </section>

  <section class="features">

    <div class="card">
      <h3>Maintenance</h3>
      <p>Residents can submit repair requests online.</p>
    </div>

    <div class="card">
      <h3>Visitor Pass</h3>
      <p>Secure and fast visitor approval system.</p>
    </div>

    <div class="card">
      <h3>Billing</h3>
      <p>Track monthly dues and payment records easily.</p>
    </div>

  </section>
`;