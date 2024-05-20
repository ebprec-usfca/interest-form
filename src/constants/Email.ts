import { interestText, type Interest, interestTextInSpanish } from "./Constants";

export const emailIntro = (name: string, isSpanish: boolean) => {
  return isSpanish ?
    `Hola ${name},
  <br><br>
  Somos del equipo del Programa para Evitar el Desplazamiento (Displacement Avoidance Program , o DAP, por sus siglas en inglés) de la Cooperativa Inmobiliaria Permanente de East Bay (East Bay Permanent Real Estate Cooperative, o EB PREC, por sus siglas en inglés), que forma parte de la iniciativa <a href="https://bnsnoakland.org/">Mejores Vecindarios, Mismos Vecinos</a> (Better Neighborhoods, Same Neighbors, o BNSN, por sus siglas en inglés).
  <br><br>
  Financiada por el Programa de Comunidades Climáticas Transformativas (Transformative Climate Communities, TCC, por sus siglas en inglés) del Estado de California, Better Neighborhoods, Same Neighbors existe para crear un East Oakland que tenga un entorno saludable, transporte seguro y accesible y que fomente el arte y la cultura para crear riqueza en la comunidad y garantizar que la vivienda sea un derecho humano para los actuales residentes de East Oakland. ¡EB PREC se enorgullece de ser parte de esta iniciativa histórica!
  <br><br>
  Crear riqueza comunitaria con fideicomisos de tierras comunitarias (community land trusts, o CLTs por sus siglas en inglés) y cooperativas inmobiliarias permanentes, como la Cooperativa Inmobiliaria Permanente de East Bay (EB PREC), no sólo es posible:¡ya lo estamos haciendo!
  <br><br>
  ` : `Hi ${name},
<br><br>
It’s the Displacement Avoidance Program (DAP) Team at the East Bay Permanent Real Estate Cooperative, part of the <a href="https://bnsnoakland.org/">Better Neighborhoods, Same Neighbors Initiative</a> (BNSN), following up!
<br><br>
Funded by the State of California's Transformative Climate Communities Program, Better Neighborhoods, Same Neighbors envisions an East Oakland with healthy surroundings, safe and accessible transportation and thriving arts and culture that builds community wealth and ensures housing is a human right for existing East Oakland residents. EB PREC is proud to be a partner on this historic initiative!
<br><br>
Building community wealth with community land trusts (or CLTS) and permanent real estate cooperatives, like the East Bay Permanent Real Estate Cooperative, is not only possible but already happening!
<br><br>
`
} 

export const emailOutro = (isSpanish: boolean)=>{ 
  return isSpanish ? 
  `<hr>
  Gracias de nuevo por tu interés en The East Bay Permanent Real Estate Cooperative (EB PREC). ¡Esperamos verte muy pronto en la Orientación!
  <br><br>
  Mientras tanto, si tú o alguien que conoces está en peligro de perder su casa o negocio, por favor ponte en contacto con nosotros en: here2stay@ebprec.org y ¡revisa nuestro <a href="https://drive.google.com/file/d/1tiXoXHdBdoFod0O9PeJwtYw9HS1fvUEO/view">paquete de recursos de navegación de vivienda!</a>
    <br><br>
  Con amor desde el “DAP in The Deep”`
  :
  `<hr>
Thank you again for your interest in The East Bay Permanent Real Estate Cooperative. We look forward to seeing you at Orientation soon and very soon!
<br><br>
In the meantime, if you or someone you know is in danger of losing their home or business, please reach out to us at <a href="mailto:here2stay@ebprec.org">here2stay@ebprec.org</a> and check out our <a href="https://drive.google.com/file/d/1tiXoXHdBdoFod0O9PeJwtYw9HS1fvUEO/view">Housing Navigation Resource Packet</a> for support!
<br><br>
w/love from The DAP in The Deep`
}


export const aduEmail =`<h3>${interestText.adu}</h3>
You indicated that you were interested in building an ADU on your property, which is another way to build wealth and create more housing opportunities.
<br><br>
The City of Oakland sees ADUs as an important tool in battling the housing crisis. Check out <a href="https://cao-94612.s3.amazonaws.com/documents/adu_december_2020_handbook.pdf">their guidebook on ADUs</a> that covers topics like zoning requirements.
<br><br>
Richmond Neighborhood Housing Services (RNHS) is excited to assist you in exploring an opportunity to build an Accessory Dwelling Unit (ADU) on your property. The <a href="https://keystoequity.org/">Keys to Equity</a> program is intended to support both the creation of new ADUs, as well as the renovation and legalization of existing unpermitted ADUs. The Keys to Equity program was developed in collaboration with Richmond Neighborhood Housing Services (RNHS), Self-Help Federal Credit Union (Self-Help), the WellNest Company, the Chan Zuckerberg Initiative (CZI), the City of Oakland, and the San Francisco Foundation (SFF) to help simplify and streamline the process for constructing ADUs.
<br><br>
The program provides one-on-one guidance through the development process and a suite of benefits for eligible homeowners, including ADU architectural designs, analysis of your finances and assistance obtaining a loan, access to a customized financial product, and construction services in addition to trainings related to becoming a landlord.
<br><br>
This program is intended to create more housing in areas that are at-risk of greater displacement and expand access to wealth-building for homeowners, with a focus on Black homeowners and those who have been disproportionately impacted by systemic racial and economic inequities within the housing system.KTE is now offering open enrollment and you can sign up for their workshops here. Please contact us with any questions. <a href="https://www.richmondnhs.org/contact-us/">Sign up</a> to get Keys To Equity news and updates delivered to your inbox.
<br><br>
The <a href="https://youtu.be/N-mLgQYB1yM">Our Back Yard Cooperative</a> (also known as OBY), is an alternate option that pays homeowners a monthly fee up to $500 to lease their land and then covers the costs and management of building the ADU.  OBY even finds tenants and performs property management!  Visit their <a href="https://obyhouse.com/house">website</a> if you'd like to learn more and become part of the solution to Oakland's housing crisis.
<br><br>
Some California Homeowners are also eligible for funding through the <a href="https://www.calhfa.ca.gov/adu/index.htm">California Housing Finance Agency (CalHFA) ADU Grants program</a>. Homeowners can receive up to $40,000 towards the costs of permitting and constructing a new ADU on their property. Apply today!
<br><br>`

