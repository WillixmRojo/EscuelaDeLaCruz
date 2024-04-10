export const getModifiedStructureTemplate = (data) => {
  const { usuario, tablero } = data;

  return `
      <style>
        * {
          font-family: "Roboto";
        }
      
        #container {
          width: 700px;
          height: 300px;
          margin: auto;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: inline-block;
          position: fixed;
          border-radius: 5px;
          border: 1px solid #666666;
        }
      
        #header {
          height: 100px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #d4d4d4;
          color: #414141
        }
      
        #header h2 {
          letter-spacing: 0.5px;
          font-weight: 600;
          margin: auto;
          margin-left: 15px;
        }
      
        #header img {
            margin-bottom: 40px;
            margin-right: 5px;
        }
      
        #content {
          width: 95%;
          padding-top: 10px;
          margin: auto;
        }
      
        #content p {
          color: #666666;
          font-weight: 500;
        }
      
        #content a {
          font-weight: 600;
          color: #00a9e0;
        }
      
        #footer {
          width: 95%;
          margin: auto;
          padding-top: 50px;
        }
      
        #footer p {
          color: #88888b;
          font-style: italic;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin: auto;
        }
      
        hr {
          border: none;
          border-top: 1.5px dashed #d4d4d4;
          margin: 0;
        }
      </style>
      <body>
        <div id="container">
          <div id="header">
            <h2>Hola, ${usuario}!</h2>
          </div>
          <div id="content">
            <p>
              Has modificado satisfactoriamente la estructura del tablero '${tablero}' en la Biblioteca!
            </p>
            <br />
          </div>
          <hr />
          <div id="footer">
            <p>Este es un correo electrónico automático.</p>
          </div>
        </div>
      </body>
    `;
};

export const getRejectedStructureTemplate = (data) => {
  const { usuario, tablero } = data;

  return `
    <style>
      * {
        font-family: "Roboto";
      }
    
      #container {
        width: 700px;
        height: 300px;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: inline-block;
        position: fixed;
        border-radius: 5px;
        border: 1px solid #666666;
      }
    
      #header {
        height: 100px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #d4d4d4;
        color: #414141
      }
    
      #header h2 {
        letter-spacing: 0.5px;
        font-weight: 600;
        margin: auto;
        margin-left: 15px;
      }
    
      #header img {
          margin-bottom: 40px;
          margin-right: 5px;
      }
    
      #content {
        width: 95%;
        padding-top: 10px;
        margin: auto;
      }
    
      #content p {
        color: #666666;
        font-weight: 500;
      }
    
      #content a {
        font-weight: 600;
        color: #00a9e0;
      }
    
      #footer {
        width: 95%;
        margin: auto;
        padding-top: 50px;
      }
    
      #footer p {
        color: #88888b;
        font-style: italic;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        margin: auto;
      }
    
      hr {
        border: none;
        border-top: 1.5px dashed #d4d4d4;
        margin: 0;
      }
    </style>
    <body>
      <div id="container">
        <div id="header">
          <h2>Hola, ${usuario}!</h2>
        </div>
        <div id="content">
          <p>
            Ha sido rechazada la modificación del tablero '${tablero}' en la Biblioteca.
          </p>
          <br />
        </div>
        <hr />
        <div id="footer">
          <p>Este es un correo electrónico automático.</p>
        </div>
      </div>
    </body>
  `;
};

export const getAprovedStructureTemplate = (data) => {
  const { usuario, tablero } = data;

  return `
    <style>
      * {
        font-family: "Roboto";
      }
    
      #container {
        width: 700px;
        height: 300px;
        margin: auto;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: inline-block;
        position: fixed;
        border-radius: 5px;
        border: 1px solid #666666;
      }
    
      #header {
        height: 100px;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #d4d4d4;
        color: #414141
      }
    
      #header h2 {
        letter-spacing: 0.5px;
        font-weight: 600;
        margin: auto;
        margin-left: 15px;
      }
    
      #header img {
          margin-bottom: 40px;
          margin-right: 5px;
      }
    
      #content {
        width: 95%;
        padding-top: 10px;
        margin: auto;
      }
    
      #content p {
        color: #666666;
        font-weight: 500;
      }
    
      #content a {
        font-weight: 600;
        color: #00a9e0;
      }
    
      #footer {
        width: 95%;
        margin: auto;
        padding-top: 50px;
      }
    
      #footer p {
        color: #88888b;
        font-style: italic;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
        margin: auto;
      }
    
      hr {
        border: none;
        border-top: 1.5px dashed #d4d4d4;
        margin: 0;
      }
    </style>
    <body>
      <div id="container">
        <div id="header">
          <h2>Hola, ${usuario}!</h2>
        </div>
        <div id="content">
          <p>
            Ha sido aprobada la modificación del tablero '${tablero}' en la Biblioteca.
          </p>
          <br />
        </div>
        <hr />
        <div id="footer">
          <p>Este es un correo electrónico automático.</p>
        </div>
      </div>
    </body>
  `;
};

