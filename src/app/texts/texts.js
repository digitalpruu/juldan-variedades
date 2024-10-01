const title = "Juldan Variedades";
const email = "saneligue08@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría recibir más información. ¡Espero su respuesta!`
);
const numeroWhatsApp = "3004740237";
const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "*Juldan Variedades* se especializa en ofrecer detalles únicos para cumpleaños, desayunos y anchetas para diferentes ocasiones. Cada uno de nuestros productos está pensado para sorprender a esa persona especial.",
        description2: "No esperes una fecha especial para demostrar tu cariño. En *Juldan Variedades*, te ofrecemos una amplia gama de detalles que se adaptan a cualquier ocasión, asegurándonos de que cada regalo sea memorable.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Juldan Variedades",
            p2: "No esperes una fecha especial para sorprender a tu persona favorita.",
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/sv13WbUF8CNYdPmH/?mibextid=qi2Omg",
        instagram: "https://www.instagram.com/variedadesjuldan/?utm_source=qr&igsh=eHg2Y2FldXg5eXUw",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