export const aduEmailInSpanish =`<h3>${interestTextInSpanish.adu}</h3>
Has indicado que estás interesado/a en construir una “Unidad de Vivienda Accesoria” (ADU, por sus siglas en inglés) en tu propiedad, que es otra manera de crear riqueza, además de crear oportunidades de vivienda.
<br><br>
La ciudad de Oakland considera las ADUs como una herramienta importante en la lucha contra la crisis de la vivienda. Revisa <a href="https://cao-94612.s3.amazonaws.com/documents/adu_december_2020_handbook.pdf">esta guía sobre ADUs</a>, que cubre temas como los requisitos de zonificación.
<br><br>
Richmond Neighborhood Housing Services (Servicios de Vivienda del Vecindario de Richmond, o RNHS, por sus siglas en inglés) se complace en ayudarte a explorar una oportunidad para construir una unidad de vivienda accesoria (ADU) en tu propiedad. El programa <a href="https://keystoequity.org/">“Keys to Equity” (Las llaves de la equidad, o KTE, por sus siglas en inglés)</a> está destinado a apoyar tanto la creación de nuevas ADUs, así como la renovación y legalización de ADUs existentes que fueron hechas sin permiso. El programa Keys to Equity fue desarrollado en colaboración con Richmond Neighborhood Housing Services (RNHS), Self-Help Federal Credit Union (Self-Help), la empresa WellNest, la Chan Zuckerberg Initiative (CZI), la ciudad de Oakland y la San Francisco Foundation (SFF) para ayudar a simplificar y el proceso de construcción de ADUs.
<br><br>
El programa ofrece orientación personalizada en cuanto al proceso de construcción y un conjunto de beneficios para los propietarios de viviendas elegibles, incluyendo diseños arquitectónicos para ADUs, análisis de sus finanzas y ayuda para obtener un préstamo, cómo acceder a un producto financiero personalizado, y servicios de construcción, además de cursos de capacitación relacionados con convertirse en un arrendador.
<br><br>
El objetivo de este programa es crear más viviendas en zonas que corren el riesgo de sufrir más desplazamiento y fomentar el acceso de los propietarios a la creación de riqueza, con especial atención a los propietarios negros y a quienes se han visto afectados de forma desproporcionada por las desigualdades raciales y económicas sistémicas dentro del sistema de la vivienda. KTE está recibiendo inscripciones y te puedes registrar para sus talleres aquí. Si tienes alguna pregunta, ponte en contacto con nosotros. <a href="https://www.richmondnhs.org/contact-us/">Inscríbete</a> para recibir noticias y actualizaciones de Keys To Equity (KTE) por email.
<br><br>
La Cooperativa <a href="https://youtu.be/N-mLgQYB1yM">"Our Back Yard Cooperative"</a> (“En Nuestro Patio Trasero”), también conocida como OBY, por sus siglas en inglés), es una opción alternativa que paga a los propietarios de viviendas una cuota mensual de hasta $500 dólares para alquilar su terreno y luego cubre los costos y la administración de la construcción de la ADU. OBY incluso encuentra inquilinos y se encarga de la administración de la propiedad. Visita su sitio <a href="https://obyhouse.com/house">web</a> si quieres más información y formar parte de la solución a la crisis de vivienda de Oakland.
<br><br>
Algunos propietarios de viviendas en California también son elegibles para financiamiento a través del <a href="https://www.calhfa.ca.gov/adu/index.htm">programa de subvenciones para ADU de la Agencia de Financiación de Viviendas de California (CalHFA)</a>. Los propietarios pueden recibir hasta $40,000 para los costos de permisos y construcción de una nueva ADU en su propiedad. ¡Aplica hoy!
<br><br>`

const affordableHousingEmail = `<h3>${interestText.affordableHousing}</h3>
You indicated that you were interested in finding affordable housing. I'm hopeful that our network of resources can serve you. As a note, EB PREC is not a housing provider; however we do work with community to purchase properties and create permanent homeownership via a shared ownership model to create stability and build community wealth.   
<br><br>
If you are in immediate need of housing, please call 211 to speak directly with a navigator who can match you with opportunities and resources/benefits you may be eligible for based on information you provide. 
<br><br>
We encourage everyone to apply to any of the listings you can find on <a href="https://drive.google.com/file/d/1Iv6pE6Y_xQzRiqrTp1mhX4gSotH2vMbt/view?usp=drive_link">this list</a> that our friends at The Unity Council are offering.  
<br><br>
You can also receive housing search counseling through the <a href="https://unitycouncil.org/program/housing-access-navigation/">Unity Council</a>'s Housing Access and Navigation Services - please feel free to reach out<br>
Housing Services Team<br>
510-535-6101<br>
<a href="mailto:housingservices@unitycouncil.org">housingservices@unitycouncil.org</a>
<br><br>
You can also call Laura Romero directly at 510-850-4912, who can direct you through their services as well.
<br><br>
If you are currently unhoused in Deep East Oakland, please visit the <a href="https://www.eocp.net/">East Oakland Community Project</a> at 7515 International Blvd on Thursday and Friday from 10am to 3pm to receive an assessment and get matched with resources including temporary shelter and financial assistance. You may also call their intake line at 510-463-4601 or email Mercedes Ford at mercedesf@eocp.net.
<br><br>
Alternatively, St. Mary's can also support seniors (adults over 55) with immediate needs for shelter. Please call them at (510) 923-9600 or visit their website at <a href="https://stmaryscenter.org/">https://stmaryscenter.org/</a>.
<br><br>
If you live or would like to live in East Oakland, ROOTS Clinic may be able to provide housing support as part of a comprehensive wellness plan. Contact their headquarters at (510) 533-1248 or submit a <a href="https://rootsclinic.org/contact/">contact form</a> to get in touch. They can possibly support you with accessing the organizations and programs we have shared in this email.
<br><br>
For those who have experienced incarceration, please call <a href="https://www.self-sufficiency.org/housingnavigation">BOSS</a> at (510) 649-1930 or email info@self-sufficiency.org to receive housing search assistance or temporary housing. <a href="https://www.reentryprograms.com/go/men-of-valor-academy">Men of Valor</a> also provides resources for temporary housing, work and financial support for the formerly incarcerated and can be reached at (510) 567-1308.
<br><br>
You'll also be added to our housing search mailing list and will receive information about other openings as they come to our attention, until you indicate that you'd like to be removed.  I would also suggest you all look up and join the <a href="https://www.facebook.com/groups/POCHousingNetwork/">People Of Color Sustainable Housing Network on Facebook</a> to stay informed about affordable housing openings in the Bay Area. 
<br><br>
Hopefully one of these resources will get you the support you need right now, but please feel free to contact us if none of these options are helpful or if you need more assistance sorting through them by calling (510) 470-0060 or emailing <a href="mailto:here2stay@ebprec.org"here2stay@ebprec.org</a> or check out our <a href="https://drive.google.com/file/d/1tiXoXHdBdoFod0O9PeJwtYw9HS1fvUEO/view">Housing Navigation Resource Packet</a> for support!
<br><br>
We will follow up in a few weeks if we haven't heard from you to see how things are coming along. We hope to see you housed and secure soon! Please reach out if you are interested in learning more about EB PREC's work and consider <a href="http://ebprec.eventbrite.com">attending</a> an upcoming Orientation or Happy Hour at Esther’s Orbit Room. 
<br><br>`

