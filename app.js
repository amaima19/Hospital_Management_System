/* ===== APP JAVASCRIPT ===== */

'use strict';

// ─── DATA ──────────────────────────────────────────────────
const PATIENTS = [
  { id:'P-2841', name:'James Anderson', age:54, gender:'M', dept:'Cardiology', doctor:'Dr. Sarah Connor', status:'admitted' },
  { id:'P-2842', name:'Emily Watson', age:32, gender:'F', dept:'Pediatrics', doctor:'Dr. Anna Smith', status:'outpatient' },
  { id:'P-2843', name:'Robert Kim', age:68, gender:'M', dept:'Neurology', doctor:'Dr. Mark Chen', status:'admitted' },
  { id:'P-2844', name:'Sophia Martinez', age:45, gender:'F', dept:'Orthopedics', doctor:'Dr. Lisa Park', status:'discharged' },
  { id:'P-2845', name:'Daniel Lee', age:29, gender:'M', dept:'General Surgery', doctor:'Dr. James Wilson', status:'admitted' },
  { id:'P-2846', name:'Olivia Brown', age:61, gender:'F', dept:'Cardiology', doctor:'Dr. Sarah Connor', status:'outpatient' },
  { id:'P-2847', name:'John Doe', age:38, gender:'M', dept:'Neurology', doctor:'Dr. Mark Chen', status:'admitted' },
  { id:'P-2848', name:'Ava Johnson', age:22, gender:'F', dept:'Pediatrics', doctor:'Dr. Anna Smith', status:'discharged' },
  { id:'P-2849', name:'Michael Smith', age:75, gender:'M', dept:'Cardiology', doctor:'Dr. Sarah Connor', status:'admitted' },
  { id:'P-2850', name:'Isabella Garcia', age:41, gender:'F', dept:'Orthopedics', doctor:'Dr.Lisa Park', status:'outpatient' },
  { id:'P-2851', name:'William Davis', age:33, gender:'M', dept:'General Surgery', doctor:'Dr. James Wilson', status:'admitted' },
  { id:'P-2852', name:'Mia Wilson', age:56, gender:'F', dept:'Neurology', doctor:'Dr. Mark Chen', status:'discharged' },
];

const DOCTORS = [
  { name:'Dr. Sarah Connor', spec:'Cardiology', exp:'15 Years', rating:4.9, patients:342, surgeries:89, color:'#0ea5e9', initials:'SC' },
  { name:'Dr. Mark Chen', spec:'Neurology', exp:'12 Years', rating:4.8, patients:287, surgeries:124, color:'#8b5cf6', initials:'MC' },
  { name:'Dr. Lisa Park', spec:'Orthopedics', exp:'10 Years', rating:4.7, patients:256, surgeries:178, color:'#10b981', initials:'LP' },
  { name:'Dr. James Wilson', spec:'General Surgery', exp:'18 Years', rating:4.9, patients:412, surgeries:356, color:'#f59e0b', initials:'JW' },
  { name:'Dr. Anna Smith', spec:'Pediatrics', exp:'8 Years', rating:4.6, patients:520, surgeries:0, color:'#ef4444', initials:'AS' },
  { name:'Dr. Robert Hayes', spec:'Radiology', exp:'14 Years', rating:4.8, patients:198, surgeries:0, color:'#06b6d4', initials:'RH' },
  { name:'Dr. Emily Torres', spec:'Oncology', exp:'11 Years', rating:4.7, patients:165, surgeries:67, color:'#6366f1', initials:'ET' },
  { name:'Dr. Kevin Patel', spec:'Emergency Medicine', exp:'9 Years', rating:4.9, patients:634, surgeries:145, color:'#ec4899', initials:'KP' },
];

const APPOINTMENTS = [
  { patient:'John Doe', doctor:'Dr. Sarah Connor', dept:'Cardiology', time:'09:00 AM', date:'Today', type:'Consultation', status:'today' },
  { patient:'Emily Watson', doctor:'Dr. Anna Smith', dept:'Pediatrics', time:'11:30 AM', date:'Today', type:'Follow-up', status:'today' },
  { patient:'Robert Kim', doctor:'Dr. Mark Chen', dept:'Neurology', time:'02:00 PM', date:'Today', type:'Checkup', status:'today' },
  { patient:'Sophia Martinez', doctor:'Dr. Lisa Park', dept:'Orthopedics', time:'10:00 AM', date:'Feb 27', type:'Consultation', status:'upcoming' },
  { patient:'Daniel Lee', doctor:'Dr. James Wilson', dept:'Surgery', time:'03:30 PM', date:'Feb 27', type:'Emergency', status:'upcoming' },
  { patient:'Olivia Brown', doctor:'Dr. Sarah Connor', dept:'Cardiology', time:'08:30 AM', date:'Feb 28', type:'Follow-up', status:'upcoming' },
  { patient:'Michael Smith', doctor:'Dr. Robert Hayes', dept:'Radiology', time:'01:00 PM', date:'Feb 25', type:'Checkup', status:'cancelled' },
];

