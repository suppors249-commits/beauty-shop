import { Sparkles, Heart, Leaf, Award, MessageCircle, Phone, Info } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export function About() {

  const values = [
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every product is crafted with care and attention to detail",
    },
    {
      icon: Leaf,
      title: "Natural Ingredients",
      description: "We use only the finest natural and organic ingredients",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Luxury cosmetics that deliver exceptional results",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in beauty and skincare",
    },
  ];

  const contactItems = [
    {
      icon: Info,
      title: "Enquiry form",
      desc: "We welcome your questions or feedback via our online form.",
      action: "Submit enquiry",
    },
    {
      icon: "whatsapp",
      title: "WhatsApp",
      desc: "Chat with us مباشرة عبر واتساب لأي استفسار.",
      action: "Chat on WhatsApp",
      link: "https://wa.me/201234567890",
    },
    {
      icon: "phone",
      title: "Phone",
      desc: "Hours: Monday – Friday, 10am – 7pm",
      action: "Call us",
      link: "tel:201234567890",
    },
    {
      icon: "email",
      title: "Email",
      desc: "Send us your questions and we’ll reply as soon as possible.",
      action: "Send Email",
      link: "mailto:youremail@gmail.com",
    }
  ];

  return (
    <div className="min-h-screen bg-[#f2f9f5]">

         <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <img
              src="https://www.aesop.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-aesop-us-Library/default/dw5c95e168/images/pages/contact-us/bc95615bec2a35cbb4308adf7d152b7f2b2979db.jpg?sw=640&sh=640&sm=cut&q=70"
              alt="Beauty"
              className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl"
            />
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm uppercase tracking-widest text-gray-500 block mb-3">
              Helping You Look Good
            </span>
            <h2 className="text-3xl md:text-4xl font-heading mb-6">
              Let’s Talk about Beauty
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Dr Roaa Product, we believe that true beauty comes from nature.
              Our journey began with a simple mission: to create organic skincare
              products that are both effective and gentle on your skin.
              <br /><br />
              Every product in our collection is carefully crafted using 100% natural
              ingredients, sourced ethically and sustainably.
              <br /><br />
              Our commitment to purity means no harmful chemicals, no synthetic
              fragrances, and no compromises.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-6 px-4 bg-[#f2f9f5]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {contactItems.map((item, i) => (
             <div
  key={i}
  className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex flex-col justify-center"
>
  {/* الأيقونات */}
  <div className="flex justify-center mb-4">
    {item.icon === "whatsapp" ? (
      <FontAwesomeIcon
        icon={faWhatsapp}
        className="text-3xl text-green-500"
      />
    ) : item.icon === "phone" ? (
      <FontAwesomeIcon
        icon={faPhone}
        className="text-2xl text-black"
      />
    ) : item.icon === "email" ? (
      <FontAwesomeIcon
        icon={faEnvelope}
        className="text-2xl text-blue-500"
      />
    ) : (
      <item.icon className="w-6 h-6 text-black" />
    )}
  </div>

  {/* title */}
  <h3 className="text-lg font-semibold mb-2 text-center">{item.title}</h3>

  {/* desc */}
  <p className="text-sm text-gray-500 whitespace-pre-line mb-4 text-center">
    {item.desc}
  </p>

  {/* button */}
  <a
    href={item.link || "#"}
    target="_blank"
    rel="noopener noreferrer"
    className="flex justify-center items-center gap-2 text-sm font-medium group hover:text-primary"
  >
    {item.action}
    <span className="group-hover:translate-x-1 transition">→</span>
  </a>
</div>
            ))}
          </div>
        </div>
      </section>
       <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <img
              src="https://dr-roaa-product.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-08-at-2.21.28-PM.jpeg"
              alt="Beauty"
              className="w-full h-[350px] md:h-[450px] object-cover rounded-2xl"
            />
          </div>
          <div className="text-center max-w-3xl mx-auto">
           
            <h2 className="text-3xl md:text-4xl font-heading mb-6">
               Dr Roaa Product
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Dr Roaa Product, we believe that true beauty comes from nature.
              Our journey began with a simple mission: to create organic skincare
              products that are both effective and gentle on your skin.
            
            </p>
          </div>
        </div>
      </section> 

      
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-8">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Founded in 2020, Beauté emerged from a simple belief: beauty products should be
            as natural as they are effective.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Today, we're proud to offer a curated collection of skincare and beauty products.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We're more than just a cosmetics brand – we're a community of beauty lovers.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-heading text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-500">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
    <section className="py-16 px-4">
  <div className="max-w-sm mx-auto">
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <h2 className="text-xl md:text-2xl font-semibold text-center p-4">
        Find Us Here
      </h2>
      <div className="w-full h-64">
        <iframe
          title="Google Map for Brainstorm Force"
          src="https://maps.google.com/maps?q=Brainstorm%20Force&z=12&hl=en&t=m&output=embed&iwloc=near"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          className="rounded-b-2xl"
        ></iframe>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}