const affordableHousingEmailInSpanish = `<h3>${interestTextInSpanish.affordableHousing}</h3>
Has indicado que te interesa encontrar una vivienda asequible. Espero que nuestra red de recursos pueda servirte. Ante todo, EB PREC no es un proveedor de vivienda, sin embargo, trabajamos con la comunidad para comprar propiedades y crear propiedades de vivienda permanentes usando un modelo de propiedad compartida para crear estabilidad y construir la riqueza de la comunidad.
<br><br>
Si necesitas vivienda de manera urgente, llama al 211 para hablar directamente con un consejero que puede conectarte con oportunidades y recursos o beneficios para los que podrías ser elegible, según la información que des.
<br><br>
Animamos a todos/as a aplicar a cualquiera de los listados que puedan encontrar en <a href="https://drive.google.com/file/d/1Iv6pE6Y_xQzRiqrTp1mhX4gSotH2vMbt/view?usp=drive_link">esta lista</a> que nuestros amigos de The Unity Council (El Concejo de la Unidad) están ofreciendo.
<br><br>
También puedes recibir asesoramiento para la búsqueda de vivienda con los Servicios de Acceso y Navegación de Vivienda del <a href="https://unitycouncil.org/program/housing-access-navigation/">Unity Council</a>. Ponte en contacto con el<br>
Equipo de Servicios de Vivienda<br>
510-535-6101<br>
<a href="mailto:housingservices@unitycouncil.org">housingservices@unitycouncil.org</a>
<br><br>
También puedes llamar directamente a Laura Romero al 510-850-4912, quien también puede orientarte sobre sus servicios.
<br><br>
Si actualmente no tienes un hogar en Deep East Oakland, por favor visita el <a href="https://www.eocp.net/">Proyecto de la Comunidad de East Oakland (East Oakland Community Project)</a> en 7515 International Blvd. los jueves y viernes de 10am a 3pm para recibir una evaluación y que te conecten con los recursos necesarios, incluyendo refugio temporal y asistencia financiera. También puedes llamar a su línea de admisión al 510-463-4601 o envía un email a Mercedes Ford en mercedesf@eocp.net 
<br><br>
St. Mary&#39;s también puede ayudar a personas mayores de 55 años con necesidades inmediatas de alojamiento. Por favor, llámelos al (510) 923-9600 o visite su sitio web <a href="https://stmaryscenter.org/">https://stmaryscenter.org/</a>.
<br><br>
Si vives o te gustaría vivir en East Oakland, la clínica ROOTS puede darte apoyo sobre temas de vivienda como parte de un plan integral de bienestar. Ponte en contacto con ellos al (510) 533-1248 o envía un <a href="https://rootsclinic.org/contact/">formulario de contacto</a> para ponerte en contacto. Ellos posiblemente puedan apoyarte con el acceso a las organizaciones y programas que hemos compartido en este correo electrónico.
<br><br>
Para aquellos que han estado en la cárcel, por favor llame a <a href="https://www.self-sufficiency.org/housingnavigation">BOSS</a> al (510) 649-1930 o por email a: info@self-sufficiency.org para recibir asistencia en la búsqueda de vivienda o vivienda temporal. <a href="https://www.reentryprograms.com/go/men-of-valor-academy">"Men of Valor"</a> también ofrece recursos de vivienda temporal, trabajo y apoyo financiero para personas que han estado en la cárcel llamando al (510) 567-1308.
<br><br>
También te pondremos en nuestra lista de correo de búsqueda de vivienda y recibirás información sobre otras vacantes según se vayan haciendo disponibles (hasta que nos digas que te borremos de la lista). También sugiero que busquen y se unan a <a href="https://www.facebook.com/groups/POCHousingNetwork/">“People Of Color Sustainable Housing Network” (Red de Vivienda Sostenible para Personas de Color) </a> en Facebook para mantenerse informados/as sobre las vacantes de viviendas asequibles en el Área de la Bahía.
<br><br>
¡Esperamos que alguno de estos recursos te dé el apoyo que necesitas en este momento, pero por favor no dudes en contactarnos si ninguna de estas opciones son útiles o si necesitas más ayuda llamando al (510) 470-0060 o por email a: <a href="mailto:here2stay@ebprec.org"here2stay@ebprec.org</a> y revisa nuestro <a href="https://drive.google.com/file/d/1tiXoXHdBdoFod0O9PeJwtYw9HS1fvUEO/view">paquete de recursos de navegación</a> de vivienda!
<br><br>
Si no te pones en contacto con nosotros, intentaremos contactarte de nuevo en unas semanas para ver cómo van las cosas. Esperamos verte pronto en una vivienda segura. Por favor, contáctanos si estás interesado/a en aprender más sobre el trabajo de EB PREC y si quieres venir a una próxima <a href="http://ebprec.eventbrite.com">orientación</a> o Happy Hour en Esther’s Orbit Room. 
<br><br>`

const buildingsOrgEmail = `<h3>${interestText.buildingOrg}</h3>
You indicated that you were interested in organizing your building to improve conditions or secure your housing.
<br><br>
If you're a renter facing challenges with your unit or landlord and would like support asserting your rights or organizing with your neighbors, there are a few tenants' groups you can plug into:
<ol>
<li><a href="http://www.oaklandtenantsunion.org/">Oakland Tenants Union</a> (OTU) offers regular virtual counseling hours and meetings every 2nd Monday of the month on Zoom</li>
<li><a href="https://baytanc.com/">Tenant and Neighborhood Councils</a>  (TANC) is a Bay Area member-run housing organization building tenant power for renters</li>
<li><a href="https://urbanhabitat.org/regional-tenant-organizing-network">The Regional Tenant Organizing Network</a> (RTON) is a project of Urban Habitat that is uniting tenants across Northern California, from Sacramento to San Jose, working together to rise up against some of the most prominent corporate landlords in the region.</li>
<li><a href="https://cjjc.org/become-a-member/">Causa Justa:Just Cause</a> (CJJC) is an Oakland-based non-profit who organizes its members in the fight for housing justice and supports tenants in exercising their rights</li>
</ol>
There are also some amazing letters, tools and templates to support you in organizing with your neighbors and/or forming a tenants association under the “Tenant Organizing Resources” section  in our <a href="https://drive.google.com/file/d/1tiXoXHdBdoFod0O9PeJwtYw9HS1fvUEO/view">Housing Navigation Resource Packet</a>!  It’s free to download and full of many other great resources to secure your housing!
<br><br>`

const buildingsOrgEmailInSpanish = `<h3>${interestTextInSpanish.buildingOrg}</h3>
Has indicado que te interesaría organizarte junto a los habitantes de tu edificio para mejorar las condiciones del lugar o asegurar tu vivienda.
<br><br>
Si eres inquilino y tienes problemas con tu vivienda o el dueño o dueña de la propiedad y necesitas apoyo para hacer valer sus derechos o para organizarte con tus vecinos, hay algunos grupos de inquilinos a los que puedes unirte:
<ol>
<li><a href="http://www.oaklandtenantsunion.org/">Oakland Tenants Union</a> (Sindicato de Inquilinos de Oakland, u OTU, por sus siglas en inglés) ofrece horas regulares de asesoramiento virtual y reuniones el segundo lunes de cada mes, por Zoom</li>
<li><a href="https://baytanc.com/">Tenant and Neighborhood Councils</a>  (Concejos de Inquilinos y Vecinos, o TANC, por sus siglas en inglés) es una organización de vivienda del Área de la Bahía, dirigida por sus miembros, que fomenta el poder de los inquilinos para los inquilinos</li>
<li><a href="https://urbanhabitat.org/regional-tenant-organizing-network">La Regional Tenant Organizing Network</a> (Red Regional para la Organización de Inquilinos, o RTON, por sus siglas en inglés) es un proyecto de Urban Habitat que está uniendo a los inquilinos en todo el norte de California, desde Sacramento a San José, trabajando juntos para hacer frente a algunos de los propietarios corporativos más prominentes de la región.</li>
<li><a href="https://cjjc.org/become-a-member/">Causa Justa:Just Cause</a> (CJJC) es una organización sin fines de lucro con sede en Oakland que organiza a sus miembros en la lucha por la justicia en materia de vivienda y apoya a los inquilinos en el ejercicio de sus derechos.</li>
</ol>
También hay algunas excelentes cartas, herramientas y formatos generales para darte apoyo y que puedas organizarte con tus vecinos y/o formar una asociación de inquilinos en la sección "Recursos para organizar a los inquilinos" de nuestro <a href="https://drive.google.com/file/d/1tiXoXHdBdoFod0O9PeJwtYw9HS1fvUEO/view">Paquete de Recursos de Información sobre la Vivienda</a>. ¡Se pueden descargar gratis y contiene muchos otros recursos útiles para asegurar tu vivienda.
<br><br>`

