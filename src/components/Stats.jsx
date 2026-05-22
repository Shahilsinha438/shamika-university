import { motion } from "framer-motion";

const stats = [
  { number: "25K+", label: "Students" },
  { number: "350+", label: "Faculty" },
  { number: "95%", label: "Placement Rate" },
  { number: "120+", label: "Global Partners" },
];

const Stats = () => {
  return (
    <section className="py-20 px-10">
      <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            className="glass rounded-3xl p-10 text-center"
          >
            <h3 className="text-5xl font-bold gradient-text">
              {item.number}
            </h3>
            <p className="mt-4 text-gray-400">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;