const DEPARTMENTS = [
  { icon:'❤️', name:'Cardiology', desc:'Heart and cardiovascular diseases with state-of-the-art cardiac care units and advanced diagnostic equipment.', doctors:12, beds:48, color:'#ef4444' },
  { icon:'🧠', name:'Neurology', desc:'Brain and nervous system disorders with cutting-edge neuroimaging and specialized treatment protocols.', doctors:8, beds:32, color:'#8b5cf6' },
  { icon:'🦴', name:'Orthopedics', desc:'Bone, joint and muscle conditions with expert surgical and rehabilitation care teams.', doctors:10, beds:40, color:'#0ea5e9' },
  { icon:'👶', name:'Pediatrics', desc:'Comprehensive child healthcare from newborns to adolescents in a child-friendly environment.', doctors:14, beds:60, color:'#10b981' },
  { icon:'🔪', name:'General Surgery', desc:'Wide range of surgical procedures with minimally invasive techniques and rapid recovery programs.', doctors:9, beds:36, color:'#f59e0b' },
  { icon:'🩻', name:'Radiology', desc:'Advanced imaging services including MRI, CT scans, X-rays and ultrasound diagnostics.', doctors:6, beds:20, color:'#06b6d4' },
  { icon:'🦠', name:'Oncology', desc:'Comprehensive cancer treatment combining surgery, chemotherapy, radiation and immunotherapy.', doctors:11, beds:44, color:'#6366f1' },
  { icon:'🚨', name:'Emergency Dept.', desc:'24/7 emergency care with rapid response teams and critical care capabilities.', doctors:18, beds:30, color:'#ec4899' },
  { icon:'🫁', name:'Pulmonology', desc:'Respiratory system disorders with advanced ventilator support and pulmonary rehabilitation.', doctors:7, beds:28, color:'#34d399' },
];

const MEDICINES = [
  { name:'Amoxicillin 500mg', category:'Antibiotic', stock:850, price:'$12.50', expiry:'Dec 2026', status:'high' },
  { name:'Metformin 1000mg', category:'Antidiabetic', stock:1200, price:'$8.75', expiry:'Mar 2027', status:'high' },
  { name:'Lisinopril 10mg', category:'Antihypertensive', stock:45, price:'$15.00', expiry:'Jun 2026', status:'low' },
  { name:'Atorvastatin 20mg', category:'Statin', stock:320, price:'$22.00', expiry:'Aug 2026', status:'medium' },
  { name:'Omeprazole 20mg', category:'Antacid', stock:78, price:'$9.00', expiry:'Nov 2026', status:'medium' },
  { name:'Ibuprofen 400mg', category:'NSAID', stock:12, price:'$4.50', expiry:'Apr 2026', status:'low' },
  { name:'Paracetamol 500mg', category:'Analgesic', stock:2400, price:'$3.25', expiry:'Jan 2028', status:'high' },
  { name:'Azithromycin 250mg', category:'Antibiotic', stock:180, price:'$18.00', expiry:'Sep 2026', status:'medium' },
];

// ─── STATE ─────────────────────────────────────────────────
let patientPage = 1, patientFilter = '', patientSearch = '';
const PAGE_SIZE = 5;