const evictionsEmail = `<h3>${interestText.evictions}</h3>
You indicated that you were interested in getting direct support for an eviction or foreclosure.
<br><br>
If you are in need of legal assistance, there are several organizations that support tenants and homeowners.  Tenants can contact any of the following:
<br><br>
Centro Legal de la Raza<br>
<a href="https://www.centrolegal.org/">centrolegal.org</a><br>
510-437-1554<br>
tenantsrights@centrolegal.org
<br><br>
Eviction Defense Center<br>
<a href="http://www.evictiondefensecenteroakland.org">www.evictiondefensecenteroakland.org</a><br>
510-452-4541
<br><br>
East Bay Community Law Center<br>
<a href="https://ebclc.org/">ebclc.org</a><br>
510-548-4040
<br><br>
Bay Area Legal Aid<br>
<a href="https://baylegal.org/">baylegal.org</a><br>
888-382-3405
<br><br>
Asian and Pacific Islander Legal Outreach<br>
<a href="https://www.apilegaloutreach.org/">apilegaloutreach.org</a><br>
(Oakland residents only)<br>
510-251-2846
<br><br>
The following attorneys also practice tenant law:
<br><br>
<a href="https://serros-law.com/">Erik Bauman</a>, Attorney: (510) 500-5888<br>
<a href="https://greensteinmcdonald.com/">Law Offices of Greenstein & McDonald</a>: (415) 773-1240<br>
<a href="https://www.sfbla.com/">Alexsis C. Beach & Rachel Lederman, Attorneys</a>: (415) 282-9300<br>
<a href="https://www.giampaolilaw.com/">Giampaoli Law</a>: (415) 890-6529
<br><br>
Homeowners should reach out to Housing and Economic Rights Advocates (HERA) for legal support at heraca.org or calling (510) 271-8443.  
<br><br>
If you need support with a pending or existing foreclosure, please reach out to Steve Peterson with <a href="https://infinityinvestments.net/">Infinity Investments</a> at peterson.infinity@gmail.com or the <a href="https://richmondnhs.org/programs/">Richmond Neighborhood Housing Services</a> for support with foreclosure relief.
<br><br>`

const evictionsEmailInSpanish = `<h3>${interestTextInSpanish.evictions}</h3>
Has indicado que te interesa obtener ayuda directa para un desalojo o una ejecución hipotecaria.
<br><br>
Si necesitas asistencia legal, hay varias organizaciones que apoyan a inquilinos y propietarios. Los inquilinos pueden ponerse en contacto con cualquiera de las siguientes:
<br><br>
Centro Legal de la Raza<br>
<a href="https://www.centrolegal.org/">centrolegal.org</a><br>
510-437-1554<br>
tenantsrights@centrolegal.org
<br><br>
Eviction Defense Center (Centro de Defensa contra el Desalojo)<br>
<a href="http://www.evictiondefensecenteroakland.org">www.evictiondefensecenteroakland.org</a><br>
510-452-4541
<br><br>
East Bay Community Law Center (Centro Legal para la Comunidad de East Bay)<br>
<a href="https://ebclc.org/">ebclc.org</a><br>
510-548-4040
<br><br>
Bay Area Legal Aid (Ayuda Legal del Área de la Bahía)<br>
<a href="https://baylegal.org/">baylegal.org</a><br>
888-382-3405
<br><br>
Asian and Pacific Islander Legal Outreach (Asistencia Legal para asiáticos e isleños del Pacífico)<br>
<a href="https://www.apilegaloutreach.org/">apilegaloutreach.org</a><br>
(Oakland residents only)<br>
510-251-2846
<br><br>
Los siguientes abogados/as también trabajan en el tema del derecho de inquilinos:
<br><br>
<a href="https://serros-law.com/">Erik Bauman</a>, Attorney: (510) 500-5888<br>
<a href="https://greensteinmcdonald.com/">Law Offices of Greenstein & McDonald</a>: (415) 773-1240<br>
<a href="https://www.sfbla.com/">Alexsis C. Beach & Rachel Lederman, Attorneys</a>: (415) 282-9300<br>
<a href="https://www.giampaolilaw.com/">Giampaoli Law</a>: (415) 890-6529
<br><br>
Los propietarios de viviendas deben ponerse en contacto con Housing and Economic Rights Advocates (Activistas para la Vivienda y los Derechos Económicos, o HERA, por sus siglas en inglés) para recibir apoyo legal en: heraca.org o llamando al (510) 271-8443.
<br><br>
Si necesitas ayuda con una ejecución hipotecaria pendiente o existente, por favor, ponte en contacto con Steve Peterson con <a href="https://infinityinvestments.net/">Infinity Investments</a> en peterson.infinity@gmail.com o <a href="https://richmondnhs.org/programs/">los Servicios de Vivienda del Vecindario de Richmond (Richmond Neighborhood Housing Services)</a> para recibir apoyo relacionado con la ejecución hipotecaria.
<br><br>`

const groupBuyEmail = `<h3>${interestText.groupBuy}</h3>
You indicated that you’re interested in forming a group to purchase a building together with us - how exciting! At EB PREC, we’ve created what we call “Owner Groups” that allow community members to come together and pursue projects with the support of the cooperative. <a href="https://ebprec.org/community-owner">Community Owners</a>, <a href="https://ebprec.org/residence">Resident Owners</a>, and <a href="https://ebprec.org/staff-owner">Staff Owners</a> may form Owner Groups - which are one important way for Owners to shape things in their lives and communities. (Per slide 27 of the EB PREC Bylaws). To become an owner, please <a href="http://ebprec.eventbrite.com">attend</a> or <a href="https://ebprec.org/orientation">watch</a> our New Member Orientation, complete the related Owner Agreement and pay any necessary dues.
<br><br>
Examples of Owner Groups include: people seeking to buy property and form a household together; groups of organizations seeking to buy a shared building; neighbors organizing to protect a building or land; a group of folks doing policy work; people forming a community resiliency team. Such groups must be rooted in EB PREC’s Points of Unity (see slides 5 and 6 of the EB PREC Bylaws).
<br><br>
Collective Purchase
<br><br>
Many Owner Groups form in order to purchase land together and become <a href="https://ebprec.org/residence">Resident Owners</a>. Here is more information about collective purchasing:
<ul>
  <li>If you have a property in mind, you can start by filling out our <a href="https://ebprec.org/intake-form">Intake Form here</a>. This will help us get a sense of the project, and do a preliminary analysis.</li>
  <li>You can also see more about our process here in <a href="https://storage.googleapis.com/wzukusers/user-22872016/documents/8d77955e433b45d1bf233351a62a3576/How%20Collective%20Purchasing%20Works%2010%3A20.pdf">How Collective Purchasing Works</a></li>
  <li>Occasionally we have openings on existing collectively-held land. Check the blog and the <a href="https://ebprec.org/residence">Resident Owners</a> page for future openings.</li>
</ul>`

