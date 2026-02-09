document.addEventListener('DOMContentLoaded', () => {
    console.log("Max Mena's Personal Test Page Loaded Successfully.");
    
    // Simple interaction: highlight tech stack on hover
    const techSection = document.querySelector('#tech-stack');
    techSection.addEventListener('mouseover', () => {
        techSection.style.backgroundColor = '#e8f4fd';
    });
    techSection.addEventListener('mouseout', () => {
        techSection.style.backgroundColor = 'transparent';
    });
});
