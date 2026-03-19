// Footer.tsx
import React, { FC, FormEvent } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("شكراً على الاشتراك!");
  };

  return (
    <footer className="bg-[#6b1727] text-white">
      {/* Top reassurance icons */}
      <div className="py-8 flex justify-center gap-8 flex-wrap">
        <div className="flex flex-col items-center">
          <img
            src="https://www.aesop.com/on/demandware.static/-/Sites-aesop-us-Library/default/dweed4f947/images/demo/Secure_checkout.svg"
            alt="Secure checkout"
            className="w-12 h-12 mb-2"
          />
          <span className="text-center text-sm">Secure checkout</span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://www.aesop.com/on/demandware.static/-/Sites-aesop-us-Library/default/dwb63d1807/images/demo/samples.svg"
            alt="Complimentary samples"
            className="w-12 h-12 mb-2"
          />
          <span className="text-center text-sm">
            Complimentary <br /> samples
          </span>
        </div>
        <div className="flex flex-col items-center">
          <img
            src="https://www.aesop.com/on/demandware.static/-/Sites-aesop-us-Library/default/dw043e3ba3/images/demo/gift.svg"
            alt="Gift wrapping"
            className="w-12 h-12 mb-2"
          />
          <span className="text-center text-sm">
            Complimentary <br /> gift wrapping
          </span>
        </div>
      </div>

      {/* Middle navigation */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Orders & support */}
        <div>
          <h2 className="font-semibold mb-4">Orders and support</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/customer-service/contact-us.html" className="hover:underline">
                Contact us
              </a>
            </li>
            <li>
              <a href="https://us.assistance.aesop.com/hc/en-us" target="_blank" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="https://us.assistance.aesop.com/hc/en-us/categories/7375676968591-Orders-and-shipping" target="_blank" className="hover:underline">
                Shipping
              </a>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h2 className="font-semibold mb-4">About</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.aesop.com/our-story.html" className="hover:underline">
                Our story
              </a>
            </li>
            <li>
              <a href="https://www.aesop.com/careers.html" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="https://www.aesop.com/customer-service/privacy-policy.html" className="hover:underline">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Sustainability */}
        <div>
          <h2 className="font-semibold mb-4">Sustainability</h2>
          <p className="text-sm mb-2">
            All Aesop products are vegan, and we do not test our formulations or ingredients on animals. 
            <a href="https://www.aesop.com/sustainability.html" className="underline ml-1">
              Learn more
            </a>
          </p>
        </div>
      </div>

      {/* Newsletter */}
     
    </footer>
  );
};

export default Footer;