const groupBuyEmailInSpanish = `<h3>${interestTextInSpanish.groupBuy}</h3>
Has indicado que estás interesado/a en formar un grupo para adquirir un edificio junto con nosotros, ¡qué emocionante! En EB PREC, hemos creado lo que llamamos "Grupos de Propietarios" que permiten a los miembros de la comunidad unirse y llevar a cabo proyectos con el apoyo de la cooperativa. <a href="https://ebprec.org/community-owner">Propietarios de la Comunidad,/a>, <a href="https://ebprec.org/residence">Propietarios Residentes</a>, y <a href="https://ebprec.org/staff-owner">Propietarios del Personal</a> pueden formar Grupos de Propietarios - que son una manera importante para los Propietarios de dar forma a las cosas en sus vidas y comunidades. (Según la Página 27 de los Estatutos de EB PREC). Para convertirse en propietario, por favor <a href="http://ebprec.eventbrite.com">asiste</a> o <a href="https://ebprec.org/orientation">revisa</a> nuestra Orientación para Nuevos Miembros, completa el Acuerdo de Propietario relacionado y paga las cuotas necesarias. 
<br><br>
Ejemplos de Grupos de Propietarios incluyen: personas que buscan comprar una propiedad y formar un hogar juntos; grupos de organizaciones que buscan comprar un edificio compartido; vecinos que se organizan para proteger un edificio o terreno; un grupo de personas que hacen trabajo político; personas que forman un equipo de resiliencia comunitaria. Dichos grupos deben estar arraigados en los Puntos de Unidad de EB PREC (véanse las Páginas 5 y 6 de los Estatutos de EB PREC).
<br><br>
Compra colectiva
<br><br>
Muchos Grupos de Propietarios se forman para comprar terrenos juntos y convertirse en <a href="https://ebprec.org/residence">Propietarios Residentes</a>. Aquí encontrarás más información sobre la compra colectiva:
<ul>
  <li>Si tienes una propiedad en mente, puedes empezar llenando nuestro <a href="https://ebprec.org/intake-form">formulario de admisión aquí</a>. Esto nos ayudará a hacernos una idea del proyecto y a hacer un análisis preliminar.</li>  
  <li>También puedes obtener más información sobre nuestro proceso aquí, en <a href="https://storage.googleapis.com/wzukusers/user-22872016/documents/8d77955e433b45d1bf233351a62a3576/How%20Collective%20Purchasing%20Works%2010%3A20.pdf">“Cómo funciona la compra colectiva”</a>.</li>
  <li>Ocasionalmente tenemos vacantes en terrenos de propiedad colectiva ya existentes. Consulta el blog y la página de <a href="https://ebprec.org/residence">Propietarios Residentes</a> para conocer las futuras vacantes.</li>
</ul>`

const investorEmail = `<h3>${interestText.investor}</h3>
You indicated that you’re interested in becoming a Community or Investor Owner - how exciting!
<br><br>
<b>Community Owners</b> are folks rooted in East Bay community, that become members of the Cooperative in order to help shape the future of our own neighborhoods.
<br><br>
Anyone who is a part of the East Bay community can become a Community Owner:
<ol>
 <li>Read and sign the Community Owner Agreement (click here for Mobile)</li>
 <li>Contribute your Member Dues ($10)</li>
 <li><a href="https://www.eventbrite.com/o/east-bay-permanent-real-estate-cooperative-18430217721">Attend</a> an East Bay PREC Orientation (3rd Tuesdays of the month), or <a href="https://ebprec.org/orientation">watch</a> the recording</li>
</ol>
That's it, that’s all! Fill out the <a href="https://ebprec.org/community-owner-agreement">Community Owner Agreement</a> to join us Today!
<br><br>
Folks who join as Community Owners are then able to form groups (we call them Owner Groups) to seek out and acquire properties for permanently affordable cooperative ownership, with the support of our organization. Learn more about Owner Groups by watching <a href="https://youtu.be/uaBNv1_3eCo">this video</a>.
<br><br>
Anyone living in California (20+ other states) can also join EB PREC as an <b>Investor Owner</b> by purchasing one or more shares at $1000 each. Those funds are then leveraged to acquire our properties that are co-owned by their residents! To join our community of over 340 Investors:
<ol>
 <li>Sign the Investor Owner Agreement (email us if you prefer a PDF). Each share is $1,000 and you can purchase multiple shares.</li>
 <li>Send in your investment. We'll email you an invoice with payment options after you signing the agreement.</li>
</ol>
Pro Tip: We offer payment plans! If you want to buy a share but $1,000 at once is out of reach, just let us know and you can pay it off over time. We also offer a subsidy for East Bay residents who would like to invest and might not have the cash on hand. Go here to apply for a <a href="https://docs.google.com/forms/d/1j_OYncfRrR_tC_QFkFA8RQzBFoZeGIzwNNimluOm3gM/viewform?edit_requested=true">Freedom Share</a>!
<br><br>`

const investorEmailInSpanish = `<h3>${interestTextInSpanish.investor}</h3>
Has indicado que estás interesado/a en convertirte en Propietario de Comunidad o Inversionista - ¡qué emocionante!
<br><br>
Los <b>Propietarios de Comunidad</b> son personas arraigadas en la comunidad de East Bay, que se convierten en miembros de la Cooperativa con el fin de ayudar a dar forma al futuro de nuestros propios barrios.
<br><br>
Cualquiera que forme parte de la comunidad de East Bay puede convertirse en Propietario de Comunidad:
<ol>
 <li>Lee y firma el Acuerdo de Propietario de Comunidad (haz clic aquí para la “versión para Smartphone”)</li>
 <li>Contribuye con tu cuota de miembro ($10)</li>
 <li><a href="https://www.eventbrite.com/o/east-bay-permanent-real-estate-cooperative-18430217721">Asistir</a> a una Orientación East Bay PREC (3er martes de cada mes), o <a href="https://ebprec.org/orientation">ver</a> la grabación</li>
</ol>
Ya está, ¡eso es todo! ¡Llena el <a href="https://ebprec.org/community-owner-agreement">Acuerdo de Propietario de Comunidad </a> para unirte a nosotros hoy mismo!
<br><br>
Las personas que se unan como Dueños Comunitarios pueden formar grupos (los llamamos Grupos de Propietarios) para buscar y adquirir propiedades para la propiedad cooperativa permanentemente asequible, con el apoyo de nuestra organización. Aprende más sobre los Grupos de Propietarios viendo <a href="https://youtu.be/uaBNv1_3eCo">este video</a>.
<br><br>
Cualquier persona que viva en California (y en más de 20 estados) también puede unirse a EB PREC como <b>Propietario Inversionista comprando</b> una o más acciones a $1,000 dólares cada una. ¡Esos fondos son luego usados para adquirir nuestras propiedades que son copropiedad de sus residentes! Para unirse a nuestra comunidad de más de 340 Inversionistas:
<ol>
 <li>Firma el Acuerdo de Propietario Inversionista (envíanos un correo electrónico si prefieres un PDF). Cada acción es de $1,000 y puedes comprar varias acciones.</li>
 <li>Envía tu inversión. Te enviaremos una factura por email con las opciones de pago tras la firma del acuerdo.</li>
</ol>
Consejo profesional: Ofrecemos planes de pago. Si quieres comprar una acción pero no puedes pagar $1,000 en un solo pago, sólo tienes que decírnoslo y podrás ir pagándolo en partes. También ofrecemos un subsidio para los residentes de East Bay a los que les gustaría invertir, pero no tienen el dinero en efectivo. ¡Solicita aquí una <a href="https://docs.google.com/forms/d/1j_OYncfRrR_tC_QFkFA8RQzBFoZeGIzwNNimluOm3gM/viewform?edit_requested=true">Freedom Share</a>!
<br><br>`

const landTrustsEmail = `<h3>${interestText.landTrusts}</h3>
You indicated that you were interested in learning more about CLTs. <a href="https://drive.google.com/file/d/1wdFFhPFtSAj3o9h4qufhT1Fx594TBjl9/view">Community Land Trusts</a> were designed to create stabilized housing by purchasing land and offering homeownership opportunities to low-income residents that are permanently affordable, using government subsidies to help offset costs. 
<br><br>
The Oakland Community Land Trust, launched in response to the subprime lending crisis, has acquired dozens of homes throughout East and Deep East Oakland, making permanently affordable homeownership possible to Oaklanders making less than 80% AMI (Area Median Income). OakCLT sometimes hosts workshops for interested homebuyers, which is a requirement for anyone interested in purchasing a home.  Bookmark and check back on <a href="https://oakclt.org/buyrent/">this page</a> for upcoming workshops.
<br><br>
Other CLTs active in the Bay Area include the <a href="https://sogoreate-landtrust.org/">Sogorea Te Land Trust</a>, <a href="https://nclt.org/">Northern California Land Trust</a>, and <a href="https://www.bayareaclt.org/">Bay Area Community Land Trust</a>.
<br><br>`