// ─── UTILITY FUNCTIONS ─────────────────────────────────────
function showToast(msg, type = 'info') {
  const icons = { success:'✅', error:'❌', info:'ℹ️', warning:'⚠️' };
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span>${msg}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

function openModal(html) {
  document.getElementById('modal-content').innerHTML = html;
  document.getElementById('modal-overlay').classList.add('open');
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
}

function addRipple(btn) {
  btn.addEventListener('click', function(e) {
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ripple.className = 'ripple-circle';
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
}

function animateCounter(el, target, duration = 1800) {
  let start = 0, startTime = null;
  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// ─── PARTICLES ─────────────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');
  let particles = [], W, H;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? '14,165,233' : '99,102,241',
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color},${p.opacity})`;
      ctx.fill();
    });

    // Draw connecting lines
    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(14,165,233,${0.08 * (1 - d / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });
    requestAnimationFrame(draw);
  }
  draw();
}

// ─── HERO CHART ────────────────────────────────────────────
function drawHeroChart() {
  const canvas = document.getElementById('heroChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = [40, 55, 42, 68, 58, 72, 65, 80, 70, 88, 75, 92];
  const W = canvas.width, H = canvas.height;
  const max = Math.max(...data), min = Math.min(...data);
  const xStep = W / (data.length - 1);

  ctx.clearRect(0, 0, W, H);

  const gradient = ctx.createLinearGradient(0, 0, 0, H);
  gradient.addColorStop(0, 'rgba(14,165,233,0.3)');
  gradient.addColorStop(1, 'rgba(14,165,233,0)');

  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * xStep, y = H - ((v - min) / (max - min)) * (H - 10) - 5;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  const lastX = (data.length - 1) * xStep;
  const lastY = H - ((data[data.length-1]-min)/(max-min))*(H-10)-5;
  ctx.lineTo(lastX, H); ctx.lineTo(0, H); ctx.closePath();
  ctx.fillStyle = gradient; ctx.fill();

  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * xStep, y = H - ((v - min) / (max - min)) * (H - 10) - 5;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = 'rgba(14,165,233,0.9)'; ctx.lineWidth = 2;
  ctx.stroke();
}

// ─── MINI KPI CHARTS ───────────────────────────────────────
function drawMiniChart(canvasId, color) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = Array.from({length:8}, () => Math.random() * 60 + 20);
  const W = canvas.width, H = canvas.height;
  const max = Math.max(...data), min = Math.min(...data);
  const xStep = W / (data.length - 1);

  ctx.clearRect(0, 0, W, H);
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * xStep, y = H - ((v - min) / (max - min)) * H;
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  });
  ctx.strokeStyle = color; ctx.lineWidth = 2; ctx.stroke();
}

// ─── ADMISSIONS CHART ──────────────────────────────────────
function drawAdmissionsChart(period = 'week') {
  const canvas = document.getElementById('admissionsChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const datasets = {
    week: { labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], data:[42,65,38,72,55,48,60], data2:[28,40,30,50,42,35,45] },
    month: { labels:['Wk1','Wk2','Wk3','Wk4'], data:[280,320,295,380], data2:[200,240,210,290] },
    year: { labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'], data:[850,920,780,1100,1050,980,1200,1150,1020,1180,1100,1350], data2:[640,720,600,880,820,760,940,900,800,920,860,1050] },
  };

  const { labels, data, data2 } = datasets[period];
  const rect = canvas.getBoundingClientRect();
  canvas.width = canvas.parentElement.offsetWidth - 48;
  canvas.height = 250;
  const W = canvas.width, H = canvas.height;
  const padL = 40, padR = 20, padT = 20, padB = 30;
  const chartW = W - padL - padR, chartH = H - padT - padB;
  const max = Math.max(...data, ...data2) * 1.15;

  ctx.clearRect(0, 0, W, H);

  // Grid lines
  ctx.strokeStyle = 'rgba(255,255,255,0.05)'; ctx.lineWidth = 1;
  for (let i = 0; i <= 5; i++) {
    const y = padT + (chartH / 5) * i;
    ctx.beginPath(); ctx.moveTo(padL, y); ctx.lineTo(padL + chartW, y); ctx.stroke();
    ctx.fillStyle = 'rgba(148,163,184,0.5)'; ctx.font = '10px Inter'; ctx.textAlign = 'right';
    ctx.fillText(Math.round(max - (max/5)*i), padL - 6, y + 4);
  }

  const barW = chartW / labels.length * 0.3;
  const groupW = chartW / labels.length;

  labels.forEach((lbl, i) => {
    const x = padL + i * groupW;
    const barH1 = (data[i] / max) * chartH;
    const barH2 = (data2[i] / max) * chartH;

    // Bar 1
    const g1 = ctx.createLinearGradient(0, padT + chartH - barH1, 0, padT + chartH);
    g1.addColorStop(0, 'rgba(14,165,233,0.9)'); g1.addColorStop(1,'rgba(14,165,233,0.3)');
    ctx.fillStyle = g1;
    const rx = 4;
    const bx1 = x + groupW * 0.1;
    roundRect(ctx, bx1, padT + chartH - barH1, barW, barH1, [rx,rx,0,0]);
    ctx.fill();

    // Bar 2
    const g2 = ctx.createLinearGradient(0, padT + chartH - barH2, 0, padT + chartH);
    g2.addColorStop(0, 'rgba(99,102,241,0.9)'); g2.addColorStop(1,'rgba(99,102,241,0.3)');
    ctx.fillStyle = g2;
    const bx2 = x + groupW * 0.1 + barW + 4;
    roundRect(ctx, bx2, padT + chartH - barH2, barW, barH2, [rx,rx,0,0]);
    ctx.fill();

    // Labels
    ctx.fillStyle = 'rgba(148,163,184,0.8)'; ctx.font = '10px Inter'; ctx.textAlign = 'center';
    ctx.fillText(lbl, x + groupW * 0.5, H - 8);
  });

  // Legend
  ctx.fillStyle = 'rgba(14,165,233,0.9)'; ctx.fillRect(padL, 4, 10, 10);
  ctx.fillStyle = '#94a3b8'; ctx.font = '11px Inter'; ctx.textAlign = 'left';
  ctx.fillText('Admitted', padL + 14, 13);
  ctx.fillStyle = 'rgba(99,102,241,0.9)'; ctx.fillRect(padL + 90, 4, 10, 10);
  ctx.fillStyle = '#94a3b8'; ctx.fillText('Discharged', padL + 104, 13);
}

function roundRect(ctx, x, y, w, h, r) {
  if (!Array.isArray(r)) r = [r,r,r,r];
  ctx.beginPath();
  ctx.moveTo(x + r[0], y);
  ctx.lineTo(x + w - r[1], y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r[1]);
  ctx.lineTo(x + w, y + h - r[2]);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r[2], y + h);
  ctx.lineTo(x + r[3], y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r[3]);
  ctx.lineTo(x, y + r[0]);
  ctx.quadraticCurveTo(x, y, x + r[0], y);
  ctx.closePath();
}

// ─── DEPT DONUT CHART ──────────────────────────────────────
function drawDeptChart() {
  const canvas = document.getElementById('deptChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = [
    { label:'Cardiology', value:22, color:'#ef4444' },
    { label:'Neurology', value:15, color:'#8b5cf6' },
    { label:'Orthopedics', value:18, color:'#0ea5e9' },
    { label:'Pediatrics', value:25, color:'#10b981' },
    { label:'Surgery', value:12, color:'#f59e0b' },
    { label:'Others', value:8, color:'#06b6d4' },
  ];

  const size = 200;
  canvas.width = size; canvas.height = size;
  const cx = size/2, cy = size/2, radius = 80, innerR = 50;
  const total = data.reduce((s,d) => s + d.value, 0);
  let startAngle = -Math.PI/2;

  ctx.clearRect(0, 0, size, size);

  data.forEach(d => {
    const angle = (d.value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, startAngle + angle);
    ctx.closePath();
    ctx.fillStyle = d.color;
    ctx.fill();
    startAngle += angle;
  });

  // Donut hole
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
  ctx.fillStyle = '#060b16';
  ctx.fill();

  // Center text
  ctx.fillStyle = '#f0f6ff'; ctx.font = 'bold 18px Outfit'; ctx.textAlign = 'center';
  ctx.fillText(total + '%', cx, cy - 2);
  ctx.fillStyle = '#64748b'; ctx.font = '10px Inter';
  ctx.fillText('Occupied', cx, cy + 14);

  // Legend
  const legend = document.getElementById('deptLegend');
  if (legend) {
    legend.innerHTML = data.map(d => `
      <div class="chart-legend-item">
        <div class="chart-legend-dot" style="background:${d.color}"></div>
        <span>${d.label} (${d.value}%)</span>
      </div>
    `).join('');
  }
}

// ─── RENDER PATIENTS TABLE ─────────────────────────────────
function renderPatients() {
  let filtered = PATIENTS.filter(p => {
    const matchSearch = !patientSearch || p.name.toLowerCase().includes(patientSearch) || p.id.toLowerCase().includes(patientSearch);
    const matchFilter = !patientFilter || p.status === patientFilter;
    return matchSearch && matchFilter;
  });

  const total = filtered.length;
  const totalPages = Math.ceil(total / PAGE_SIZE);
  patientPage = Math.min(patientPage, Math.max(1, totalPages));
  const start = (patientPage - 1) * PAGE_SIZE;
  const paged = filtered.slice(start, start + PAGE_SIZE);

  const tbody = document.getElementById('patients-tbody');
  if (!tbody) return;

  tbody.innerHTML = paged.map((p, i) => `
    <tr class="row-enter" style="animation-delay:${i*0.06}s">
      <td><span style="color:var(--blue);font-weight:600">${p.id}</span></td>
      <td>
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--indigo));display:flex;align-items:center;justify-content:center;font-size:0.75rem;font-weight:700">${p.name.split(' ').map(n=>n[0]).join('')}</div>
          ${p.name}
        </div>
      </td>
      <td>${p.age} / ${p.gender}</td>
      <td>${p.dept}</td>
      <td>${p.doctor}</td>
      <td><span class="status-pill pill-${p.status}">${p.status.charAt(0).toUpperCase()+p.status.slice(1)}</span></td>
      <td>
        <div class="action-btns">
          <button class="action-btn" title="View" onclick="viewPatient('${p.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
          <button class="action-btn" title="Edit" onclick="editPatient('${p.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="action-btn delete" title="Delete" onclick="deletePatient('${p.id}')">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6m4-6v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');

  document.getElementById('patient-page-info').textContent = `Page ${patientPage} of ${Math.max(1,totalPages)}`;
}

