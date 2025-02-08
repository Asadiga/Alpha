
document.addEventListener('DOMContentLoaded', () => {
  const profile = document.querySelector('.profile');
  profile.style.opacity = '0';
  profile.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    profile.style.transition = 'all 0.8s ease';
    profile.style.opacity = '1';
    profile.style.transform = 'translateY(0)';
  }, 100);
});