const landTrustsEmailInSpanish = `<h3>${interestTextInSpanish.landTrusts}</h3>
Has indicado que te interesa saber más sobre los CLTs. Los <a href="https://drive.google.com/file/d/1wdFFhPFtSAj3o9h4qufhT1Fx594TBjl9/view"> Fideicomisos de Terrenos Comunitarios (Community Land Trusts, o CLTs, por sus siglas en inglés) </a> fueron diseñados para crear estabilidad en el tema de vivienda mediante la compra de terrenos y así ofrecer la oportunidad de ser propietarios de una vivienda que sea permanentemente asequibles a los residentes de bajos ingresos, utilizando subsidios del gobierno para ayudar a compensar los costos.
<br><br>
Oakland Community Land Trust (Fideicomiso Comunitario de Terrenos de Oakland, u OakCLT por sus siglas en inglés) creado en respuesta a la crisis de los préstamos de alto riesgo ha adquirido docenas de viviendas en East y Deep East Oakland, haciendo posible que los habitantes de Oakland que ganan menos del 80% del AMI (ingreso promedio del área) puedan acceder a la propiedad de una vivienda permanente asequible. Algunas veces, OakCLT organiza talleres para personas que están interesadas en comprar una vivienda, lo cual es un requisito para cualquier persona interesada en comprar una casa. Visita y haz un “bookmark” (atajo en tu navegador web) a <a href="https://oakclt.org/buyrent/">esta página</a> web y mantente al tanto sobre los próximos talleres.
<br><br>
Otros CLTs activos en el Área de la Bahía son el <a href="https://sogoreate-landtrust.org/">Sogorea Te Land Trust</a>, <a href="https://nclt.org/">Northern California Land Trust</a> y <a href="https://www.bayareaclt.org/">Bay Area Community Land Trust</a>.
<br><br>`

const merchantsAsscEmail = `<h3>${interestText.merchantsAssc}</h3>
You indicated that you were interested in joining a Merchants’ Association for East Oakland small businesses.  The Black Cultural Zone, in coordination with theBetter Neighborhoods, Same Neighbors, has started a Small Business Alliance in East Oakland to be a driving force of economic, cultural, and social development in East Oakland.  The mission of the EOSBA is to facilitate business growth within East Oakland and utilize business resources efficiently.  Revitalization of the business community in East Oakland will be achieved through increased marketing and visibility, partnerships with cultural organizations, keeping the streets safe and clean, improving and renewing infrastructure, and focusing on developing local business. Through these outlets, we aim to build an area which attracts a wide audience to live, work, and play.
<br><br>
The EOSBA meets every second Wednesday at the 81st Ave Library.  This event is free and dinner is included! Please register at https://www.eventbrite.com/e/small-business-alliance-monthly-meeting-tickets-537991496047?aff=ebdssbdestsearch
<br><br>`

const merchantsAsscEmailInSpanish = `<h3>${interestTextInSpanish.merchantsAssc}</h3>
Has indicado que te interesa en unirse a una Asociación de Comerciantes para pequeñas empresas de East Oakland. La Zona Cultural Negra, en coordinación con Mejores Vecindarios, Mismos Vecinos, ha iniciado una Alianza de Pequeñas Empresas en East Oakland para ser una fuerza impulsora del desarrollo económico, cultural y social en East Oakland. La misión de la EOSBA es facilitar el crecimiento empresarial dentro de East Oakland y utilizar los recursos empresariales de manera eficiente. La revitalización de la comunidad empresarial en East Oakland se logrará a través de un aumento en la mercadotecnia y visibilidad, asociaciones con organizaciones culturales, mantenimiento de las calles seguras y limpias, mejora y renovación de la infraestructura, y enfocándose en el desarrollo de negocios locales. A través de estos medios, aspiramos a construir un área que atraiga a una amplia audiencia para vivir, trabajar y jugar.
<br><br>
La EOSBA se reúne cada segundo miércoles en la Biblioteca de la 81ª Avenida. ¡Este evento es gratuito e incluye cena! Por favor, regístrese en https://www.eventbrite.com/e/small-business-alliance-monthly-meeting-tickets-537991496047?aff=ebdssbdestsearch
<br><br>`


const neighborsEmail = `<h3>${interestText.neighbors}</h3>
You indicated that you were interested in learning more about the Better Neighbors program and resources.
<br><br>
Funded by a $28.2 million Transformative Climate Communities (TCC) grant from the California Strategic Growth Council, the <a href="https://bnsnoakland.org/">Better Neighborhoods, Same Neighbors Initiative</a> brings together the City of Oakland, 9 community organizations, residents and business owners to implement five projects across four transformative elements in a five-square-mile area in Deep East Oakland. Those 5 projects were recommended and selected by the Deep East community and include: 
<ul>
  <li>affordable housing (led by Related)</li>
  <li>Planting 2000 fruit and street trees (led by OPRF and Planting Justice)</li>
  <li>developing an aquaponics farm (led by Planting Justice)</li>
  <li>providing after school bike programs (led by Higher Ground and Scraper Bikes)</li>
  <li>making improvements to local public space (led by the TCC Community Stakeholder Committee)</li>
  <li>workforce development (Cypress Mandela Training Center)</li>
  <li>career navigation and small business development (Black Cultural Zone)</li>
</ul>`

const neighborsEmailInSpanish = `<h3>${interestTextInSpanish.neighbors}</h3>
Has indicado que estás interesado/a en obtener más información sobre el programa "Mejores Vecinos" y sus recursos.
<br><br>
Financiado por una subvención de $28.2 millones de dólares de Comunidades Climáticas Transformativas (Transformative Climate Communities, TCC, por sus siglas en inglés) del Consejo de Crecimiento Estratégico de California (California Strategic Growth Council), la <a href="https://bnsnoakland.org/">iniciativa Mejores Vecindarios, Mismos Vecinos (Better Neighborhoods, Same Neighbors)</a> reúne a la Ciudad de Oakland, 9 organizaciones comunitarias, residentes y propietarios de negocios para implementar 5 proyectos a través de 4 elementos transformadores en un área de cinco millas cuadradas en Deep East Oakland. Estos 5 proyectos fueron recomendados y seleccionados por la comunidad de Deep East e incluyen:
<ul>
  <li>vivienda asequible (dirigido por Related)</li>
  <li>Plantar 2,000 árboles frutales y árboles de calle (liderado por OPRF [Oakland Parks and Recreation Foundation] y Planting Justice)</li>
  <li>Desarrollo de una granja acuapónica (dirigido por Planting Justice)</li>
  <li>Programas extraescolares de ciclismo (liderados por Higher Ground y Scraper Bikes)</li>
  <li>Mejora de los espacios públicos locales (a cargo del Comité de Partes Interesadas de la Comunidad de TCC)</li>
  <li>Desarrollo de capacitación para trabajadores (Cypress Mandela Training Center y West Oakland Jobs Resource Center)</li>
  <li>Orientación profesional y desarrollo de pequeñas empresas (Black Cultural Zone)</li>
</ul>`