window.viewPatient = function(id) {
  const p = PATIENTS.find(x => x.id === id);
  if (!p) return;
  openModal(`
    <div class="modal-title">🏥 Patient Details</div>
    <div class="modal-info-grid">
      <div class="modal-info-item"><label>Patient ID</label><span style="color:var(--blue)">${p.id}</span></div>
      <div class="modal-info-item"><label>Name</label><span>${p.name}</span></div>
      <div class="modal-info-item"><label>Age</label><span>${p.age} years</span></div>
      <div class="modal-info-item"><label>Gender</label><span>${p.gender === 'M' ? 'Male' : 'Female'}</span></div>
      <div class="modal-info-item"><label>Department</label><span>${p.dept}</span></div>
      <div class="modal-info-item"><label>Doctor</label><span>${p.doctor}</span></div>
      <div class="modal-info-item"><label>Status</label><span class="status-pill pill-${p.status}">${p.status}</span></div>
      <div class="modal-info-item"><label>Blood Type</label><span>A+</span></div>
    </div>
    <div style="margin-top:20px;">
      <button class="btn-primary" style="width:100%;justify-content:center" onclick="closeModal()">Close</button>
    </div>
  `);
  showToast(`Viewing ${p.name}'s details`, 'info');
};

window.editPatient = function(id) {
  const p = PATIENTS.find(x => x.id === id);
  showToast(`Editing patient ${p?.name}...`, 'info');
};

