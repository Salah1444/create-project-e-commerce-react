import about from "./../assets/about_us.jpg";
import WhyTrustUs from "./../assets/WhyTrustUs.webp";
import OurStoryImg from "./../assets/story.jpg"
import { motion } from "framer-motion";
import { useState } from "react";

function About() {
  const [Id, SetId] = useState(2);

  const AboutUs =
    "Our journey began with a simple vision: to create an online shopping experience built on trust, quality, and customer satisfaction. What started as a passion for e-commerce quickly grew into a dedicated platform focused on delivering carefully selected products that meet real everyday needs.We believe that online shopping should be easy, transparent, and enjoyable. Every product in our store is chosen with attention to quality, value, and reliability, ensuring that our customers receive only the best. Our goal is not just to sell products, but to provide solutions that improve daily life while maintaining fair and honest pricing.";

  const why = [
    "Carefully selected products",
    "Honest pricing",
    "Secure checkout",
    "Responsive support team",
  ];

  const story = [
    "Started with a deep passion for e-commerce and innovation, our journey began with a simple idea: to make online shopping easier, more reliable, and accessible for everyone. What started as a small project driven by curiosity and ambition quickly evolved into a growing online store built on dedication, hard work, and a clear vision — delivering quality products with an exceptional customer experience.",
    "From the very beginning, our focus has been on carefully selecting products that truly bring value to our customers’ everyday lives. We believe that shopping online should not only be convenient but also trustworthy. That’s why we prioritize transparency, honest pricing, and secure transactions, ensuring that every customer feels confident and safe when shopping with us.",
    "As our community grew, so did our commitment to improvement. We continuously listen to customer feedback, refine our services, and adopt new technologies to provide a smoother and faster shopping experience. Our responsive support team works every day to assist customers, answer questions, and make sure every order meets expectations.",
    "Today, our store continues to grow thanks to the trust and loyalty of our customers. We are more than just an online shop — we are a team passionate about building long-term relationships, delivering quality, and creating a shopping experience that people can rely on again and again.",
  ];

  return (
    <div className="mx-20">
      {/* About Us Section */}
      <article className="flex h-screen justify-around mt-18 mb-5">
        <div>
          <motion.h1
            className="relative pb-5 w-[10rem] font-semibold text-3xl about_us_title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-start w-1/2 text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {AboutUs}
          </motion.p>
        </div>
        <motion.img
          src={about}
          className="relative about_us_img transition-transform rounded-2xl shadow-2xl"
          alt="About Us"
          width={400}
          height={400}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </article>

      {/* Why Trust Us Section */}
      <article className="flex h-screen justify-around mt-18 mb-5">
        <motion.img
          src={WhyTrustUs}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-[20rem] max-h-[20rem] transition-transform rounded-2xl shadow-2xl"
          alt="Why Trust Us"
          width={400}
          height={400}
          whileHover={{ scale: 1.05 }}
        />
        <div>
          <motion.h1
            className="relative pb-5 font-semibold text-3xl about_us_title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Trust Us
          </motion.h1>

          <motion.ul
            className="space-y-3 text-lg text-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {why.map((it, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3"
                variants={{
                  hidden: { opacity: 0, x: 40 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <span className="text-blue-500 text-xl">✓</span>
                {it}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </article>

      {/* Our Story Section */}
      <article className="flex h-screen justify-around mt-18 mb-5">
        <div>
          <motion.h1
            className="pb-5 font-semibold text-3xl about_us_title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h1>

          <ul className="list-inside transition-all duration-700 list-none text-gray-500">
            {story.map((it, i) =>
              i < Id ? <li key={i} className="mb-4">{it}</li> : null
            )}
          </ul>

          <motion.div className={`flex items-center ${Id == story.length ? "":"bg-linear-to-t from-white to-transparent relative bottom-15"}  transition-transform duration-700  justify-center mt-5`}>
            <motion.button
              onClick={() =>
                SetId(prev => (prev === story.length ? 2 : story.length))
              }
              className="px-6 cursor-pointer py-3 bg-white text-gray-800 font-semibold rounded-2xl shadow-md hover:bg-white/90 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {Id === story.length ? "Show Less" : "Show More"}
            </motion.button>
          </motion.div>
        </div>

        <motion.img
          src={OurStoryImg}
          className="relative about_us_img transition-transform rounded-2xl shadow-2xl"
          alt="Our Story"
          width={400}
          height={400}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </article>
    </div>
  );
}

export default About;