const orientationEmail = `<h3>${interestText.orientation}</h3>
You indicated that you’d like to attend a New Member Orientation to learn more about our model of cooperative real estate.  We host an online orientation to our unique model of cooperative real estate every 3rd Tuesday of the month where you can learn more and get questions answered live.  At the end of each quarter our orientation is online AND in-person at the BNSN Resource Center at 94th and International.  Please visit <a href="ebprec.eventbrite.com">ebprec.eventbrite.com</a> to sign up for our next Orientation.  You can also watch a <a href="https://ebprec.org/orientation">recording</a> of our orientation online or check out <a href="https://youtu.be/LC7D_boDd2Q">this video</a> about EBPREC for a quick intro to our coop.
<br><br>`

const orientationEmailInSpanish = `<h3>${interestTextInSpanish.orientation}</h3>
Has indicado que te gustaría asistir a una Orientación para nuevos miembros para obtener más información sobre nuestro modelo de cooperativa inmobiliaria. Organizamos una orientación por internet sobre nuestro modelo único de cooperativa inmobiliaria cada tercer martes del mes, donde puedes obtener más información y respuestas a tus preguntas en directo. Al final de cada trimestre nuestra orientación es por internet Y en persona en el Centro de Recursos BNSN en 94th Ave, esquina con International Blvd. Visita <a href="ebprec.eventbrite.com">ebprec.eventbrite.com</a> para inscribirte en nuestra próxima orientación. También puedes ver una <a href="https://ebprec.org/orientation">grabación</a> de nuestra orientación por internet o ver <a href="https://youtu.be/LC7D_boDd2Q">este video</a> sobre EBPREC para una rápida introducción a nuestra cooperativa.
<br><br>`


const tenantRightsEmail = `<h3>${interestText.tenantRights}</h3>
You indicated that you were interested in receiving trainings/information on tenants’/homeowners’ rights, eviction defense or foreclosure prevention.
<br><br>
Several organizations in Oakland and the Bay Area offer trainings and workshops to support renters and homeowners alike in keeping or acquiring housing.  Please visit and bookmark our <a href="https://calendar.google.com/calendar/u/0/embed?src=7317b23222c5e09645c10db1b4d5eb3123f78b640bc135c1d8526a99a678b2b9@group.calendar.google.com&ctz=America/Los_Angeles">Here2Stay Calendar</a> to find upcoming housing-related workshops for Bay Area residents. 
<br><br>
The City of Oakland's Rent Adjustment Program provides a variety of trainings throughout the year that cover topics like tenants' rights, small property(under 4 units) owner rights, security deposits and Oakland's new rent registry program. You can check out their calendar <a href="https://www.oaklandca.gov/resources/rent-adjustment-program-workshops">here</a> and view the Tenants' Rights Workshop they gave in June 2023 in partnership with our Better Neighborhoods, Same Neighbors program on <a href="https://youtu.be/dOuB_qLCaX4">Youtube</a>.
<br><br>
The Unity Council also provides a host of workshops related to housing and other needs related to personal well-being.  Every 2nd and 3rd Friday of each month they host housing related workshops at their office at 1900 Fruitvale Ave; <a href="https://calendly.com/tuc-housing-access">click here</a> to check out their various topics, including rental search, affordable housing, tenants’ rights and more.
<br><br>
Every third Thursday of the month, Centro Legal de la Raza hosts a Tenants Rights Workshop on <a href="https://us02web.zoom.us/j/84220799886">Zoom at 4:30pm</a>; register <a href="https://www.tfaforms.com/4987483?tfa_2735=Housing%20Clinic%20Morning%20Hayward%20[9/01/2022">online here</a>.  Tenants are also invited to attend the Centro Legal legal clinic to get 1:1 consultations on evictions and other housing-related legal questions. These consultation services can include reviewing eviction notices and notices of rent increase, drafting letters, providing legal advice, preparing petitions to rent programs, helping tenants respond to landlord demands, and providing other short-term limited assistance. Tenants can sign up for a clinic by calling 510-437-1554 or emailing tenantsrights@centrolegal.org with the subject-line “Workshop Sign Up” and include the following information below:
<ol>
  <li>First and Last Name</li>
  <li>Date of Birth</li>
  <li>Telephone Number</li>
  <li>Address</li>
  <li>Monthly Rent</li>
  <li>Monthly Income</li>
</ol>
Centro Legal cannot assist with disputes between tenants, roommates, or neighbors, or with inter-family issues at any clinic. They can only serve tenants who meet Federal Housing and Urban Development (HUD) Income Limits. Proof of income may be required to receive services.
<br><br>
Those interested in buying property for the first time can attend a first-time homebuyers' workshop hosted by several local organizations. The City of Oakland updates its list of classes bi-monthly, which you can find on <a href="https://www.oaklandca.gov/services/attend-a-first-time-homebuyer-workshop">their website</a>.
<br><br>`

const tenantRightsEmailInSpanish = `<h3>${interestTextInSpanish.tenantRights}</h3>
Has indicado que estás interesado/a en recibir capacitación e información sobre los derechos de los inquilinos y propietarios de vivienda, defensa contra desalojos o prevención de ejecuciones hipotecarias.
<br><br>
Hay varias organizaciones en Oakland y el Área de la Bahía que ofrecen cursos y talleres para apoyar a los inquilinos y propietarios por igual para mantener o comprar una vivienda. Visita y haz un “bookmark” (atajo en tu navegador web) a nuestro <a href="https://calendar.google.com/calendar/u/0/embed?src=7317b23222c5e09645c10db1b4d5eb3123f78b640bc135c1d8526a99a678b2b9@group.calendar.google.com&ctz=America/Los_Angeles">calendario de Here2Stay</a> para saber sobre los próximos talleres relacionados con la vivienda para los residentes del Área de la Bahía.
<br><br>
El Programa de Ajuste de Alquileres de la ciudad de Oakland (Rent Adjustment Program) ofrece una variedad de cursos de capacitación durante todo el año, y cubren temas como los derechos de los inquilinos, los derechos de los “pequeños propietarios” (propiedades con menos de 4 unidades), los depósitos de seguridad y el nuevo programa de “registro de unidades de alquiler” de Oakland. Aquí puedes ver el <a href="https://www.oaklandca.gov/resources/rent-adjustment-program-workshops">calendario</a> y ver el Taller sobre Derechos de los Inquilinos que se presentó en junio 2023 en colaboración con nuestro programa Better Neighborhoods, Same Neighbors (Mejores Vecindarios, Mismos Vecinos) en <a href="https://youtu.be/dOuB_qLCaX4">Youtube</a>.
<br><br>
El Unity Council también ofrece gran variedad de talleres relacionados con la vivienda y otras necesidades relacionadas con el bienestar personal. Hay talleres relacionados con la vivienda cada 2do y 3er viernes del mes en su oficina, situada en 1900 Fruitvale Ave; <a href="https://calendly.com/tuc-housing-access">haz clic aquí</a> para revisar los diversos temas que tocarán, incluyendo búsqueda de unidades en alquiler, vivienda asequible, derechos de los inquilinos y otros temas.
<br><br>
El Centro Legal de la Raza organiza un Taller de Derechos de Inquilinos por <a href="https://us02web.zoom.us/j/84220799886">Zoom</a>, cada 3er jueves del mes a las 4:30pm. Regístrate por <a href="https://www.tfaforms.com/4987483?tfa_2735=Housing%20Clinic%20Morning%20Hayward%20[9/01/2022">internet aquí</a>. Los inquilinos también están invitados a asistir a la clínica legal de Centro Legal para obtener consultas en persona e individualizadas (1:1) sobre desalojos y otros temas legales relacionadas con la vivienda. Estos servicios de consulta pueden incluir la revisión de avisos de desalojo y avisos de aumento de alquiler, ayuda para escribir cartas, asesoramiento legal, la preparación de peticiones a los programas de alquiler, ayuda a los inquilinos para responder a las demandas del propietario, y brindar otra asistencia limitada a corto plazo. Los inquilinos pueden inscribirse para un taller llamando al 510-437-1554 o enviando un email a: tenantsrights@centrolegal.org con el título (Asunto,o “Subject”) "Workshop Sign Up" y deben incluir lasiguiente información:
<ol>
  <li>Nombre y apellidos</li>
  <li>Fecha de Nacimiento</li>
  <li>Número de teléfono</li>
  <li>Dirección</li>
  <li>Alquiler mensual</li>
  <li>Ingresos mensuales</li>
</ol>
El Centro Legal no puede ayudar con disputas entre inquilinos, compañeros de cuarto, o vecinos, o con asuntos interfamiliares en ninguno de sus talleres. Solo pueden atender a inquilinos que cumplan con los limites de ingresos del Departamento Federal de Vivienda y Desarrollo Urbano (HUD, por sus siglas en inglés). Es posible que se requiera una Prueba de tus ingresos para poder recibir servicios.
<br><br>
Las personas interesadas en comprar una vivienda por primera vez pueden asistir a un taller para personas que quieren comprar vivienda por primera vez organizado por varias organizaciones locales. La ciudad de Oakland actualiza su lista de clases cada dos meses. Puedes encontrar esa información en su <a href="https://www.oaklandca.gov/services/attend-a-first-time-homebuyer-workshop">sitio web</a>.
<br><br>`