window.deletePatient = function(id) {
  const idx = PATIENTS.findIndex(x => x.id === id);
  const p = PATIENTS[idx];
  openModal(`
    <div class="modal-title">⚠️ Confirm Delete</div>
    <p style="color:var(--text-secondary);margin-bottom:20px">Are you sure you want to remove <strong>${p.name}</strong> from the system?</p>
    <div style="display:flex;gap:12px">
      <button class="btn-secondary" style="flex:1" onclick="closeModal()">Cancel</button>
      <button class="btn-primary" style="flex:1;background:linear-gradient(135deg,#ef4444,#dc2626);justify-content:center" onclick="confirmDelete('${id}')">Delete</button>
    </div>
  `);
};

window.confirmDelete = function(id) {
  const idx = PATIENTS.findIndex(x => x.id === id);
  if (idx > -1) { PATIENTS.splice(idx, 1); renderPatients(); }
  closeModal();
  showToast('Patient removed successfully', 'success');
};

// ─── RENDER DOCTORS ────────────────────────────────────────
function renderDoctors() {
  const grid = document.getElementById('doctors-grid');
  if (!grid) return;
  grid.innerHTML = DOCTORS.map((d, i) => `
    <div class="doctor-card scroll-reveal" style="transition-delay:${i*0.07}s" onclick="viewDoctor(${i})">
      <div class="doctor-avatar" style="background:linear-gradient(135deg,${d.color},${d.color}88)">${d.initials}</div>
      <div class="doctor-name">${d.name}</div>
      <div class="doctor-spec">${d.spec}</div>
      <div class="doctor-exp">Experience: ${d.exp}</div>
      <div class="doctor-rating">⭐ ${d.rating} <span style="color:var(--text-muted);font-weight:400">(${Math.floor(d.patients * 0.8)} reviews)</span></div>
      <div class="doctor-stats">
        <div class="doc-stat"><div class="doc-stat-num">${d.patients}</div><div class="doc-stat-lbl">Patients</div></div>
        <div class="doc-stat"><div class="doc-stat-num">${d.surgeries}</div><div class="doc-stat-lbl">Surgeries</div></div>
      </div>
      <button class="btn-book" onclick="event.stopPropagation();bookDoctor('${d.name}')">Book Appointment</button>
    </div>
  `).join('');
}

window.viewDoctor = function(i) {
  const d = DOCTORS[i];
  openModal(`
    <div style="text-align:center;margin-bottom:20px">
      <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,${d.color},${d.color}88);display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:800;margin:0 auto 12px">${d.initials}</div>
      <div class="modal-title" style="margin:0 0 4px">${d.name}</div>
      <div style="color:${d.color};font-weight:600;font-size:0.9rem">${d.spec}</div>
    </div>
    <div class="modal-info-grid">
      <div class="modal-info-item"><label>Experience</label><span>${d.exp}</span></div>
      <div class="modal-info-item"><label>Rating</label><span>⭐ ${d.rating}</span></div>
      <div class="modal-info-item"><label>Total Patients</label><span>${d.patients}</span></div>
      <div class="modal-info-item"><label>Surgeries</label><span>${d.surgeries}</span></div>
    </div>
    <button class="btn-primary" style="width:100%;margin-top:20px;justify-content:center" onclick="bookDoctor('${d.name}');closeModal()">
      Book Appointment
    </button>
  `);
};

window.bookDoctor = function(name) {
  const apptDoc = document.getElementById('appt-doctor');
  if (apptDoc) {
    const opt = [...apptDoc.options].find(o => o.value.includes(name.split(' ').slice(-1)[0]));
    if (opt) apptDoc.value = opt.value;
  }
  document.getElementById('appointments')?.scrollIntoView({ behavior: 'smooth' });
  showToast(`Booking appointment with ${name}`, 'info');
};

