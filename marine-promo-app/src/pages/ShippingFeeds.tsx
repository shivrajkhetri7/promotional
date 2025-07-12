import { motion } from 'framer-motion';
import { staggerContainer, fadeIn, textVariant } from '../utils/motion';
import { SatelliteDish, Ship, Globe, Clock, Rss } from 'lucide-react';
import shippingFeedsBg from '../assets/images/shipping-feeds-bg.jpg';

const feedTypes = [
    {
        title: "Vessel Tracking",
        icon: <Ship className="w-8 h-8 text-blue-500" />,
        description: "Real-time positions of vessels worldwide with AIS data integration",
        features: [
            "Live ship movements",
            "Port arrival/departure updates",
            "Route history analysis"
        ]
    },
    {
        title: "Port Activity",
        icon: <Globe className="w-8 h-8 text-green-500" />,
        description: "Comprehensive port operations and congestion monitoring",
        features: [
            "Berth availability",
            "Cargo throughput stats",
            "Port congestion indicators"
        ]
    },
    {
        title: "Market Intelligence",
        icon: <Rss className="w-8 h-8 text-purple-500" />,
        description: "Freight rates, commodity flows and trade pattern analysis",
        features: [
            "Dry bulk indices",
            "Tanker rates",
            "Container freight trends"
        ]
    },
    {
        title: "Weather Routing",
        icon: <SatelliteDish className="w-8 h-8 text-orange-500" />,
        description: "Optimized voyage planning with weather and ocean current data",
        features: [
            "Storm tracking",
            "Wave height forecasts",
            "Fuel optimization"
        ]
    },
    {
        title: "Regulatory Updates",
        icon: <Clock className="w-8 h-8 text-red-500" />,
        description: "Latest maritime regulations and compliance requirements",
        features: [
            "IMO circulars",
            "Port state control alerts",
            "Environmental regulations"
        ]
    }
];

export default function ShippingFeeds() {
    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden"
        >
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center text-center px-4 overflow-hidden"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 30, 60, 0.8), rgba(0, 20, 40, 0.9)), url(${shippingFeedsBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                        variants={textVariant(0.3)}
                    >
                        Maritime <span className="text-blue-300">Shipping Feeds</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl text-blue-100 mb-8"
                        variants={textVariant(0.5)}
                    >
                        Real-time data and intelligence for maritime professionals
                    </motion.p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                    >
                        Access Live Feeds
                    </motion.button>
                </motion.div>
            </section>

            {/* Features Section */}
            <motion.section
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="py-16 px-4 max-w-7xl mx-auto"
            >
                <motion.div variants={textVariant(0.1)} className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Our <span className="text-blue-600">Data Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Comprehensive shipping intelligence across all vessel types and trade routes
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {feedTypes.map((feed, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-50 p-3 rounded-full mr-4">
                                    {feed.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{feed.title}</h3>
                            </div>
                            <p className="text-gray-600 mb-4">{feed.description}</p>

                            <h4 className="font-semibold text-gray-700 mb-2">Includes:</h4>
                            <ul className="space-y-2">
                                {feed.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center text-sm text-gray-600"
                                        whileHover={{ x: 3 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Data Integration Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                        <div className="md:flex">
                            <div className="md:w-1/2 bg-blue-600 p-8 text-white">
                                <h2 className="text-3xl font-bold mb-6">API Integration</h2>
                                <p className="text-blue-100 mb-6 text-lg">
                                    Seamlessly integrate our shipping data feeds into your existing systems
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </span>
                                        <span>RESTful API with JSON responses</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </span>
                                        <span>WebSocket streams for real-time data</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </span>
                                        <span>Comprehensive documentation</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="md:w-1/2 p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">Sample API Response</h3>
                                <pre className="bg-gray-800 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                                    {`{
  "vessel": {
    "imo": 1234567,
    "name": "MARITIME EXPLORER",
    "type": "Container Ship",
    "flag": "Panama"
  },
  "position": {
    "latitude": 35.6789,
    "longitude": 139.7689,
    "course": 245,
    "speed": 14.5,
    "timestamp": "2023-11-15T08:23:45Z"
  },
  "voyage": {
    "destination": "Port of Los Angeles",
    "eta": "2023-11-22T14:00:00Z",
    "draught": 12.4
  }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                        Ready to access real-time shipping data?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Get started with our shipping feeds today and make data-driven maritime decisions
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                        >
                            Request Demo
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded-full shadow-lg transition-all"
                        >
                            Contact Sales
                        </motion.button>
                    </div>
                </div>
            </section>
        </motion.main>
    );
}