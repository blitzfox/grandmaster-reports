---
layout: layout.njk
title: Chess Game Reports
---

<script>
  // Simple password protection
  (function() {
    // Check if user has already been authenticated
    if (!sessionStorage.getItem('authenticated')) {
      const password = prompt("Please enter the admin password to view the reports list:");
      
      // Change this to your desired password
      if (password === "anant") {
        sessionStorage.setItem('authenticated', 'true');
      } else {
        alert("Incorrect password. Access denied.");
        // Redirect somewhere else or show a blank page
        document.body.innerHTML = "<h1>Access Denied</h1><p>Invalid password provided.</p>";
        return;
      }
    }
  })();
</script>

<div class="home-header">
  <h1>Grandmaster Reports</h1>
  <p>Personalized feedback on the 4 moments that defined your game — powered by Grandmaster AI Agent.</p>
</div>

<div class="reports-list">
  <div class="report-card">
    <h2>Game Report – @DrMihajlo</h2>
    <p>Analysis of 4 critical moments from a recent game</p>
    <p><a href="/drmihajlo/" class="view-report">View Report</a></p>
  </div>

  <div class="report-card">
    <h2>Game Report – @chessvideworld</h2>
    <p>Analysis of 4 critical moments from a recent game</p>
    <p><a href="/chessvideworld/" class="view-report">View Report</a></p>
  </div>
  
  <div class="report-card">
    <h2>Game Report – @alientcp</h2>
    <p>Analysis of 4 critical moments from a recent game</p>
    <p><a href="/alientcp/" class="view-report">View Report</a></p>
  </div>
</div> 