// ─── RENDER APPOINTMENTS ───────────────────────────────────
function renderAppointments() {
  const list = document.getElementById('appointments-list');
  if (!list) return;
  list.innerHTML = APPOINTMENTS.map((a, i) => `
    <div class="appt-list-item ${a.status} scroll-reveal" style="transition-delay:${i*0.06}s">
      <div class="appt-time-block">
        <div class="time">${a.time}</div>
        <div class="date-sm">${a.date}</div>
      </div>
      <div class="appt-info">
        <strong>${a.patient}</strong>
        <span>${a.doctor} · ${a.dept}</span>
      </div>
      <span class="appt-type-tag">${a.type}</span>
      <div class="appt-actions">
        <button class="appt-action-btn" title="Confirm" onclick="handleApptAction('confirm',${i})">✓</button>
        <button class="appt-action-btn" title="Reschedule" onclick="handleApptAction('reschedule',${i})">↺</button>
        <button class="appt-action-btn" title="Cancel" onclick="handleApptAction('cancel',${i})">✕</button>
      </div>
    </div>
  `).join('');
  observeScrollReveal();
}

window.handleApptAction = function(action, i) {
  const a = APPOINTMENTS[i];
  const msgs = {
    confirm: `Appointment confirmed for ${a.patient}`,
    reschedule: `Rescheduling ${a.patient}'s appointment...`,
    cancel: `Appointment for ${a.patient} cancelled`,
  };
  const types = { confirm:'success', reschedule:'info', cancel:'warning' };
  showToast(msgs[action], types[action]);
  if (action === 'cancel') { APPOINTMENTS[i].status = 'cancelled'; renderAppointments(); }
};

// ─── RENDER DEPARTMENTS ────────────────────────────────────
function renderDepartments() {
  const grid = document.getElementById('departments-grid');
  if (!grid) return;
  grid.innerHTML = DEPARTMENTS.map((d, i) => `
    <div class="dept-card scroll-reveal" style="transition-delay:${i*0.07}s;--dept-color:${d.color}" onclick="showDeptInfo('${d.name}')">
      <div class="dept-icon">${d.icon}</div>
      <div class="dept-name">${d.name}</div>
      <div class="dept-desc">${d.desc}</div>
      <div class="dept-stats">
        <div class="dept-stat">
          <div class="dept-stat-num" style="color:${d.color}">${d.doctors}</div>
          <div class="dept-stat-lbl">Doctors</div>
        </div>
        <div class="dept-stat">
          <div class="dept-stat-num" style="color:${d.color}">${d.beds}</div>
          <div class="dept-stat-lbl">Beds</div>
        </div>
      </div>
      <div style="height:4px;background:${d.color};border-radius:0 0 4px 4px;position:absolute;bottom:0;left:0;right:0;opacity:0;transition:opacity 0.3s" class="dept-bar"></div>
    </div>
  `).join('');

  document.querySelectorAll('.dept-card').forEach(c => {
    c.addEventListener('mouseenter', () => c.querySelector('.dept-bar').style.opacity = '1');
    c.addEventListener('mouseleave', () => c.querySelector('.dept-bar').style.opacity = '0');
  });
  observeScrollReveal();
}

window.showDeptInfo = function(name) {
  const d = DEPARTMENTS.find(x => x.name === name);
  showToast(`${d.icon} ${d.name} Department selected`, 'info');
};

// ─── RENDER PHARMACY TABLE ─────────────────────────────────
function renderPharmacy(search = '') {
  const tbody = document.getElementById('pharmacy-tbody');
  if (!tbody) return;
  const filtered = MEDICINES.filter(m => !search || m.name.toLowerCase().includes(search));
  tbody.innerHTML = filtered.map((m, i) => `
    <tr class="row-enter" style="animation-delay:${i*0.05}s">
      <td><strong>${m.name}</strong></td>
      <td>${m.category}</td>
      <td>${m.stock.toLocaleString()}</td>
      <td>${m.price}</td>
      <td>${m.expiry}</td>
      <td><span class="status-pill pill-${m.status}">${m.status.charAt(0).toUpperCase()+m.status.slice(1)} Stock</span></td>
    </tr>
  `).join('');
}

// ─── SCROLL REVEAL ─────────────────────────────────────────
function observeScrollReveal() {
  const els = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-scale, .stagger-children');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(el => observer.observe(el));
}

