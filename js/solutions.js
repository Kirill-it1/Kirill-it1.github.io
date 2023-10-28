const cen_h = () => {
    document.querySelector('.planetarium-center').classList.toggle('planetarium-center_h');
  }
document.querySelector('.planetarium-center__button_top').addEventListener('mouseover', cen_h);
document.querySelector('.planetarium-center__button_top').addEventListener('mouseout', cen_h);