const volunteeringEmail = `<h3>${interestText.volunteering}</h3>
You indicated that you were interested in Community Organizing or Volunteering in East/Deep East Oakland.
<br><br>
The Better Neighborhoods, Same Neighbors Initiative is investing in community-led solutions for East Oakland and we welcome residents in this <a href="https://cao-94612.s3.amazonaws.com/documents/City-of-Oakland_Project-Area-Map-rotated.jpg">geographic area</a> to get involved in many ways, like our monthly Canvassing the Deep w/The DAP, community clean ups and volunteering time at our Resource Center on 94th Ave! Oakland Parks and Recs Foundation hosts free tree planting events throughout the year, <a href="https://www.meetup.com/free-trees-for-deep-east-oakland/events/">follow them on</a> meetup to stay informed!  
<br><br>
If you'd like to volunteer at the Resource Center please email scott@ebprec.org.
<br><br>
If you're a renter facing challenges with your unit or landlord and would like support asserting your rights or organizing with your neighbors, there are a few tenants' groups you can plug into:
<ol>
  <li><a href="http://www.oaklandtenantsunion.org/">Oakland Tenants Union</a> offers regular virtual counseling hours and meetings every 2nd Monday of the month on Zoom</li>
  <li><a href="https://baytanc.com/">Tenant and Neighborhood Councils</a>  is a Bay Area member-run housing organization building tenant power for renters</li>
  <li><a href="https://urbanhabitat.org/regional-tenant-organizing-network">The Regional Tenant Organizing Network</a> is a project of Urban Habitat that is uniting tenants across Northern California, from Sacramento to San Jose, working together to rise up against some of the most prominent corporate landlords in the region.</li>
  <li><a href="https://cjjc.org/become-a-member/">Causa Justa:Just Cause</a> is an Oakland-based non-profit who organizes its members in the fight for housing justice and supports tenants in exercising their rights</li>
</ol>`

const volunteeringEmailInSpanish = `<h3>${interestTextInSpanish.volunteering}</h3>
Has indicado que estás interesado/a en la organización comunitaria o voluntariado en East o Deep East Oakland.
<br><br>
La Iniciativa Better Neighborhoods, Same Neighbors (Mejores Vecindarios, Mismos Vecinos) está invirtiendo en soluciones que estén bajo el liderazgo de la comunidad para el Este de Oakland y animamos a los residentes de esta <a href="https://cao-94612.s3.amazonaws.com/documents/City-of-Oakland_Project-Area-Map-rotated.jpg">área geográfica</a> para que participen de muchas maneras, como nuestra campaña mensual “Canvassing the Deep w/The DAP”, limpiezas comunitarias y tiempo de voluntariado en nuestro Centro de Recursos en la 94th Ave. Oakland Parks and Recs Foundation (OPRF, por sus siglas en inglés) organiza eventos gratuitos para plantar árboles durante todo el año,<a href="https://www.meetup.com/free-trees-for-deep-east-oakland/events/"> síguelos en</a> “meetup” para mantenerte informado/a.
<br><br>
Si quieres ser voluntario/a en el Centro de Recursos envía un email a: scott@ebprec.org
<br><br>
Si eres inquilino y estás teniendo problemas con tu vivienda o eres dueño de una propiedad y quieres apoyo para hacer valer tus derechos o si quieres organizarte con tus vecinos, hay algunos grupos de inquilinos con los que te puedes conectar:
<ol>
  <li><a href="http://www.oaklandtenantsunion.org/">Oakland Tenants Union(Sindicato de Inquilinos de Oakland)</a> ofrece asesoramiento por internet y reuniones por Zoom cada 2do lunes del mes</li>
  <li><a href="https://baytanc.com/">Tenant and Neighborhood Councils(Concejos de Inquilinos y Vecinos)</a> es una organización del Área de la Bahía dirigida por sus miembros que trata temas de vivienda y que promueve el poder de los inquilinos.</li>
  <li><a href="https://urbanhabitat.org/regional-tenant-organizing-network">La Red Regional de Organización de Inquilinos (Regional Tenant Organizing Network)</a> es un proyecto de Urban Habitat que está uniendo a inquilinos de todo el norte de California, desde Sacramento hasta San José, trabajando juntos para enfrentar a algunos de los propietarios corporativos más prominentes de la región.</li>
  <li><a href="https://cjjc.org/become-a-member/">Causa Justa:Just Cause</a> es una organización sin fines de lucro con sede en Oakland que organiza a sus miembros en la lucha por la justicia en temas de vivienda y apoya a los inquilinos para hacer respetar sus derechos</li>
</ol>`

export const emails: {[key in Interest]: string} = {
  orientation: orientationEmail,
  investor: investorEmail,
  groupBuy: groupBuyEmail,
  landTrusts: landTrustsEmail,
  affordableHousing: affordableHousingEmail,
  tenantRights: tenantRightsEmail,
  evictions: evictionsEmail,
  adu: aduEmail,
  buildingOrg: buildingsOrgEmail,
  neighbors: neighborsEmail,
  merchantsAssc: merchantsAsscEmail,
  volunteering: volunteeringEmail,
}
export const emailsInSpanish: {[key in Interest]: string} = {
  orientation: orientationEmailInSpanish,
  investor: investorEmailInSpanish,
  groupBuy: groupBuyEmailInSpanish,
  landTrusts: landTrustsEmailInSpanish,
  affordableHousing: affordableHousingEmailInSpanish,
  tenantRights: tenantRightsEmailInSpanish,
  evictions: evictionsEmailInSpanish,
  adu: aduEmailInSpanish,
  buildingOrg: buildingsOrgEmailInSpanish,
  neighbors: neighborsEmailInSpanish,
  merchantsAssc: merchantsAsscEmailInSpanish,
  volunteering: volunteeringEmailInSpanish,
}