export const getCreatedMetaTemplate = (data) => {
  const { usuario, anio, indicador } = data.data;

  return `
      <body>
        <div id="container">
          <div id="header">
            <h2>Hola, ${usuario}!</h2>
            <img id="logo-bi" src="../public/images/LogoIndicadores.png" width="237.915" height="53.04">
          </div>
          <div id="content">
            <p>
              Se agregó la meta <b>${anio}</b> del indicador '<b>${indicador}</b>' en la Biblioteca.
            </p>
            <br />
          </div>
          <hr />
          <div id="footer">
            <p>Este es un correo electrónico automático.</p>
          </div>
        </div>
      </body>
      <style>
        * {
          font-family: "Roboto";
        }
      
        #container {
          width: 700px;
          height: 300px;
          margin: auto;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: inline-block;
          position: fixed;
          border-radius: 5px;
          border: 1px solid #666666;
        }
      
        #header {
          height: 100px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #d4d4d4;
          color: #414141
        }
      
        #header h2 {
          letter-spacing: 0.5px;
          font-weight: 600;
          margin: auto;
          margin-left: 15px;
        }
      
        #header img {
            margin-bottom: 40px;
            margin-right: 5px;
        }
      
        #content {
          width: 95%;
          padding-top: 10px;
          margin: auto;
        }
      
        #content p {
          color: #666666;
          font-weight: 500;
        }
      
        #content a {
          font-weight: 600;
          color: #00a9e0;
        }
      
        #footer {
          width: 95%;
          margin: auto;
          padding-top: 50px;
        }
      
        #footer p {
          color: #88888b;
          font-style: italic;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin: auto;
        }
      
        hr {
          border: none;
          border-top: 1.5px dashed #d4d4d4;
          margin: 0;
        }
      </style>
    `;
};

export const getModifiedMetaTemplate = (data) => {
  const { usuario, anio, indicador } = data.data;
  return `
      <body>
        <div id="container">
          <div id="header">
            <h2>Hola, ${usuario}!</h2>
            <img id="logo-bi" src="../public/images/LogoIndicadores.png" width="237.915" height="53.04">
          </div>
          <div id="content">
            <p>
              Se modificó la meta <b>${anio}</b> del indicador '<b>${indicador}</b>' en la Biblioteca.
            </p>
            <br />
          </div>
          <hr />
          <div id="footer">
            <p>Este es un correo electrónico automático.</p>
          </div>
        </div>
      </body>
      <style>
        * {
          font-family: "Roboto";
        }
      
        #container {
          width: 700px;
          height: 300px;
          margin: auto;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: inline-block;
          position: fixed;
          border-radius: 5px;
          border: 1px solid #666666;
        }
      
        #header {
          height: 100px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #d4d4d4;
          color: #414141
        }
      
        #header h2 {
          letter-spacing: 0.5px;
          font-weight: 600;
          margin: auto;
          margin-left: 15px;
        }
      
        #header img {
            margin-bottom: 40px;
            margin-right: 5px;
        }
      
        #content {
          width: 95%;
          padding-top: 10px;
          margin: auto;
        }
      
        #content p {
          color: #666666;
          font-weight: 500;
        }
      
        #content a {
          font-weight: 600;
          color: #00a9e0;
        }
      
        #footer {
          width: 95%;
          margin: auto;
          padding-top: 50px;
        }
      
        #footer p {
          color: #88888b;
          font-style: italic;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin: auto;
        }
      
        hr {
          border: none;
          border-top: 1.5px dashed #d4d4d4;
          margin: 0;
        }
      </style>
    `;
};

export const getApprovalMetaTemplate = (data) => {
  const { usuario, anio, indicador, aprobado } = data.data;

  return `
      <body>
        <div id="container">
          <div id="header">
            <h2>Hola, ${usuario}!</h2>
            <img id="logo-bi" src="../public/images/LogoIndicadores.png" width="237.915" height="53.04">
          </div>
          <div id="content">
            <p>
              La meta <b>${anio}</b> del indicador '<b>${indicador}</b>' fue ${
    aprobado ? "aprobada" : "rechazada"
  } en la Biblioteca.
            </p>
            <br />
          </div>
          <hr />
          <div id="footer">
            <p>Este es un correo electrónico automático.</p>
          </div>
        </div>
      </body>
      <style>
        * {
          font-family: "Roboto";
        }
      
        #container {
          width: 700px;
          height: 300px;
          margin: auto;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          display: inline-block;
          position: fixed;
          border-radius: 5px;
          border: 1px solid #666666;
        }
      
        #header {
          height: 100px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #d4d4d4;
          color: #414141
        }
      
        #header h2 {
          letter-spacing: 0.5px;
          font-weight: 600;
          margin: auto;
          margin-left: 15px;
        }
      
        #header img {
            margin-bottom: 40px;
            margin-right: 5px;
        }
      
        #content {
          width: 95%;
          padding-top: 10px;
          margin: auto;
        }
      
        #content p {
          color: #666666;
          font-weight: 500;
        }
      
        #content a {
          font-weight: 600;
          color: #00a9e0;
        }
      
        #footer {
          width: 95%;
          margin: auto;
          padding-top: 50px;
        }
      
        #footer p {
          color: #88888b;
          font-style: italic;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin: auto;
        }
      
        hr {
          border: none;
          border-top: 1.5px dashed #d4d4d4;
          margin: 0;
        }
      </style>
    `;
};
