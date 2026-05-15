import './style.css'

document.querySelector('#app').innerHTML = `
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
`