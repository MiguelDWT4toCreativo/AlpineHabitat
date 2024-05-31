import simg from '../images/services/icon1.png'
import sSimg1 from '../images/service-single/img-1.jpg'

import sSingleimg1 from '../images/service-single/2.jpg'
import sSingleimg2 from '../images/service-single/3.jpg'

const Services = [
    {
      Id: '1',
      sImg: simg,
      sSimg: sSimg1,
      sTitle: '¡Gana un Air Fryer "Masterchef by Hukën"!',
      slug: 'win-air-fryer',
      description: (
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ textAlign: 'center' }}>¡Gana un Air Fryer "Masterchef by Hukën"!</h2>
          <a href="https://alpinehabitat.com.mx/form.html" className="theme-btn">
            Participar Ahora
          </a>
        </div>
      ),
      ssImg1: sSingleimg1,
      ssImg2: sSingleimg2,
    }
    // ... Aquí puedes agregar más servicios con la misma estructura si es necesario.
  ];
  
  export default Services;
  