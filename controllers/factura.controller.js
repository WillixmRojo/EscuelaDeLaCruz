import soap from "soap";

export const factura = async (req, res) => {
    const wsdlUrl = "https://dev.timbradorxpress.mx/ws/servicio.do?wsdl";

    const methodName = "your_function";

    const username = "your_username"
    const password = "your_password";
    
    const parameterValue = "your_parameter_value";

    // Create soap client
    soap.createClient(
        wsdlUrl,
        {
            wsdl_headers: {
                Authorization: "Basic " + new Buffer(`${username}:${password}`).toString("base64")
            }
        },
        (err, client) => {
            if (err) {
                console.log("Error creating SOAP client: ", err);
                return;
            }

            // Create soap request
            client[methodName]({
                yourParameter: parameterValue},
                (err, result) => {
                    if (err) {
                        console.log("Error making SOAP request: ", err)
                        return;
                    }

                    console.log("SOAP Response: ", result);
            })
        }
    )
    
    return;
}
// const url = "https://dev.timbradorxpress.mx/ws/servicio.do?wsdl"