// ─── NAVBAR SCROLL ─────────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const links = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // Active link on scroll
    const sections = ['home','features','dashboard','patients','doctors','appointments','departments','pharmacy'];
    let active = 'home';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) active = id;
    });
    links.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === `#${active}`);
    });
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger?.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = mobileMenu.classList.contains('open') ? 'rotate(45deg) translate(5px,5px)' : '';
    spans[1].style.opacity = mobileMenu.classList.contains('open') ? '0' : '1';
    spans[2].style.transform = mobileMenu.classList.contains('open') ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });

  // Login button
  document.getElementById('login-btn')?.addEventListener('click', () => {
    openModal(`
      <div class="modal-title">🔐 Login to MediCore HMS</div>
      <div class="appointment-form" style="display:flex;flex-direction:column;gap:14px">
        <div class="form-group">
          <label>Email</label>
          <input type="email" placeholder="admin@medicore.com" id="login-email">
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" id="login-pass">
        </div>
        <button class="btn-primary" style="justify-content:center;margin-top:4px" id="do-login-btn">Login</button>
      </div>
    `);
    setTimeout(() => {
      document.getElementById('do-login-btn')?.addEventListener('click', () => {
        closeModal();
        showToast('Welcome back, Admin! 👋', 'success');
      });
    }, 100);
  });

  document.getElementById('notif-btn')?.addEventListener('click', () => {
    openModal(`
      <div class="modal-title">🔔 Notifications</div>
      <div style="display:flex;flex-direction:column;gap:12px">
        <div style="padding:12px;background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);border-radius:10px">
          <div style="font-weight:600;color:#ef4444">🚨 Emergency Alert</div>
          <div style="font-size:0.82rem;color:var(--text-secondary);margin-top:4px">Patient in Room 304 requires immediate attention</div>
        </div>
        <div style="padding:12px;background:var(--bg-card2);border:1px solid var(--border);border-radius:10px">
          <div style="font-weight:600">💊 Low Stock Alert</div>
          <div style="font-size:0.82rem;color:var(--text-secondary);margin-top:4px">Ibuprofen 400mg stock is critically low (12 units)</div>
        </div>
        <div style="padding:12px;background:var(--bg-card2);border:1px solid var(--border);border-radius:10px">
          <div style="font-weight:600">📋 Lab Results Ready</div>
          <div style="font-size:0.82rem;color:var(--text-secondary);margin-top:4px">Patient #P-4521 CBC results are available</div>
        </div>
        <div style="padding:12px;background:var(--bg-card2);border:1px solid var(--border);border-radius:10px">
          <div style="font-weight:600">📅 Appointment Reminder</div>
          <div style="font-size:0.82rem;color:var(--text-secondary);margin-top:4px">Dr. Chen has 3 appointments in the next hour</div>
        </div>
      </div>
    `);
    document.querySelector('.notif-badge').textContent = '0';
  });
}

// ─── BUTTON INTERACTIONS ───────────────────────────────────
function initButtons() {
  // Ripple on all primary buttons
  document.querySelectorAll('.btn-primary, .btn-secondary, .quick-btn, .btn-book, .btn-alert, .btn-login').forEach(addRipple);

  // Hero buttons
  document.getElementById('get-started-btn')?.addEventListener('click', () => {
    document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' });
    showToast('Welcome to MediCore HMS! 🏥', 'success');
  });

  document.getElementById('demo-btn')?.addEventListener('click', () => {
    openModal(`
      <div class="modal-title">▶️ Product Demo</div>
      <div style="background:var(--bg-card2);border-radius:12px;padding:60px;text-align:center;margin-bottom:16px">
        <div style="font-size:3rem;margin-bottom:16px">🏥</div>
        <p style="color:var(--text-secondary)">MediCore HMS Demo Video<br><span style="color:var(--text-muted);font-size:0.82rem">Full walkthrough of all features</span></p>
      </div>
      <button class="btn-primary" style="width:100%;justify-content:center" onclick="closeModal()">Close Preview</button>
    `);
  });

  document.getElementById('alert-btn')?.addEventListener('click', () => {
    showToast('🚨 Emergency team dispatched to Room 304!', 'error');
  });

  // Chart filters
  ['week','month','year'].forEach(p => {
    document.getElementById(`filter-${p}`)?.addEventListener('click', function() {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      drawAdmissionsChart(p);
    });
  });

  // Quick Action buttons with animations
  const quickActions = {
    'qa-admit': { msg:'Admitting new patient...', type:'info', modal: admitPatientModal },
    'qa-appt': { msg:'Opening appointment form...', type:'info', scroll:'appointments' },
    'qa-lab': { msg:'Lab test order initiated', type:'success' },
    'qa-rx': { msg:'Opening prescription pad...', type:'info' },
    'qa-report': { msg:'Generating hospital report...', type:'info' },
    'qa-emergency': { msg:'🚨 EMERGENCY PROTOCOL ACTIVATED!', type:'error' },
  };
  Object.entries(quickActions).forEach(([id, cfg]) => {
    document.getElementById(id)?.addEventListener('click', () => {
      if (cfg.scroll) { document.getElementById(cfg.scroll)?.scrollIntoView({ behavior:'smooth' }); }
      if (cfg.modal) { cfg.modal(); } else { showToast(cfg.msg, cfg.type); }
    });
  });

  // Patient search/filter
  document.getElementById('patient-search')?.addEventListener('input', function() {
    patientSearch = this.value.toLowerCase();
    patientPage = 1;
    renderPatients();
  });

  document.getElementById('patient-filter')?.addEventListener('change', function() {
    patientFilter = this.value;
    patientPage = 1;
    renderPatients();
  });

  document.getElementById('prev-page-patients')?.addEventListener('click', () => {
    if (patientPage > 1) { patientPage--; renderPatients(); }
  });
  document.getElementById('next-page-patients')?.addEventListener('click', () => {
    patientPage++;
    renderPatients();
  });

  document.getElementById('add-patient-btn')?.addEventListener('click', () => {
    admitPatientModal();
  });

  // Pharmacy search
  document.getElementById('med-search')?.addEventListener('input', function() {
    renderPharmacy(this.value.toLowerCase());
  });

  document.getElementById('add-medicine-btn')?.addEventListener('click', () => {
    showToast('Add medicine feature coming soon!', 'info');
  });

  // Appointment form
  document.getElementById('appt-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const patient = document.getElementById('appt-patient').value;
    const doctor = document.getElementById('appt-doctor').value;
    const date = document.getElementById('appt-date').value;
    const time = document.getElementById('appt-time').value;
    const type = document.getElementById('appt-type').value;

    if (!patient || !doctor || !date || !time) return showToast('Please fill all required fields', 'warning');

    APPOINTMENTS.unshift({ patient, doctor, dept: doctor.split('—')[1]?.trim() || 'General', time, date: new Date(date).toLocaleDateString('en-US',{month:'short',day:'numeric'}), type: type.charAt(0).toUpperCase()+type.slice(1), status:'upcoming' });
    renderAppointments();
    this.reset();
    showToast(`✅ Appointment booked for ${patient}!`, 'success');
  });

  // Modal close
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-overlay')?.addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  // View all activities
  document.getElementById('view-activities')?.addEventListener('click', () => {
    showToast('Loading full activity log...', 'info');
  });
}

