import { projectsData } from './projectsData.js';

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = '';

    const filtered = filter === 'all' 
        ? projectsData 
        : projectsData.filter(item => item.category === filter);

    filtered.forEach(project => {
        const card = document.createElement('div');
        card.style.cssText = "background: rgba(255, 255, 255, 0.05); border-radius: 6px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1); transition: transform 0.2s, border-color 0.2s;";
        
        // 悬停微动效
        card.onmouseenter = () => { card.style.transform = "translateY(-4px)"; card.style.borderColor = "#00b3ba"; };
        card.onmouseleave = () => { card.style.transform = "translateY(0)"; card.style.borderColor = "rgba(255, 255, 255, 0.1)"; };

        const badgeHtml = project.badge 
            ? `<span style="background: #00b3ba; color: #fff; padding: 1px 6px; font-size: 10px; border-radius: 10px; margin-left: 6px; vertical-align: middle;">${project.badge}</span>` 
            : '';

        card.innerHTML = `
            <img src="${project.img}" alt="${project.title}" style="width: 100%; height: 140px; object-fit: cover; border-bottom: 1px solid rgba(255,255,255,0.1);">
            <div style="padding: 14px;">
                <h3 style="color: #fff; font-size: 15px; margin-bottom: 6px; font-weight: 600;">${project.title} ${badgeHtml}</h3>
                <p style="color: #aaa; font-size: 12px; margin-bottom: 12px; line-height: 1.4; height: 32px; overflow: hidden;">${project.desc}</p>
                <a href="${project.url}" target="_blank" style="display: block; text-align: center; background: rgba(0, 179, 186, 0.2); color: #00b3ba; border: 1px solid #00b3ba; padding: 5px 0; border-radius: 4px; text-decoration: none; font-size: 12px; transition: background 0.2s, color 0.2s;" onmouseover="this.style.background='#00b3ba';this.style.color='#fff'" onmouseout="this.style.background='rgba(0, 179, 186, 0.2)';this.style.color='#00b3ba'">Enter</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderProjects('all');

    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            buttons.forEach(b => {
                b.style.background = 'rgba(255,255,255,0.1)';
                b.classList.remove('active');
            });
            e.target.style.background = '#00b3ba';
            e.target.classList.add('active');
            
            const category = e.target.getAttribute('data-category');
            renderProjects(category);
        });
    });
});