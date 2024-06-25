import {useState, React} from "react";


function Form({send, setSend}){

    const [formData, setFormData] = useState({
        fname: '',
        ftel: '',
        fmail: '',
        fsubject: '',
        fmsg: ''
    });

    // -- Form managment

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        // Manejo de formulario en el servidor

        setSend(true);
        setTimeout(() => {
          setSend(false);
        }, 3000)
        

       

        setFormData({
          fname: '',
          ftel: '',
          fmail: '',
          fsubject: '',
          fmsg: ''
        })

        
        console.log('Formulario enviado:', formData);
    };

    return(
        <form id="contact-form" onSubmit={handleSubmit}>
                  <div id='row-form-c'>
                      <div id="name-form-c-us">
                          <label htmlFor="fname">Nombre: </label>
                          <input 
                              type="text" 
                              id="fname" 
                              name="fname" 
                              placeholder="Ej. Juan Pérez" 
                              value={formData.fname} 
                              onChange={handleChange} 
                              required
                          />
                      </div>
                      <div id="tel-form-c-us">
                          <label htmlFor="ftel">Celular: </label>
                          <input 
                              type="tel" 
                              id="ftel" 
                              name="ftel" 
                              pattern="[0-9]{10}" 
                              title="El número debe tener 10 dígitos"
                              placeholder="Ej. 1234567890" 
                              value={formData.ftel} 
                              onChange={handleChange}
                              required
                          />
                      </div>
                  </div>
                  <div id="mail-form-c-us">
                      <label htmlFor="fmail">Correo: </label>
                      <input 
                          type="email" 
                          id="fmail" 
                          name="fmail" 
                          placeholder="Ej. juan.perez@example.com" 
                          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                          title="Verifica el formato del correo"
                          value={formData.fmail} 
                          onChange={handleChange} 
                          required
                      />
                  </div>
                  <div id="subject-form-c-us">
                      <label htmlFor="fsubject">Asunto: </label>
                      <input 
                          type="text" 
                          id="fsubject" 
                          name="fsubject" 
                          placeholder="Ej. Información de paquetes" 
                          value={formData.fsubject} 
                          onChange={handleChange} 
                          required
                      />
                  </div>
                  <div id="msg-form-c-us">
                      <label htmlFor="fmsg">Mensaje: </label>
                      <textarea 
                          id="fmsg" 
                          name="fmsg" 
                          placeholder="Ej. Quisiera más información sobre el paquete XX..." 
                          value={formData.fmsg} 
                          onChange={handleChange} 
                          required
                      />
                  </div>
                  <div className="button-form">
                    <button id="submit-btn" type='submit'>
                      { send ? "ENVIADO!" : "ENVIAR" }
                    </button>
                  </div>
              </form>
    )
}

export default Form;