function admitPatientModal() {
  openModal(`
    <div class="modal-title">🏥 Admit New Patient</div>
    <div class="appointment-form" style="display:flex;flex-direction:column;gap:14px">
      <div class="form-group"><label>Full Name</label><input type="text" id="new-p-name" placeholder="Patient full name"></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
        <div class="form-group"><label>Age</label><input type="number" id="new-p-age" placeholder="Age"></div>
        <div class="form-group"><label>Gender</label><select id="new-p-gender"><option value="M">Male</option><option value="F">Female</option></select></div>
      </div>
      <div class="form-group"><label>Department</label>
        <select id="new-p-dept">
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="General Surgery">General Surgery</option>
        </select>
      </div>
      <button class="btn-primary" style="justify-content:center" id="confirm-admit-btn">Admit Patient</button>
    </div>
  `);
  setTimeout(() => {
    document.getElementById('confirm-admit-btn')?.addEventListener('click', () => {
      const name = document.getElementById('new-p-name').value;
      const age = document.getElementById('new-p-age').value;
      const gender = document.getElementById('new-p-gender').value;
      const dept = document.getElementById('new-p-dept').value;
      if (!name || !age) return showToast('Please fill all fields', 'warning');
      const newId = `P-${2853 + PATIENTS.length}`;
      PATIENTS.push({ id: newId, name, age: parseInt(age), gender, dept, doctor:'Dr. James Wilson', status:'admitted' });
      renderPatients();
      closeModal();
      showToast(`✅ ${name} admitted successfully! ID: ${newId}`, 'success');
    });
  }, 100);
}

// ─── COUNTER ANIMATION ─────────────────────────────────────
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        animateCounter(el, parseInt(el.dataset.target));
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => observer.observe(el));
}

// ─── PRELOADER ─────────────────────────────────────────────
function hidePreloader() {
  setTimeout(() => {
    const loader = document.getElementById('preloader');
    loader.classList.add('hidden');
    setTimeout(() => loader.remove(), 600);
  }, 1800);
}

// ─── MAIN INIT ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  hidePreloader();
  initParticles();
  initNavbar();

  renderDoctors();
  renderPatients();
  renderAppointments();
  renderDepartments();
  renderPharmacy();

  setTimeout(() => {
    drawHeroChart();
    drawMiniChart('kpi1Chart', '#0ea5e9');
    drawMiniChart('kpi2Chart', '#8b5cf6');
    drawMiniChart('kpi3Chart', '#10b981');
    drawMiniChart('kpi4Chart', '#f59e0b');
    drawAdmissionsChart('week');
    drawDeptChart();
    initCounters();
    initButtons();
    observeScrollReveal();

    // Add scroll-reveal to section headers
    document.querySelectorAll('.section-header').forEach(el => {
      el.classList.add('scroll-reveal');
    });
    document.querySelectorAll('.feature-card').forEach((el,i) => {
      el.classList.add('scroll-reveal');
      el.style.transitionDelay = `${i*0.08}s`;
    });
    document.querySelectorAll('.kpi-card').forEach((el,i) => {
      el.classList.add('scroll-reveal');
      el.style.transitionDelay = `${i*0.08}s`;
    });
    document.querySelectorAll('.pharma-stat-card').forEach((el,i) => {
      el.classList.add('scroll-reveal');
      el.style.transitionDelay = `${i*0.07}s`;
    });
    observeScrollReveal();
  }, 1900);

  // Window resize redraw
  window.addEventListener('resize', () => {
    drawAdmissionsChart('week');
  });
});
